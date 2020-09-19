import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { TYPE_ADMIN } from "../../../core/enums/TYPE_ADMIN";
import { Project } from "../../../core/models/project.model";
import { Technology } from "../../../core/models/technology.model";
import { ProjectsService } from 'src/app/core/services/projects/projects.service';
import { TechnologyService } from 'src/app/core/services/technologys/technology.service';
import { mimeType } from "./mime-type.validator";

@Component({
  selector: 'app-admin-projects',
  templateUrl: './admin-projects.component.html',
  styleUrls: ['./admin-projects.component.css']
})
export class AdminProjectsComponent implements OnInit {

  type_admin: TYPE_ADMIN
  project: Project
  technologys: Technology[]
  form: FormGroup
  selectable = true;
  removable = true;
  technologyCtrl = new FormControl();
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredTechnologys: Observable<Technology[]>;
  imagePreview: string

  @ViewChild('technologyInput') technologyInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(
    private projectService: ProjectsService,
    private technologyService: TechnologyService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.project = {
      _id: "",
      description: "",
      image: "",
      name: "",
      technologys: [],
      url: ""
    }
    this.buildForm()
  }

  ngOnInit(): void {
    this.defineTypeAdmin()
    this.fetchTechnologys()
  }

  private createTechnologyObservable() {

    this.filteredTechnologys = this.technologyCtrl.valueChanges.pipe(
      //startWith(null),
      map((Tech: string | null) => Tech ? this._filter(Tech) : this.technologys.slice()));
    console.log("Filtered technologys");
    console.log(this.filteredTechnologys);
  }

  private _filter(value: string): Technology[] {

    // console.log("Filter");
    // console.log(value);

    const filterValue = value.toLowerCase();
    let result = this.technologys.filter(tech => tech.name.toLowerCase().indexOf(filterValue) === 0);
    // console.log("Result");
    // console.log(result);
    return result

  }

  saveProject(event: Event) {
    event.preventDefault

    if (this.form.invalid) {
      return
    }

    this.saveProjectDataBase()
  }

  remove(technology: Technology) {
    const index = this.project.technologys.indexOf(technology)
    if (index >= 0) {
      this.project.technologys.splice(index, 1)
    }
  }

  addTechnology(event: MatChipInputEvent) {
    const input = event.input;
    const value = event.value;

    if (value) {
      let technology = this.technologys.find(tch => tch.name === value)
      if (technology) {
        this.project.technologys.push(technology)
      }
    }

    if (input) {
      input.value = ''
    }

    this.technologyCtrl.setValue(null)
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.project.technologys.push(this.technologys.find(tch => tch._id === event.option.viewValue));
    this.technologyInput.nativeElement.value = '';
    this.technologyCtrl.setValue(null);
  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0]
    this.form.patchValue({ image: file })
    this.form.get('image').updateValueAndValidity()
    const reader = new FileReader()
    reader.onload = () => {
      this.imagePreview = reader.result as string
    }
    reader.readAsDataURL(file)
  }

  private defineTypeAdmin() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id
      if (id) {
        this.type_admin = TYPE_ADMIN.EDIT
        // this.skill = this.skillService.getSkill(id)
        // this.form.patchValue(this.skill)
      }
      else {
        this.type_admin = TYPE_ADMIN.CREATE
      }
    })
  }

  private fetchTechnologys() {
    this.technologyService
      .getTechnologys()
      .subscribe(response => {
        this.technologys = response.data.technologys
        this.createTechnologyObservable()
      })
  }

  private saveProjectDataBase() {
    let result
    if (this.type_admin === TYPE_ADMIN.CREATE) {
      console.log(this.form.value);
      result = this.projectService.createProject(this.form.value, this.project.technologys)
    }
    result.subscribe(response => {
      this.router.navigate(['./admin/projects'])
    })
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: new FormControl(null, { validators: [Validators.required], asyncValidators: [mimeType] }),
      url: ['', [Validators.required]]
    })
  }

}

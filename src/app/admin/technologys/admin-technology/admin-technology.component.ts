import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { TYPE_ADMIN } from "../../../core/enums/TYPE_ADMIN";
import { Technology } from "../../../core/models/technology.model";
import { TechnologyService } from "src/app/core/services/technologys/technology.service";

@Component({
  selector: 'app-admin-technology',
  templateUrl: './admin-technology.component.html',
  styleUrls: ['./admin-technology.component.css']
})
export class AdminTechnologyComponent implements OnInit {

  type_admin: TYPE_ADMIN
  technology: Technology
  form: FormGroup

  constructor(
    private technologyService: TechnologyService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.buildForm()
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id
      if (id) {
        this.type_admin = TYPE_ADMIN.EDIT
        this.technology = this.technologyService.getTechnology(id)
        this.form.patchValue(this.technology)
      }
      else {
        this.type_admin = TYPE_ADMIN.CREATE
      }
    })
  }

  saveTechnology(event: Event) {
    event.preventDefault
    if (this.form.invalid) {
      return
    }
    this.saveTechnologyDataBase()
  }

  private saveTechnologyDataBase() {
    let result
    if (this.type_admin === TYPE_ADMIN.CREATE) {
      result = this.technologyService.createTechnology(this.form.value)
    }
    if (this.type_admin === TYPE_ADMIN.EDIT) {
      result = this.technologyService.updateTechnology(this.technology._id, this.form.value)
    }
    result.subscribe(response => {
      this.router.navigate(['./admin/technologys'])
    })
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]]
    })
  }

}

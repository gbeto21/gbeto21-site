import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TYPE_ADMIN } from "../../../core/enums/TYPE_ADMIN";
import { Skill } from "../../../core/models/skill.model";
import { Router } from "@angular/router";

@Component({
  selector: 'admin-skill',
  templateUrl: './admin-skill.component.html',
  styleUrls: ['./admin-skill.component.css']
})
export class AdminSkillComponent implements OnInit {

  type_admin: TYPE_ADMIN
  skill: Skill
  form: FormGroup

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router) {
    this.buildForm()
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id
      if (id) {
        this.type_admin = TYPE_ADMIN.EDIT
      }
      else {
        this.type_admin = TYPE_ADMIN.CREATE
      }
    })
  }

  saveSkill(event: Event) {
    event.preventDefault

    if (this.form.invalid) {
      return
    }

    const skill = this.form.value
    this.router.navigate(['./admin/skills'])
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      percent: [0, [Validators.required]]
    })
  }

}

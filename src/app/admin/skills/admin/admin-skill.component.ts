import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormControl, Validators } from "@angular/forms";
import { TYPE_ADMIN } from "../../../core/enums/TYPE_ADMIN";

@Component({
  selector: 'app-create',
  templateUrl: './admin-skill.component.html',
  styleUrls: ['./admin-skill.component.css']
})
export class AdminSkillComponent implements OnInit {

  type_admin: TYPE_ADMIN
  emailField: FormControl

  constructor(private route: ActivatedRoute) {
    this.emailField = new FormControl('', [
      Validators.minLength(4),
      Validators.maxLength(10)
    ])

    this.emailField.valueChanges
      .subscribe(value => {
        console.log(value);

      })
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

}

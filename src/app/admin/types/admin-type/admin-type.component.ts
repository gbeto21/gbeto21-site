import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { TYPE_ADMIN } from "../../../core/enums/TYPE_ADMIN";
import { Type } from "../../../core/models/type.model";
import { TypesService } from 'src/app/core/services/types/types.service';

@Component({
  selector: 'app-admin-type',
  templateUrl: './admin-type.component.html',
  styleUrls: ['./admin-type.component.css']
})
export class AdminTypeComponent implements OnInit {

  type_admin: TYPE_ADMIN
  type: Type
  form: FormGroup

  constructor(
    private typeService: TypesService,
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
        // this.type = this.typeService.getType(id)
        // this.form.patchValue(this.type)
      }
      else {
        this.type_admin = TYPE_ADMIN.CREATE
      }
    })
  }

  saveType(event: Event) {
    event.preventDefault
    if (this.form.invalid) {
      return
    }
    this.saveTypeDataBase()
  }

  saveTypeDataBase() {
    let result
    if (this.type_admin === TYPE_ADMIN.CREATE) {
      result = this.typeService.createType(this.form.value)
    }
    if (this.type_admin === TYPE_ADMIN.EDIT) {
      //result = this.typeService.updateType(this.type._id, this.form.value)
    }
    result.subscribe(response => {
      this.router.navigate(['./admin/types'])
    })
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]]
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { TYPE_ADMIN } from "../../../core/enums/TYPE_ADMIN";
import { Statistic } from "../../../core/models/statistic.model";
import { StatisticService } from "../../../core/services/statistics/statistic.service";

@Component({
  selector: 'app-admin-statistic',
  templateUrl: './admin-statistic.component.html',
  styleUrls: ['./admin-statistic.component.css']
})
export class AdminStatisticComponent implements OnInit {

  type_admin: TYPE_ADMIN
  statistic: Statistic
  form: FormGroup

  constructor(
    private statisticService: StatisticService,
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
        this.statistic = this.statisticService.getStatistic(id)
        this.form.patchValue(this.statistic)
      }
      else {
        this.type_admin = TYPE_ADMIN.CREATE
      }
    })
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      value: [0, [Validators.required]],
      icon: ['', [Validators.required]]
    })
  }

  saveStatistic(event: Event) {
    event.preventDefault
    if (this.form.invalid) {
      return
    }
    this.saveStatisticDataBase()
  }

  saveStatisticDataBase() {
    let result
    if (this.type_admin === TYPE_ADMIN.CREATE) {
      result = this.statisticService.createStatistic(this.form.value)
    }
    if (this.type_admin === TYPE_ADMIN.EDIT) {
      result = this.statisticService.updateStatistic(this.statistic._id, this.form.value)
    }
    result.subscribe(response => {
      this.router.navigate(['./admin/statistics'])
    })
  }

}

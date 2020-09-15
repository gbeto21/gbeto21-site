import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { StatisticService } from 'src/app/core/services/statistics/statistic.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  statistic

  constructor(
    private statisticService: StatisticService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.fetchStatistic(params.id)
    })
  }

  fetchStatistic(id: string) {
    this.statistic = this.statisticService.getStatistic(id)
  }

}

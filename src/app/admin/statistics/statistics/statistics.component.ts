import { Component, OnInit } from '@angular/core';
import { StatisticService } from "../../../core/services/statistics/statistic.service";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  statistics = []
  isLoading = false
  displayedColumns: string[] = ['name', 'value', 'icon', 'actions'];

  constructor(private statisticService: StatisticService) { }

  ngOnInit(): void {
    this.fetchStatistics()
  }

  onDelete(statisticId: string) {
    let statisticDelete = this.statistics.find(st => st._id === statisticId)
    if (confirm(`Are sure you want to delete the statistic: ${statisticDelete.name}`)) {
      this.statisticService
        .deleteStatistic(statisticDelete._id)
        .subscribe(res => {
          this.fetchStatistics()
        })
    }
  }

  private fetchStatistics() {
    this.statisticService
      .getSkills()
      .subscribe(response => {
        this.statistics = response.data.statistics
        StatisticService.statistics = this.statistics
      })
  }

}

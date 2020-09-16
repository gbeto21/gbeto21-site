import { Component, OnInit } from '@angular/core';
import { TechnologyService } from "../../../core/services/technologys/technology.service";

@Component({
  selector: 'app-technologys',
  templateUrl: './technologys.component.html',
  styleUrls: ['./technologys.component.css']
})
export class TechnologysComponent implements OnInit {

  technologys = []
  isLoading = false
  displayedColumns: string[] = ['name', 'actions'];

  constructor(private technologyService: TechnologyService) { }

  ngOnInit(): void {
    this.fetchTechnologys()
  }

  onDelete(technologyId: string) {
    let technologyDelete = this.technologys.find(tch => tch._id === technologyId)
    if (confirm(`Are sure you want to delete the technology: ${technologyDelete.name}`)) {
      this.technologyService
        .deleteTechnology(technologyDelete._id)
        .subscribe(res => {
          this.fetchTechnologys()
        })
    }
  }

  private fetchTechnologys() {
    this.technologyService
      .getTechnologys()
      .subscribe(response => {
        this.technologys = response.data.technologys
        TechnologyService.technologys = this.technologys
      })
  }

}

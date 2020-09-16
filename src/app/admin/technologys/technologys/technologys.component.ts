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

  onDelete(event: Event){

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

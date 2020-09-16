import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { TechnologyService } from "../../../core/services/technologys/technology.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  technology

  constructor(
    private technologyService: TechnologyService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.fetchTechnology(params.id)
    })
  }

  fetchTechnology(id: string) {
    this.technology = this.technologyService.getTechnology(id)
  }

}

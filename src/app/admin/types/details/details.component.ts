import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { TypesService } from "../../../core/services/types/types.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  type

  constructor(
    private typeService: TypesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.fetchType(params.id)
    })
  }

  fetchType(id: string) {
    this.type = this.typeService.getType(id)
  }

}

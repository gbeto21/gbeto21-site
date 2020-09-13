import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { SkillsService } from "../../../core/services/skills/skills.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  skill

  constructor(private skillService: SkillsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.fetchSkill(params.id)
    })
  }

  fetchSkill(id: string) {
    this.skill = this.skillService.getSkill(id)
    console.log(this.skill);

  }

}

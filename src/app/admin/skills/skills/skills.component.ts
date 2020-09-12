import { Component, OnInit } from '@angular/core';
import { SkillsService } from "../../../core/services/skills/skills.service";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills = []
  isLoading = false

  constructor(private skillService: SkillsService) { }

  ngOnInit(): void {
    this.fetchSkills()
  }

  onDelete(skillId: string) {
    alert('An delete action has been pressed. ' + skillId)
    this.isLoading = true
  }

  fetchSkills() {
    this.skills = this.skillService.getSkills()
  }

}

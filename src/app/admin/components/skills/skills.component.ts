import { Component, OnInit } from '@angular/core';
// import { Skill } from "./skill.model";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills = [
    { id: 1, name: 'JavaScript', description: 'An common language.', percent: 25 }
  ]
  isLoading = false

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(skillId: string) {
    alert('An delete action has been pressed. ' + skillId)
    this.isLoading = true
  }

}

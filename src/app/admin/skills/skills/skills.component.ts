import { Component, OnInit } from '@angular/core';
import { SkillsService } from "../../../core/services/skills/skills.service";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills = [
    // { id: '1', name: 'JavaScript', description: 'An common language.', percent: 25 },
    // { id: '2', name: 'Flask', description: 'An popular Framework.', percent: 15 }
  ]
  isLoading = false
  displayedColumns: string[] = ['name', 'description', 'percent', 'actions'];

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

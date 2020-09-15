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
  displayedColumns: string[] = ['name', 'description', 'percent', 'actions'];

  constructor(private skillService: SkillsService) { }

  ngOnInit(): void {
    this.fetchSkills()
  }

  onDelete(skillId: string) {

    let skillDelete = this.skills.find(sk => sk._id === skillId)
    if (confirm(`Are sure you want to delete the skill: ${skillDelete.name}`)) {
      this.skillService
        .deleteSkill(skillDelete._id)
        .subscribe(res => {
          this.fetchSkills()
        })
    }
  }

  private fetchSkills() {
    this.skillService
      .getSkills()
      .subscribe(response => {
        this.skills = response.data.skills
        SkillsService.skills = this.skills
      })
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  skills = [
    { id: '1', name: 'JavaScript', description: 'An common language.', percent: 25 },
    { id: '2', name: 'Flask', description: 'An popular Framework.', percent: 15 }
  ]

  constructor() { }

  getSkills() {
    return this.skills
  }

  getSkill(id: string) {
    return this.skills.find(sk => sk.id === id)
  }

}

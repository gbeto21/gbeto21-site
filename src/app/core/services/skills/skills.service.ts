import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }

  getSkills() {
    return [
      { id: 1, name: 'JavaScript', description: 'An common language.', percent: 25 },
      { id: 2, name: 'Flask', description: 'An popular Framework.', percent: 15 }
    ]
  }

}

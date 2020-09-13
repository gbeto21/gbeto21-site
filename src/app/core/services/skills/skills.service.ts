import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  skills = []

  constructor(
    private http: HttpClient
  ) { }

  getSkills() {

    return this.http.post<any>
      ('http://localhost:5000/graphql/',
        {
          "query": `query{ skills {
            _id
            name
            description
            percent
          }}`
        })
  }

  getSkill(id: string) {
    return this.skills.find(sk => sk.id === id)
  }

}

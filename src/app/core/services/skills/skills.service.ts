import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Skill } from "../../models/skill.model";
import { environment } from 'src/environments/environment';

const URL = `${environment.apiUrl}/graphql`

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
      (URL,
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

  createSkill(skill: Skill) {
    return this.http.post<any>(URL, {
      "query": `mutation {
      createSkill(
        skillInput:
        {
          name: "${skill.name}", description: "${skill.description}", percent: ${skill.percent}
        }
      ),{
        name
        description
        percent
      }
    }`})
  }

}

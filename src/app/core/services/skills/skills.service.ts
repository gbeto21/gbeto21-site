import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Skill } from "../../models/skill.model";
import { environment } from 'src/environments/environment';

const URL = `${environment.apiUrl}/graphql`

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  public static skills = []

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

  updateSkill(_id: string, skill: Skill) {
    return this.http.post<any>(URL,
      {
        "query": `mutation {
          updateSkill(skillInput: {_id: "${_id}", name: "${skill.name}", description: "${skill.description}", percent: ${skill.percent}}) {
            _id
            name
            description
            percent
          }
        }`
      })
  }

  getSkill(id: string) {
    return SkillsService.skills.find(sk => sk._id === id)
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

  deleteSkill(id: string) {
    return this.http.post<any>(URL, {
      "query": `mutation {
    deleteSkill(_id: "${id}") {
      name
    }
  }`
    })
  }

}

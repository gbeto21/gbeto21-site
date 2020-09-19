import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Project } from "../../models/project.model";
import { Technology } from "../../models/technology.model";
import { environment } from "src/environments/environment";

const URL = `${environment.apiUrl}/graphql`

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  public static projects = []

  constructor(private http: HttpClient) { }

  getProjects() {
    return this.http.post<any>(URL, {
      "query": `query{
        projects{
          _id
          name
          description
          image
          url
          technologys{
          _id
          name
          }
        }
      }`
    })
  }

  getProject(_id: string) {
    return ProjectsService.projects.find(prj => prj._id === _id)
  }

  createProject(project: Project, technologys: Technology[]) {
    let technologysProject = this.createTechnologyInput(technologys)

    const postData = new FormData()
    postData.append("query", `mutation{
      createProject(projectInput: {name: "${project.name}", description: "${project.description}", image: "${project.image}", url: "${project.url}",technologys:${JSON.stringify(technologysProject)}}),
      {
        _id
      }
    }
    `)
    postData.append("image", project.image)

    return this.http.post<any>(URL, postData)
  }

  updateProject(_id: String, project: Project, techologys: Technology[]) {
    let technologysProject = this.createTechnologyInput(techologys)

    console.log('Project on service:');
    console.log(project);

    const postData = new FormData()
    postData.append("query", `mutation{
      updateProject(projectInput: {_id: "${_id}", name: "${project.name}", description: "${project.description}", image: "${project.image}", url: "${project.url}",technologys:${JSON.stringify(technologysProject)}}),
      {
        _id
      }
    }
    `)
    postData.append("image", project.image)

    return this.http.post<any>(URL, postData)
  }

  private createTechnologyInput(technologys: Technology[]) {
    let inputTechnologys: string[] = []
    technologys.map(tech => {
      inputTechnologys.push(tech._id)
    })

    return inputTechnologys
  }
}

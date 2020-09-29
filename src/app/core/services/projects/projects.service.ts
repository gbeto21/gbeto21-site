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

  getProjects(technologys?: [Technology]) {

    let paramsTechnologys: String = ''
    if (technologys && technologys.length > 0) {
      paramsTechnologys = this.convertTechologysToObjects(technologys)
    }

    return this.http.post<any>(URL, {
      "query": `query{
        projects${paramsTechnologys}{
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

  deleteProject(id: string) {
    return this.http.post<any>(URL, {
      "query": `mutation {
        deleteProject(_id: "${id}") {
      name
    }
  }`
    })
  }

  private createTechnologyInput(technologys: Technology[]) {
    let inputTechnologys: string[] = []
    technologys.map(tech => {
      inputTechnologys.push(tech._id)
    })

    return inputTechnologys
  }

  private convertTechologysToObjects(technologys?: [Technology]) {

    let technologysString: string = '(technologys:['
    technologys.map(tech => {
      technologysString += this.technologyToString(tech) + ','
    })
    technologysString = technologysString.substring(0, technologysString.length - 1)
    return `${technologysString}])`
  }

  private technologyToString(technology) {
    var str = '';
    for (var k in technology) {
      if (technology.hasOwnProperty(k)) {
        str += ` ${k}:"${technology[k]}",`
      }
    }
    str = str.substring(0, str.length - 1)
    return `{${str}}`;
  }
}

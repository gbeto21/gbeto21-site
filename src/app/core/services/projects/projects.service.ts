import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Project } from "../../models/project.model";
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

}

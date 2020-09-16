import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Technology } from "../../models/technology.model";
import { environment } from 'src/environments/environment';

const URL = `${environment.apiUrl}/graphql`

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {

  public static technologys = []

  constructor(private http: HttpClient) { }

  getTechnologys() {
    return this.http.post<any>(URL, {
      "query": `query{ technologys {
        _id
        name
      }}`
    })
  }

  getTechnology(id: string) {
    return TechnologyService.technologys.find(tch => tch._id === id)
  }

  createTechnology(technology: Technology) {
    return this.http.post<any>(URL, {
      "query": `mutation {
        createTechnology(
          technologyInput: {
            name: "${technology.name}"
          }
        ),{
          _id
          name
        }
      }`
    })
  }

  updateTechnology(_id: string, technology: Technology) {
    return this.http.post<any>(URL, {
      "query": `mutation {
        updateTechnology(technologyInput: {_id: "${_id}", name: "${technology.name}"}){
          _id
          name
        }
      }`
    })
  }

  deleteTechnology(id: string) {
    return this.http.post<any>(URL, {
      "query": `mutation {deleteTechnology(_id:"${id}"){
          name
        }
      }`
    })
  }

}

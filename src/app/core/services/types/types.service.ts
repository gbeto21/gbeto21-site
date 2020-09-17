import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { environment } from 'src/environments/environment';

import { Type } from "../../models/type.model";

const URL = `${environment.apiUrl}/graphql`

@Injectable({
  providedIn: 'root'
})
export class TypesService {

  public static types = []

  constructor(private http: HttpClient) { }

  getTypes() {
    return this.http.post<any>(URL, {
      "query": `query{ types {
        _id
        name
      }}`
    })
  }

  getType(id: string) {
    return TypesService.types.find(ty => ty._id === id)
  }

  createType(type: Type) {
    return this.http.post<any>(URL, {
      "query": `mutation {
        createType(
          typeInput: {
            name: "${type.name}"
          }
        ),{
          _id
          name
        }
      }`
    })
  }

  updateType(_id: string, type: Type) {
    return this.http.post<any>(URL, {
      "query": `mutation {
        updateType(typeInput: {_id: "${_id}", name: "${type.name}"}){
          _id
          name
        }
      }`
    })
  }

  deleteType(id: string) {
    return this.http.post<any>(URL, {
      "query": `mutation {deleteType(_id:"${id}"){
          name
        }
      }`
    })
  }

}

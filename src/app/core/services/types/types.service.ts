import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Technology } from "../../models/technology.model";
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

}

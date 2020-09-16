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

  getStatistics() {
    return this.http.post<any>(URL, {
      "query": `query{ technologys {
        _id
        name
      }}`
    })
  }

}

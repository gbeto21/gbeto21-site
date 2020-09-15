import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Statistic } from "../../models/statistic.model";
import { environment } from 'src/environments/environment';

const URL = `${environment.apiUrl}/graphql`

@Injectable({
  providedIn: 'root'
})
export class StatisticService {

  public static statistics = []

  constructor(private http: HttpClient) { }

  getSkills() {
    return this.http.post<any>(URL, {
      "query": `query{ statistics {
        _id
        name
        value
        icon
      }}`
    })
  }

}

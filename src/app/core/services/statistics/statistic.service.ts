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

  getStatistics() {
    return this.http.post<any>(URL, {
      "query": `query{ statistics {
        _id
        name
        value
        icon
      }}`
    })
  }

  getStatistic(id: string) {
    return StatisticService.statistics.find(st => st._id === id)
  }

  createStatistic(statistic: Statistic) {
    return this.http.post<any>(URL, {
      "query": `mutation{
        createStatistic(
          statisticInput:
          {
            name:"${statistic.name}", value: ${statistic.value}, icon: "${statistic.icon}"
          }
          ),{
            name
            value
            icon
          }
      }`})
  }

  updateStatistic(_id: string, statistic: Statistic) {
    return this.http.post<any>(URL, {
      "query": `mutation{
        updateStatistic(statisticInput: {_id: "${_id}", name:"${statistic.name}", value:${statistic.value}, icon:"${statistic.icon}"}) {
          _id
          name
          value
          icon
        }
      }`
    })
  }

  deleteStatistic(id: string){
    return this.http.post<any>(URL, {
      "query": `mutation {deleteStatistic(_id:"${id}"){
        name
      }
    }`
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { environment } from "src/environments/environment";

const URLIMAGES = `${environment.apiUrl}/images`

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  angular = `${URLIMAGES}/angular.svg`
  node = `${URLIMAGES}/nodejs.svg`
  express = `${URLIMAGES}/expressjs.svg`
  graphql = `${URLIMAGES}/graphql.svg`
  mongodb = `${URLIMAGES}/mongodb.svg`

  constructor() { }

  ngOnInit(): void {
  }

}

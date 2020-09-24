import { Component, OnInit } from '@angular/core';
import { environment } from "src/environments/environment";

const URLIMAGES = `${environment.apiUrl}/images`

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  image = `${URLIMAGES}/me.jpg`

  constructor() { }

  ngOnInit(): void {
  }

}

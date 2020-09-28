import { Component, OnInit } from '@angular/core';
import { environment } from "src/environments/environment";

const URLIMAGES = `${environment.apiUrl}/images`

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  links = [
    {
      link: 'https://www.facebook.com/gbeto21/',
      image: `${URLIMAGES}/facebook.png`,
    },
    {
      link: 'https://twitter.com/gbeto21',
      image: `${URLIMAGES}/twitter.png`,
    },
    {
      link: 'https://github.com/gbeto21',
      image: `${URLIMAGES}/gitHub.png`,
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { environment } from "src/environments/environment";

const URLIMAGES = `${environment.apiUrl}/images`

@Component({
  selector: 'app-introduce',
  templateUrl: './introduce.component.html',
  styleUrls: ['./introduce.component.css']
})
export class IntroduceComponent implements OnInit {
  image = `${URLIMAGES}/me.jpg`

  socialNetworks = [
    {
      name: 'GitHub',
      src: `${URLIMAGES}/gitHub.svg`,
      url: `https://github.com/gbeto21`
    },
    {
      name: 'twitter',
      src: `${URLIMAGES}/twitter.svg`,
      url: `https://twitter.com/gbeto21`
    },
    {
      name: 'facebook',
      src: `${URLIMAGES}/facebook.svg`,
      url: `https://www.facebook.com/gbeto21`
    },
    {
      name: 'instagram',
      src: `${URLIMAGES}/instagram.svg`,
      url: `https://www.instagram.com/gbeto21/`
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

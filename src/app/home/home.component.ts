import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import Typed from 'typed.js';

import { TypesService } from 'src/app/core/services/types/types.service';
import { environment } from "src/environments/environment";

const URLIMAGES = `${environment.apiUrl}/images`

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {

  //strings = []
  types = []
  images = [
    { 'source': `${URLIMAGES}/slide1.jpg` },
    { 'source': `${URLIMAGES}/slide2.jpg` },
    { 'source': `${URLIMAGES}/slide3.jpg` }
  ];

  constructor(
    config: NgbCarouselConfig,
    private typeService: TypesService
  ) {
    config.interval = 4500;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.showNavigationArrows = false;
    config.showNavigationIndicators = false;
  }

  ngOnInit(): void {
    this.fetchTypes()
  }

  private fetchTypes() {
    this.typeService
      .getTypes()
      .subscribe(response => {
        this.createType(this.convertTypesToStrings(response.data.types))
      })
  }

  private convertTypesToStrings(types) {

    if (types.length <= 0) {
      return
    }

    let strings = []
    types.map(type => strings.push(type.name))
    return strings
  }

  private createType(strings) {
    console.log("Strings>");
    console.log(strings);

    const options = {
      strings: strings,
      typeSpeed: 100,
      backSpeed: 100,
      showCursor: false,
      cursorChar: '|',
      loop: true,
    };

    const typed = new Typed('.typed-element', options);
  }

}

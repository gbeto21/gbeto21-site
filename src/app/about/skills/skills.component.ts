import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/core/models/skill.model';
import { SkillsService } from 'src/app/core/services/skills/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skill[] = []

  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "nextArrow": "<div class='nav-btn next-slide'></div>",
    "prevArrow": "<div class='nav-btn prev-slide'></div>",
    "dots": true,
    "infinite": false,
    "variableWidth": true,
    "centerMode": false,
    "centerPadding": '60px',
    "autoplay": true,
    "autoplaySpeed": 2000,
    // rtl: true
  };

  constructor(private skillService: SkillsService) { }

  ngOnInit(): void {
    this.fetchSkills()
    // this.slideConfig.slidesToShow = this.skills.length
  }

  private fetchSkills() {
    this.skillService
      .getSkills()
      .subscribe(response => {
        this.skills = response.data.skills
        console.log(this.skills);
      })
  }

  slickInit(e) {
    // console.log('slick initialized');
  }

  breakpoint(e) {
    // console.log('breakpoint');
  }

  afterChange(e) {
    // console.log('afterChange');
  }

  beforeChange(e) {
    // console.log('beforeChange');
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-create',
  templateUrl: './admin-skill.component.html',
  styleUrls: ['./admin-skill.component.css']
})
export class AdminSkillComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      const id = params.id
      if (id) {
        alert(id)
      }
      else{
        alert("No id.")
      }
    })
  }

}

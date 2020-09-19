import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProjectsService } from 'src/app/core/services/projects/projects.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  project

  constructor(private projectService: ProjectsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.fetchProject(params.id)
    })
  }

  fetchProject(id: string) {
    this.project = this.projectService.getProject(id)
  }

}

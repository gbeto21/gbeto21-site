import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Project } from 'src/app/core/models/project.model';
import { Technology } from 'src/app/core/models/technology.model';
import { ProjectsService } from 'src/app/core/services/projects/projects.service';
import { TechnologyService } from 'src/app/core/services/technologys/technology.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  technologysControl = new FormControl([]);
  technologys: Technology[]
  projects: Project[]
  isLoading = false

  constructor(
    private projectService: ProjectsService,
    private technologyService: TechnologyService
  ) { }

  ngOnInit(): void {
    this.fetchTechnologys()
  }

  onTechnologyRemoved(technology: Technology): void {
    const toppings = this.technologysControl.value as Technology[];
    this.removeFirst(toppings, technology);
    this.technologysControl.setValue(toppings);
    console.log(this.technologysControl.value as Technology[]);
  }

  searchProjects() {
    this.isLoading = true
    this.projects = []
    this.projectService
      .getProjects(this.technologysControl.value)
      .subscribe(response => {
        this.projects = response.data.projects
        this.isLoading = false
      })
  }

  private fetchTechnologys() {
    this.technologyService
      .getTechnologys()
      .subscribe(response => {
        this.technologys = response.data.technologys
      })
  }

  private removeFirst<T>(array: T[], toRemove: T): void {
    const index = array.indexOf(toRemove);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }

}

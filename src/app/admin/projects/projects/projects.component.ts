import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/core/services/projects/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = []
  isLoading = false
  displayedColumns: string[] = ['name', 'actions'];

  constructor(private projectService: ProjectsService) { }

  ngOnInit(): void {
    this.fetchProjects()
  }

  onDelete(id: string) {
    let projectDelete = this.projects.find(tch => tch._id === id)
    if (confirm(`Are sure you want to delete the project: ${projectDelete.name}`)) {
      this.projectService
        .deleteProject(projectDelete._id)
        .subscribe(res => {
          this.fetchProjects()
        })
    }
  }

  private fetchProjects() {
    this.projectService
      .getProjects()
      .subscribe(response => {
        this.projects = response.data.projects
        ProjectsService.projects = this.projects
      })
  }

}

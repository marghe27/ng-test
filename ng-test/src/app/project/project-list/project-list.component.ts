import { Component, OnInit } from '@angular/core';
import { Project } from '@app/models/project.model';
import {HttpClient} from '@angular/common/http';
import { from } from 'rxjs';


import { ProjectService } from '@app/service/project.service';

@Component({
  selector: 'ngptt-project-list',
  templateUrl: './project-list.component.html',
  styles: []
})
export class ProjectListComponent implements OnInit {
  

  public project: Project;
  public projects: Project[];

  constructor(public httpClient: HttpClient, public projectService: ProjectService) { }

  ngOnInit() {
    this.loadAllProjects();
  }

  selectProject(project: Project) {
    this.project = project;
  } 

  loadAllProjects() {
  return this.projectService.allProjects()
    .then(response => {
        this.projects = response;
        console.log("Projects: ", this.projects);
  })
}

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Project } from '@app/models/project.model';
import { Task } from '@app/models/task.model';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  protected basePath =  environment.baseUrl;
  


  constructor(protected httpClient: HttpClient) { }

  /* Prendo i progetti dal DB */
  public allProjects(): Promise<Project[]>{
    console.log(this.httpClient.get<Project[]>(`${this.basePath}/projects`).toPromise());
    return this.httpClient.get<Project[]>(`${this.basePath}/projects`).toPromise();
  }

  /* Prendo i Tasks dal DB */
  public allTasks(): Promise<Task[]>{
    console.log(this.httpClient.get<Task[]>(`${this.basePath}/projects/tasks`).toPromise());
    return this.httpClient.get<Task[]>(`${this.basePath}/projects/tasks`).toPromise();
  }
}

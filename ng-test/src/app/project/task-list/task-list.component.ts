import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProjectService} from '@app/service/project.service';
import {Task} from '@app/models/task.model';

@Component({
  selector: 'ngptt-task-list',
  templateUrl: './task-list.component.html',
  styles: []
})
export class TaskListComponent implements OnInit {

  taskTitle = 'Task';

  public task: Task;
  public tasks: Task[];

  constructor(public httpClient: HttpClient, public projectService: ProjectService) { }

  ngOnInit() {
    this.loadAllTasks();
  }

  loadAllTasks() {
    return this.projectService.allTasks()
      .then(response => {
          this.tasks = response;
          console.log("Tasks: ", this.tasks);
    })
  }
}

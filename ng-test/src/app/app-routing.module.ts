import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '@app/dashboard/dashboard.component';
import { ProjectListComponent } from '@app/project/project-list/project-list.component';
import {Routes, RouterModule} from '@angular/router';
import { TaskListComponent } from './project/task-list/task-list.component';


const routes: Routes = [
  { path:'dashboard', component: DashboardComponent },
  { path:'project', component: ProjectListComponent},
  { path:'task', component: TaskListComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent = [
  DashboardComponent,
  ProjectListComponent,
  TaskListComponent
]

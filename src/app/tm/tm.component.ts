import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TmService } from './tm.service';
import { LoaderService } from '../shared/shared.service';

@Component({
  selector: 'task-comp',
  templateUrl: './tm.component.html',
  styleUrls: ['./tm.component.css']
})
export class TmComponent implements OnInit {
  private tasks;
  private taskCount;   
  private newTask;
  private status;
  private whiteClass: boolean = true;
  private redClass: boolean = false;
  private blueClass: boolean = false;

  constructor(
    private tmService: TmService,   //service dependency injection
    private route: ActivatedRoute,
    private LoaderService : LoaderService
  ) { }

/* component init method */

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.status = (params['status'] != undefined) ? params['status'] : '';   //getting filter status
      this.LoaderService.loading(false);
      this.getTasks(this.status);
    });
  }

  /* get tasks based on status */

  getTasks(query = ''){
    return this.tmService.get(query).then(task => {
      this.tasks = task;
      this.taskCount = this.tasks.length;
      this.LoaderService.loading(false);
    });
  }

/* method to update task status */

changeStatus (newStatus,id) {
    return this.tmService.updateStatus(newStatus ,id).then(() => {
      return this.getTasks(this.status);
    });
}

/* method to add a task*/

  addTask(){
    let taskName = this.newTask.trim();
    if(taskName) {
    let task = { 
            id : Math.floor(Math.random() * 1000),
            title: taskName, 
            status: 'waiting'    //setting default status as 'waiting'
          }
    this.tmService.add(task).then(() => {
      return this.getTasks(this.status);
    }).then(() => {
      this.newTask = ''; // clear input form value
    });
    }
  }

/* method to delete a task */

  destroyTask(id){
    this.tmService.delete(id).then(() => {
      return this.getTasks(this.status);
    });
  }

/* method to delete all tasks */

  destroyAllTask(){
    this.tmService.deleteAllTasks().then(() => {
      return this.getTasks();
    });
  }
  changeTheme(e) {
    let color = e.currentTarget.textContent;
    this.whiteClass = false;
    this.redClass = false;
    this.blueClass = false;
    switch(color) {
      case 'Red' : 
        this.redClass = true;
        break;
      case 'White' : 
        this.whiteClass = true;
        break;
      case 'Blue' : 
        this.blueClass = true;
        break;
    }
  }
}
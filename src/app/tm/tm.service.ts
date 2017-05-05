import { Injectable } from '@angular/core';

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

@Injectable()
export class TmService {

  constructor() { }

/* method to fetch tasks based on status */

  get(query = ''){
    return new Promise(resolve => {
      let data;

      if(query === ''){
         data = tasks;
      } else {
        let status =  query;
        data = tasks.filter(task =>  task.status === query );
      }
      resolve(data);
    });
  }

/* add task method*/

  add(data) {
    return new Promise(resolve => {
      tasks.push(data);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      resolve(data);
    });
  }

/* method to update status of task based on task id*/
  updateStatus(val,id) {
    return new Promise(resolve => {
      let index = tasks.findIndex(task => task.id === id);
      tasks[index].status = val;
      localStorage.setItem('tasks', JSON.stringify(tasks));
      resolve(tasks);
    });
  }

  /* method to remove task based on task id*/

  delete(id) {
    return new Promise(resolve => {
      tasks = tasks.filter(task => task.id !== id);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      resolve(true);
    });
  }
  /* method to remove all tasks */

  deleteAllTasks() {
    return new Promise(resolve => {
      tasks = [];
      localStorage.setItem('tasks', JSON.stringify(tasks)); 
      resolve(tasks);
    });
  }
}
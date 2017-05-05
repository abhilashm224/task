import { Injectable } from '@angular/core';

/* let todos = [
  { _id: 1, title: 'Install Angular CLI', isDone: true },
  { _id: 2, title: 'Style app', isDone: true },
  { _id: 3, title: 'Finish service functionality', isDone: false },
  { _id: 4, title: 'Setup API', isDone: false },
];
*/

//let todos = [];

let todos = JSON.parse(localStorage.getItem('todos')) || [];


@Injectable()
export class TmService {

  constructor() { }

  get(query = ''){
    return new Promise(resolve => {
      var data;

      if(query === ''){
         data = todos;
      } else {
        var status =  query;
        data = todos.filter(todo =>  todo.status === query
        );
      }
      resolve(data);
    });
  }

  add(data) {
    return new Promise(resolve => {
      todos.push(data);
      localStorage.setItem('todos', JSON.stringify(todos))
      resolve(data);
    });
  }

  updateTaskName(val,index) {
    return new Promise(resolve => {
      //let index = todos.findIndex(todo => todo._id === data._id);
      todos[index].title = val;
      localStorage.setItem('todos', JSON.stringify(todos))
      resolve(todos);
    });
  }
  updateStatus(val,index) {
    return new Promise(resolve => {
      //let index = todos.findIndex(todo => todo._id === data._id);
      todos[index].status = val;
      localStorage.setItem('todos', JSON.stringify(todos))
      resolve(todos);
    });
  }
  delete(id) {
    return new Promise(resolve => {
      //let index = todos.findIndex(todo => todo._id === id);
      todos.splice(id, 1);
      localStorage.setItem('todos', JSON.stringify(todos))
      resolve(true);
    });
  }

  deleteCompleted() {
    return new Promise(resolve => {
      todos = todos.filter(todo => !todo.isDone);
      //localStorage.setItem('todos', JSON.stringify(todos))
      resolve(todos);
    });
  }
}
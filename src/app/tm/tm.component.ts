import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TmService } from './tm.service';

@Component({
  selector: 'task-manager',
  templateUrl: './tm.component.html',
  styleUrls: ['./tm.component.css']
})
export class TmComponent implements OnInit {
  private todos;
  private taskCount;
  private newTodo;
  private path;

  constructor(
    private todoService: TmService, 
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.path = params['status'];
      this.getTodos(this.path);
    });
  }
  taskNameEscape(e) {
    let id = e.currentTarget.getAttribute('id');
    document.getElementById(id)['readOnly'] =true;
  }
  taskNameDblClick(e) {
    let id = e.currentTarget.getAttribute('id');
    document.getElementById(id)['readOnly'] =false;
  }
  getTodos(query = ''){
    return this.todoService.get(query).then(todos => {
      this.todos = todos;
      this.taskCount = this.todos.length;
    });
  }
statusChecked (newValue,id) {
    return this.todoService.updateStatus(newValue ,id).then(() => {
      return this.getTodos();
    });
}
  addTodo(){
    let taskName = this.newTodo.trim();
    if(taskName) {
    let task = { 
            title: taskName, 
            status: 'waiting'    //default status is 'waiting'
          }
    this.todoService.add(task).then(() => {
      return this.getTodos();
    }).then(() => {
      this.newTodo = ''; // clear input form value
    });
    }
  }

  updateTodo(newValue , id) {
    //todo.title = newValue;
    return this.todoService.updateTaskName(newValue,id).then(() => {
      //todo.editing = false;
      return this.getTodos();
    });
  }

  destroyTodo(id){
    this.todoService.delete(id).then(() => {
      return this.getTodos();
    });
  }

  clearCompleted() {
    this.todoService.deleteCompleted().then(() => {
      return this.getTodos();
    });
  }
}
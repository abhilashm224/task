import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TmService } from './tm.service';

@Component({
  selector: 'app-todo',
  templateUrl: './tm.component.html',
  styleUrls: ['./tm.component.css'],
  providers: [TmService]
})
export class TmComponent implements OnInit {
  private todos;
  private activeTasks;
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
      this.activeTasks = this.todos.filter(todo => todo.completed).length;
    });
  }
statusChecked (newValue,id) {
    return this.todoService.updateStatus(newValue ,id).then(() => {
      return this.getTodos();
    });
}
  addTodo(){
    let task = { 
            title: this.newTodo, 
            status: 'waiting'    //default status is 'waiting'
          }
    this.todoService.add(task).then(() => {
      return this.getTodos();
    }).then(() => {
      this.newTodo = ''; // clear input form value
    });
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
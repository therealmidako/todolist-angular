import { Component,Input } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent {
@Input()todo!:Todo
constructor(public todoService:TodoService){}
updateTodo(){
  this.todoService.updateTodo(this.todo).subscribe(
    response=>window.location.reload()
  )
  this.todoService.todoDetailShowModal=false
}
}

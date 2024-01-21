import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
@Component({
  selector: 'app-todo-reactive-form',
  templateUrl: './todo-reactive-form.component.html',
  styleUrls: ['./todo-reactive-form.component.css']
})
export class TodoReactiveFormComponent {
  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router ){
                if(localStorage.getItem("token")){

                  authService.btnSignValue='Sign In'
                  localStorage.removeItem("token")
                }
                else
                authService.btnSignValue="Sign Out"
              }
  authForm=this.formBuilder.nonNullable.group(
    {
    login:['',Validators.required],
    password:['', Validators.required]
    }
  )
  checkLogin( ){
  if(this.authForm.value.login && this.authForm.value.password)
   this.authService.getUser(this.authForm.value.login,this.authForm.value.password)
  .subscribe( 
    result=>{
      if(result.length){
        localStorage.setItem("token",result[0].token)
        this.authService.btnSignValue='Sign Out'
        this.router.navigateByUrl('')
      }
      else
     alert('Login ou mot de passe incorrects!')
    }
  )
  }

}

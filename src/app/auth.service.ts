import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient : HttpClient) { }
  
  btnSignValue:string=''
  
  getUser(login:string,password:string):Observable<User[]>{
    let params=new HttpParams()
    .set("login",login)
    .set("password",password)
    return this.httpClient.get<User[]>('http://localhost:3000/users',{params})
   
}
}

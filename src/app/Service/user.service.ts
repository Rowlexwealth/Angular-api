import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http:HttpClient) { }
  // Login user Api
  ProceedLogin(inputdata: any) {
    return this.http.post('https://localhost:44308/User/Authenticate', inputdata);
  }

  //Login - Install Guard - ng g g Guard/auth
  IsLogin(){
    return localStorage.getItem('token')!=null;
  }

  GetToken(){
    return localStorage.getItem('token') !=null ? localStorage.getItem('token'):'';
  }

  // Also, implement IsLogin inside authGuard

// Registration user Api - registered.Component.Html
  Registration(inputdata:any){
    return this.http.post('https://localhost:44308/User/Register', inputdata);
  }
}


import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../Service/user.service';
import * as alertify from 'alertifyjs'

@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.css']
})
export class RegisteredComponent implements OnInit {

  constructor(private router:Router, private service:UserService) { }

  ngOnInit(): void {
  }
  respond:any;

  RedirectLogin() {
    this.router.navigate(['login']);
  }
  reactiveform = new FormGroup({
    userid: new FormControl('',Validators.required),
    name: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    email: new FormControl('',Validators.compose([Validators.required,Validators.email])),
  });
  SaveUser(){
    // console.log(this.reactiveform.value);
    if(this.reactiveform.valid){
      this.service.Registration(this.reactiveform.value).subscribe(item=>{
        this.respond = item;
        // console.log(this.respond);
        if(this.respond.result == 'pass'){
          alertify.success('Registered successfully please contact admin for activation'),
          this.RedirectLogin();
        } else {
          alertify.error('failed try again')
        }
        // check alertifytype.d.ts
      });
    }
  }

}

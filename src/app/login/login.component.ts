import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../Service/user.service';
import { Router } from '@angular/router';
// import { MaterilaModeleModule } from '../materila-modele/materila-modele.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  // standalone: true,
  // imports: [MaterilaModeleModule, CommonModule],
  styleUrls: ['./login.component.css'],  
})
export class LoginComponent implements OnInit {

  constructor(private service: UserService, private route:Router) { }

  ngOnInit(): void {
    localStorage.clear();
  }
  respond: any;

  ProceedLogin(logindata: any) {
    if(logindata.valid) {
      this.service.ProceedLogin(logindata.value).subscribe((item: any) => {
        this.respond=item;
        if(this.respond!=null){
          localStorage.setItem('token', this.respond.jwtToken);
          this.route.navigate(['home'])
        } else {
          alert('Login Failed')
        }
      });
    }
  }

  RedirectRegister(){
    this.route.navigate(['registered']);
  }

  RedirectLogin(){
    this.route.navigate(['home']);
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from './Guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisteredComponent } from './registered/registered.component';
import { UserComponent } from './user/user.component';
import { VontactComponent } from './vontact/vontact.component';

const routes: Routes = [
  {path: 'home',component:HomeComponent,canActivate:[AuthGuard]},  //install Guard - ng g g Guard/auth
  {path: 'about',component:AboutComponent,canActivate:[AuthGuard]},
  {path: 'user',component:UserComponent,canActivate:[AuthGuard]}, //Go to auth.guard.ts to de-activate
  {path: 'login',component:LoginComponent},
  {path: 'registered',component:RegisteredComponent},
  {
    path: 'contact',
    component:ContactComponent,
    children: [
      {path:'add',component:AddcontactComponent},
      {path:'edit/:id',component:AddcontactComponent}
    ],canActivate:[AuthGuard]
  },
  {path:'**',component:VontactComponent},
  // {path:'register',component:RegisterComponent},
  // Lazy Loading
  // {path:'access',loadChildren:()=>import('./access/access.module').then(opt=>opt.AccessModule)},
  // {path:'login',loadComponent:()=>import('./login/login.component').then(opt=>opt.LoginComponent)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

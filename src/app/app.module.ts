import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import * as alertify from 'alertifyjs'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { VontactComponent } from './vontact/vontact.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { AccessRoutingModule } from './access/access-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisteredComponent } from './registered/registered.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterilaModeleModule } from './materila-modele/materila-modele.module';
import { UserComponent } from './user/user.component';
import { TokenInterceptorService } from './Service/token-interceptor.service';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VontactComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent,
    AddcontactComponent,
    RegisteredComponent,
    UserComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccessRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterilaModeleModule,
    ReactiveFormsModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { HttpClient } from '@angular/common/http';
import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
 
  constructor(private route:Router){}
  title = 'api-sources';
  // Nav menu
  isMenuVisible = true;
  ngDoCheck(): void {
    const currentroute = this.route.url;
    if(currentroute == '/login') {
      this.isMenuVisible = false
    } else {
      this.isMenuVisible = true
    }
  }


  // Api consume
  // constructor(private http: HttpClient) {}
  //z
  // loadPosts() {
  //   this.http.get('https://jsonplaceholder.typicode.com/posts', {}).subscribe((posts: any) => {
  //     this.posts = posts;
  //   });
  // }

  // createPosts() {
  //   this.http.get('https://jsonplaceholder.typicode.com/posts/1/comments', {}).subscribe((posts: any) => {
  //     this.posts = posts;
  //   });
  // }

  // deletePosts() {
  //   this.http.delete('https://jsonplaceholder.typicode.com/posts/1', {}).subscribe((response: any) => {
  //     alert(JSON.stringify(response));
  //   }),
  //   (error: any) => {
  //     alert(JSON.stringify(error));
  //   }
  // }
}

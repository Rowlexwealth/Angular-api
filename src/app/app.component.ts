import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api-sources';

  constructor(private http: HttpClient) {}
  posts: any[] = [];
  loadPosts() {
    this.http.get('https://jsonplaceholder.typicode.com/posts', {}).subscribe((posts: any) => {
      this.posts = posts;
    });
  }

  createPosts() {
    this.http.get('https://jsonplaceholder.typicode.com/posts/1/comments', {}).subscribe((posts: any) => {
      this.posts = posts;
    });
  }

  deletePosts() {
    this.http.delete('https://jsonplaceholder.typicode.com/posts/1', {}).subscribe((response: any) => {
      alert(JSON.stringify(response));
    }),
    (error: any) => {
      alert(JSON.stringify(error));
    }
  }
}

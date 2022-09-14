import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: any;
  constructor(private http : HttpClient){
    this.posts = this.http.get("https://jsonplaceholder.typicode.com/posts");
    //console.log(this.http.get("https://jsonplaceholder.typicode.com/posts"));
  }
  title = 'covidApp';
}

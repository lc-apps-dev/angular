import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    console.log(postData);
    this.http.post<{name: string}>(
      'https://ng-complete-guide-3894e-default-rtdb.europe-west1.firebasedatabase.app/posts.json', 
      postData
      ).subscribe(data => {
        console.log(data);
      });

  }

  onFetchPosts() {
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  fetchPosts() {

    this.http.get<{[key: string]: Post}>(
      'https://ng-complete-guide-3894e-default-rtdb.europe-west1.firebasedatabase.app/posts.json'
      )
      .pipe(map(
        (responseData: {[key: string]: Post}) => {
          const postArray: Post[] = [];
          for(const key in responseData) {
            if(responseData.hasOwnProperty(key))
              postArray.push({ ...responseData[key], id: key});
          }

          return postArray;
        }

      ))
      
      .subscribe(data => {
        this.loadedPosts = data
      });
  }
}

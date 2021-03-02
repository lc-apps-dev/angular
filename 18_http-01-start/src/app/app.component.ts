import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];

  isFetchining = false;

  error = null;

  private errorSubject: Subscription;

  constructor(private postsService: PostsService) {}

  ngOnInit() {

    this.errorSubject = this.postsService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    })
    this.onFetchPosts();
  }

  ngOnDestroy(): void {
    this.errorSubject.unsubscribe();
  }

  onCreatePost(postData: Post) {
    this.postsService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    this.isFetchining = true;
    this.postsService.fetchPosts().subscribe(data => {
      this.isFetchining = false;
      this.loadedPosts = data
    }, 
    error => {
      this.isFetchining = false;
      this.error = error.message;
      console.log(error);
    });
  }

  onClearPosts() {
    this.postsService.deletePosts().subscribe(() => {
        this.loadedPosts = [];
    });
  }

  onHandleError() {
    this.error = null;
  }

}

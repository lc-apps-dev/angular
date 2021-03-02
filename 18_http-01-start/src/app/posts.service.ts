import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, throwError } from "rxjs";
import { map, catchError } from 'rxjs/operators';
import { Post } from "./post.model";

@Injectable({providedIn: 'root'})
export class PostsService {

    error = new Subject<string>();

    constructor(private http: HttpClient) {
    }

    createAndStorePost(title: string, content: string) {

        const postData: Post = {title: title, content: content};
        // Send Http request
        console.log(postData);
        this.http.post<{name: string}>(
        'https://ng-complete-guide-3894e-default-rtdb.europe-west1.firebasedatabase.app/posts.json', 
        postData
        ).subscribe(data => {
            console.log(data);
        },
        error => {
            this.error.next(error.message);
        });
    }

    fetchPosts() {
        return this.http.get<{[key: string]: Post}>(
            'https://ng-complete-guide-3894e-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
            {
                headers: new HttpHeaders({'Custom-Header' : 'Hello'})
            }
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
      
            ),
            catchError(errorRes => {
                // eg. send to analytics server
                return throwError(errorRes);
            })
            
            );
    }

    deletePosts() {
        return this.http.delete(
            'https://ng-complete-guide-3894e-default-rtdb.europe-west1.firebasedatabase.app/posts.json');
    }
}
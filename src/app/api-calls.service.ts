import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Post } from "./Post";

@Injectable({
  providedIn: "root"
})
export class ApiCallsService {
  constructor(private http: HttpClient) {}
  posts: Observable<Post[]>;
  getData() {
    this.posts = this.http.get<Post[]>(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return this.posts;
  }
}

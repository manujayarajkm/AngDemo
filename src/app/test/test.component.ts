import { Component, OnInit } from "@angular/core";
import { ApiCallsService } from "../api-calls.service";
import { Post } from "../Post";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.styl"]
})
export class TestComponent implements OnInit {
  posts;

  constructor(private api: ApiCallsService) {}

  ngOnInit() {
    // this.posts = this.api.getData(); we need to use async pipe for this approach
    this.api.getData().subscribe(data => this.storeData(data));
    console.log(this.posts);
  }
  storeData(data) {
    this.posts = data;
    console.log(this.posts);
  }
}

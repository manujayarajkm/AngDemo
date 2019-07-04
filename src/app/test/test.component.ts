import { Component, OnInit } from "@angular/core";
import { ApiCallsService } from "../api-calls.service";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.styl"]
})
export class TestComponent implements OnInit {
  posts;

  constructor(private api: ApiCallsService) {}

  ngOnInit() {
    this.posts = this.api.getData();
  }
}

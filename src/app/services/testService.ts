import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TestService {
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }

}
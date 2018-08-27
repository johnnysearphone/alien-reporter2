/*import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'alien-reporter';
}
*/

import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import * as data from './example.json';
@Component({
  selector: 'app-simple-http',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  data: any;
  loading: boolean;

  constructor(private http: Http) {
  }

  ngOnInit() {
  }


  makeRequest(): void {
    this.loading = true;
    this.http.request('http://www.mocky.io/v2/59f7760a2f0000ab1d55864e')
    .subscribe((res: Response) => {
      this.data = res.json();
      console.log(this.data);
      this.loading = false;
    });
  }
}

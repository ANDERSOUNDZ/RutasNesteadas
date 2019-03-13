import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  data3: string;

  constructor() { }

  ngOnInit() {
    this.data3='hello this is news'
  }

}

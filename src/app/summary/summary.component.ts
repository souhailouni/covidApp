import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  @Input() globalData: any;
  data: any = "";
  constructor() {
    console.log(this.globalData);
   }

  ngOnInit(): void {
  }

}

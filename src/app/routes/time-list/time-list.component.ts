import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedData } from 'src/app/shared/shared.data';

@Component({
  selector: 'app-time-list',
  templateUrl: './time-list.component.html',
  styleUrls: ['./time-list.component.scss']
})
export class TimeListComponent implements OnInit {
  timeList: any;

  constructor(private sharedData: SharedData, private router: Router) { }

  ngOnInit() {
    const timeListObj = this.sharedData.getTheatreInfo('theatreListData');
    this.timeList = timeListObj.timeList;
  }

  
  selectTime(item) {
    this.sharedData.setTimeInfo(item);
    this.router.navigate(['/seat-list']);

  }
}

import { Component, OnInit } from '@angular/core';
import { SharedData } from 'src/app/shared/shared.data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  theatreList: any;
  seatList: any;
  timeList: any;

  constructor(private sharedData: SharedData, private router: Router) { }

  ngOnInit() {
    const seatlistObj = this.sharedData.getTimeInfo('timeListData');
    this.seatList = seatlistObj.seatList;
    const theatrelistObj = this.sharedData.getMovieInfo('movieListData');
    this.theatreList = theatrelistObj.theatres;
    const timeListObj = this.sharedData.getTheatreInfo('theatreListData');
    this.timeList = timeListObj.timeList;
  }

}

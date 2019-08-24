import { Component, OnInit } from '@angular/core';
import { SharedData } from 'src/app/shared/shared.data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-theatre-list',
  templateUrl: './theatre-list.component.html',
  styleUrls: ['./theatre-list.component.scss']
})
export class TheatreListComponent implements OnInit {
  theatreList: any;

  constructor(private sharedData: SharedData, private router: Router) { }

  ngOnInit() {
    const theatrelistObj = this.sharedData.getMovieInfo('movieListData');
    this.theatreList = theatrelistObj.theatres;
  }

  selectTheatre(item) {
    this.sharedData.setTheatreInfo(item);
    this.router.navigate(['/time-list']);

  }
}

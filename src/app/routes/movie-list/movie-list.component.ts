import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SharedData } from 'src/app/shared/shared.data';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movieAppObject: Response;

  constructor(private sharedData: SharedData, private router: Router, public http: HttpClient) { }




  ngOnInit() {
    this.http.get('assets/movieapp.json')
      .subscribe((response: Response) => {
      this.movieAppObject = response;
      }
      );
  }


  bookTickets(item) {
    this.sharedData.setMovieInfo(item);
    this.router.navigate(['/theatre-list']);
  }
}

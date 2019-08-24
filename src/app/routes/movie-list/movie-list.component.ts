import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SharedData } from 'src/app/shared/shared.data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  constructor(private sharedData: SharedData, private router: Router) { }

  movieAppObject: any = [{

    "moviename": "Batla House",
    "description": "Batla House is a 2019 Indian Hindi-language action thriller film directed by Nikkhil Advani.",
    "theatres": [
      {
        "id": "1c",
        "name": "E-Square",
        "timeList": [
          {
            "id": "1t",
            "name": "10.30",
            "seatList": [
              {
                "id": "1s",
                "isVacant": "true",
                "price": "100"
              },
              {
                "id": "2s",
                "isVacant": "true",
                "price": "100"
              },
              {
                "id": "3s",
                "isVacant": "true",
                "price": "100"
              },
              {
                "id": "4s",
                "isVacant": "true",
                "price": "100"
              },
              {
                "id": "5s",
                "isVacant": "true",
                "price": "100"
              },
              {
                "id": "6s",
                "isVacant": "true",
                "price": "100"
              },
              {
                "id": "7s",
                "isVacant": "true",
                "price": "100"
              },
              {
                "id": "8s",
                "isVacant": "true",
                "price": "100"
              },
              {
                "id": "9s",
                "isVacant": "true",
                "price": "100"
              },
              {
                "id": "10s",
                "isVacant": "true",
                "price": "100"
              },
              {
                "id": "11s",
                "isVacant": "true",
                "price": "100"
              },
              {
                "id": "12s",
                "isVacant": "true",
                "price": "100"
              },
              {
                "id": "13s",
                "isVacant": "true",
                "price": "100"
              },
              {
                "id": "14s",
                "isVacant": "true",
                "price": "100"
              },
              {
                "id": "15s",
                "isVacant": "true",
                "price": "100"
              }
            ]

          },
          {
            "id": "2t",
            "name": "12.30",
            "seatList": [
              {
                "id": "1s",
                "isVacant": "true",
                "price": "100"

              },
              {
                "id": "1s",
                "isVacant": "true",
                "price": "100"
              }
            ]
          }
        ]
      },
      {
        "id": "2c",
        "name": "City Pride",
        "timeList": [
          {
            "id": "1t",
            "name": "10.30",
            "seatList": [
              {
                "id": "1s",
                "isVacant": "true",
                "price": "100"

              },
              {
                "id": "2s",
                "isVacant": "true",
                "price": "100"
              }
            ]

          },
          {
            "id": "2t",
            "name": "12.30",
            "seatList": [
              {
                "id": "1s",
                "isVacant": "true",
                "price": "100"

              },
              {
                "id": "2s",
                "isVacant": "true",
                "price": "100"
              }
            ]
          }
        ]
      },
    ]

  },
  {

    "moviename": "John Wick 3",
    "description": "John Wick 3 is a 2019 Indian Hindi-language action thriller film directed by Nikkhil Advani.",
    "theatres": [
      {
        "id": "1c",
        "name": "E-Square",
        "timeList": [
          {
            "id": "1t",
            "name": "10.30",
            "seatList": [
              {
                "id": "1s",
                "isVacant": "true",
                "price": "150"

              },
              {
                "id": "1s",
                "isVacant": "true",
                "price": "150"
              }
            ]

          },
          {
            "id": "2t",
            "name": "12.30",
            "seatList": [
              {
                "id": "1s",
                "isVacant": "true",
                "price": "150"

              },
              {
                "id": "1s",
                "isVacant": "true",
                "price": "150"
              }
            ]
          }
        ]
      },
      {
        "id": "2c",
        "name": "E-Square",
        "timeList": [
          {
            "id": "1t",
            "name": "10.30",
            "seatList": [
              {
                "id": "1s",
                "isVacant": "true",
                "price": "150"

              },
              {
                "id": "2s",
                "isVacant": "true",
                "price": "150"
              }
            ]

          },
          {
            "id": "2t",
            "name": "12.30",
            "seatList": [
              {
                "id": "1s",
                "isVacant": "true",
                "price": "150"

              },
              {
                "id": "2s",
                "isVacant": "true",
                "price": "150"
              }
            ]
          }
        ]
      },
    ]

  }]





  ngOnInit() {
  }


  bookTickets(item) {
    this.sharedData.setMovieInfo(item);
    this.router.navigate(['/theatre-list']);
  }
}

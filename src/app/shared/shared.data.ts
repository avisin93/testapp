import { Injectable } from '@angular/core';

@Injectable()
export class SharedData {
  movieListArr: any = [];
  constructor() {

  }


  getMovieInfo(arrName) {
    const moviesInfoData = sessionStorage.getItem(arrName);
    return JSON.parse(moviesInfoData);
  }
  getTheatreInfo(arrName) {
    const theatreInfoData = sessionStorage.getItem(arrName);
    return JSON.parse(theatreInfoData);
  }
  getTimeInfo(arrName) {
    const timeInfoData = sessionStorage.getItem(arrName);
    return JSON.parse(timeInfoData);
  }

  setMovieInfo(moviesInfoData: any) {
    const moviesInfoDataJSONData = JSON.stringify(moviesInfoData);
    sessionStorage.setItem('movieListData', moviesInfoDataJSONData);
  }
  setTheatreInfo(theatreInfoData: any) {
    const theatreInfoDataJSONData = JSON.stringify(theatreInfoData);
    sessionStorage.setItem('theatreListData', theatreInfoDataJSONData);
  }

  setTimeInfo(theatreInfoData: any) {
    const timeInfoDataJSONData = JSON.stringify(theatreInfoData);
    sessionStorage.setItem('timeListData', timeInfoDataJSONData);
  }
}

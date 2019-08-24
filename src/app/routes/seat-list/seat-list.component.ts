import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedData } from 'src/app/shared/shared.data';

@Component({
  selector: 'app-seat-list',
  templateUrl: './seat-list.component.html',
  styleUrls: ['./seat-list.component.scss']
})
export class SeatListComponent implements OnInit {
  seatList: any;
  seatArr = [];
  totalPrice: any = 0;
  constructor(private sharedData: SharedData, private router: Router) { }
  ngOnInit() {
    const seatlistObj = this.sharedData.getTimeInfo('timeListData');
    this.seatList = seatlistObj.seatList;
  }

  selectSeat(item) {
    if (item.isVacant) {
      item.isVacant = false;
      this.seatArr.push(item);
    } else {
      item.isVacant = true;
      const index = this.seatArr.findIndex((data) => {
        return data.id === item.id;
      });
      if (index !== -1) {
        this.seatArr.splice(index, 1);
      }
    }
    // this.sharedData.setseatInfo(item);
    // this.router.navigate(['/seat-list']);

  }

  save() {
    this.totalPrice = 0;
    this.seatArr.forEach((element) => {
     // tslint:disable-next-line: radix
     this.totalPrice = parseInt(this.totalPrice) + parseInt(element.price);
    });
    console.log(this.totalPrice);
}
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedData } from 'src/app/shared/shared.data';
import { SeatListComponent } from './seat-list.component';
export const routes: Routes = [
    { path: '', component: SeatListComponent }
]
@NgModule({
    declarations: [
        SeatListComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule
    ],
    providers: [SharedData]
})
export class SeatListModule { }

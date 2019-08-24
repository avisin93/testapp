import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedData } from 'src/app/shared/shared.data';
import { TimeListComponent } from './time-list.component';
export const routes: Routes = [
    { path: '', component: TimeListComponent }
]
@NgModule({
    declarations: [
        TimeListComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule
    ],
    providers: [SharedData]
})
export class TimeListModule { }

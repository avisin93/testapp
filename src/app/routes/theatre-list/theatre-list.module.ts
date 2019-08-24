import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TheatreListComponent } from './theatre-list.component';
import { SharedData } from 'src/app/shared/shared.data';
export const routes: Routes = [
    { path: '', component: TheatreListComponent }
]
@NgModule({
    declarations: [
        TheatreListComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule
    ],
    providers: [SharedData]
})
export class TheatreListModule { }

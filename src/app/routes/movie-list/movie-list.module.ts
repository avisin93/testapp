import { NgModule } from '@angular/core';
import { MovieListComponent } from './movie-list.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedData } from 'src/app/shared/shared.data';
export const routes: Routes = [
    { path: '', component: MovieListComponent }
]
@NgModule({
    declarations: [
        MovieListComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule
    ],
    providers: [SharedData]
})
export class MovieListModule { }

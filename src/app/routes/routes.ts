import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'movie-list',
        pathMatch: 'full'
    },
    {
        path: 'movie-list',
        loadChildren: () => import('./movie-list/movie-list.module').then(mod => mod.MovieListModule)
    },
    {
        path: 'theatre-list',
        loadChildren: () => import('./theatre-list/theatre-list.module').then(mod => mod.TheatreListModule)
    },
    {
        path: 'time-list',
        loadChildren: () => import('./time-list/time-list.module').then(mod => mod.TimeListModule)
    },
    {
        path: 'seat-list',
        loadChildren: () => import('./seat-list/seat-list.module').then(mod => mod.SeatListModule)
    }
];
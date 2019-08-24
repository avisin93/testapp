import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './routes'

@NgModule({
    declarations: [

    ],
    imports: [
        RouterModule.forChild(routes)
    ],
    providers: []
})
export class RoutesModule { }

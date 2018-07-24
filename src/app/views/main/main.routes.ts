import { Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { AuthGuard } from '../auth/guard/auth.guard';
import { HomeComponent } from './home/home.component';

export const MAIN_ROUTES: Routes = [{
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
        { path: '', component: HomeComponent }
    ]
}];

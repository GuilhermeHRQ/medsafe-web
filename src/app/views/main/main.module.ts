import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { MainComponent } from './main.component';
import { UserService } from '../../core/utils/user/user.service';
import { HomeModule } from './home/home.module';

@NgModule({
    imports: [
        SharedModule,
        HomeModule
    ],
    exports: [],
    declarations: [MainComponent],
    providers: [UserService],
})
export class MainModule {
}

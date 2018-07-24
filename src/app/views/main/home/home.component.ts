import { Component, OnInit, ElementRef } from '@angular/core';
import { UiToolbarService } from 'ng-smn-ui';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    constructor(private titleService: Title,
        private toolbarService: UiToolbarService,) {
    }

    ngOnInit() {
        this.titleService.setTitle('Home');
        this.toolbarService.set('MedSafe - Home');
    }
}

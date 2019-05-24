import { Component, OnInit, OnDestroy } from '@angular/core';
import { StreamService } from './shared/services/stream.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    title: string = 'tcc-frontend';

    constructor(private streamService: StreamService){}

    ngOnInit() {
        this.streamService.ngOnInit();
    }

    ngOnDestroy(){
        this.streamService.ngOnDestroy();
    }
}

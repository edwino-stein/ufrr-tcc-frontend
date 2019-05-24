import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-video-status-bar-item',
    templateUrl: './video-status-bar-item.component.html',
    styleUrls: ['./video-status-bar-item.component.css'],
    host: {'class': 'item'}
})
export class VideoStatusBarItemComponent implements OnInit {
    @Input() type: string = "status";
    constructor(){}
    ngOnInit(){}
}

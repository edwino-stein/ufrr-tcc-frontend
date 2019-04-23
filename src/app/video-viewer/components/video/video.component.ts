import { Component, OnInit, ElementRef, Renderer, HostListener, Input} from '@angular/core';

import { environment } from '../../../../environments/environment'

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

    env: object = environment;

    @Input() aspectRatio: string = "4:3";
    private _aspectRario: number[];

    screen: any;
    height: number;

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.updateSize();
    }

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer
    ){}

    ngOnInit() {

        let ar = this.aspectRatio.split(':');
        this._aspectRario = [Number(ar[0]), Number(ar[1])];

        this.screen = this.elementRef.nativeElement.getElementsByClassName("screen")[0];
        this.updateSize();
    }

    updateSize(){

        let maxHeight: number = window.document.body.offsetHeight - (20 + 50 + 20);
        let maxWidth: number = maxHeight * (this._aspectRario[0]/this._aspectRario[1]);
        this.renderer.setElementStyle(this.screen, "max-width", maxWidth.toString() + "px");

        let hight: number = this.screen.offsetWidth * (this._aspectRario[1]/this._aspectRario[0]);
        this.renderer.setElementStyle(this.screen, "height", hight.toString() + "px");

    }
}

import { Component, OnInit, ElementRef, Input} from '@angular/core';
import { JsMpegService, Player} from '../../services/js-mpeg.service';

@Component({
    selector: 'app-mpeg-player',
    templateUrl: './mpeg-player.component.html',
    styleUrls: ['./mpeg-player.component.css']
})
export class MpegPlayerComponent implements OnInit {

    @Input() url: string = "ws://localhost";
    @Input() protocol: string = "";

    private options: any = {
        canvas: null,
        protocols: "",
        audio: false
    };

    private player: Player;

    constructor(
        private elementRef: ElementRef,
        private jsmpeg: JsMpegService
    ){}

    ngOnInit() {
        this.options.canvas = this.elementRef.nativeElement.getElementsByTagName("canvas")[0];
        this.options.protocols = this.protocol;
        this.player = this.jsmpeg.Player(this.url, this.options);
    }

    ngOnDestroy(): void {
        this.player.destroy();
        this.player = null;
    }
}

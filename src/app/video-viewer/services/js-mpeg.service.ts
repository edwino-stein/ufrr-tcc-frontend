import { Injectable } from '@angular/core';

export interface Player {
    destroy():void;
}

interface JSMpegType {
    Player: (url: string, options: object) => void
}

@Injectable({
    providedIn: 'root'
})
export class JsMpegService {

    private JSMpeg: JSMpegType

    constructor() {
        this.JSMpeg = (<any>window).JSMpeg;
    }

    Player(url: string, options: object) : Player {
        return new this.JSMpeg.Player(url, options);
    }
}

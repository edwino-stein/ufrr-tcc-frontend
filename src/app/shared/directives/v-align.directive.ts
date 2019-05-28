import { Directive, OnInit, AfterViewChecked, Renderer, ElementRef, HostListener} from '@angular/core';

@Directive({
    selector: '[appVAlign]'
})
export class VAlignDirective implements OnInit, AfterViewChecked {

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        let me = this;
        setTimeout(() => me.updatePosition(), 50)
    }

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer
    ){}

    ngOnInit(): void {
        this.renderer.setElementStyle(this.elementRef.nativeElement, "position", "absolute");
    }

    ngAfterViewChecked() {
        this.updatePosition();
    }

    updatePosition(){
        let height: number = this.elementRef.nativeElement.offsetHeight;
        this.renderer.setElementStyle(this.elementRef.nativeElement, "top", "calc(50% - " + (height/2) + "px)");
    }
}

@Directive({
    selector: '[appVAlignParent]'
})
export class VAlignParentDirective {
    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer
    ){}

    ngOnInit(): void {
        this.renderer.setElementStyle(this.elementRef.nativeElement, "position", "relative");
    }
}

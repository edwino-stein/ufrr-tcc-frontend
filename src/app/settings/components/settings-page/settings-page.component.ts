import { Component, OnInit, Renderer, ElementRef} from '@angular/core';

@Component({
    selector: 'app-settings-page',
    templateUrl: './settings-page.component.html',
    styleUrls: ['./settings-page.component.css']
})
export class SettingsPageComponent implements OnInit {
    constructor(private renderer: Renderer, private elementRef: ElementRef){}

    ngOnInit(){
        let menuItems = this.elementRef.nativeElement.getElementsByClassName('item');
        for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].onclick = (e) => this.onMenuItemClick(e);
        }
    }

    protected onMenuItemClick(e: any){
        let scrollTo = e.target.getAttribute('scrollto');
        if(scrollTo == null) return;

        if(scrollTo == 'top'){
            document.getElementById('#top').scrollIntoView()
            return;
        }

        let target = this.elementRef.nativeElement.querySelectorAll(scrollTo)[0];
        if(target == undefined) return;
        target.scrollIntoView();
    }
}

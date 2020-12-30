import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { isConstructSignatureDeclaration } from 'typescript';
import { SideMenuService } from '../helper/sidemenu.service';

@Directive({
    selector: '[activate]'
})
export class ActiveDirective {
    currentPage: number;
    constructor(private el: ElementRef, private sm: SideMenuService) {
        sm.getCurrentPage.subscribe(event => {
            this.currentPage = event;
        });
       const elem = this.el.nativeElement;
        console.log(elem);
    }
}
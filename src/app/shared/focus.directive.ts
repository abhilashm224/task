import {Directive, AfterViewInit, ElementRef, DoCheck, Input} from '@angular/core';

@Directive({ 
    selector: '[FocusMe]' 
})
export class FocusMe implements AfterViewInit, DoCheck {
 @Input() show: boolean;
 
 private lastVisible: boolean = false;
 private initialised: boolean = false;
 constructor(private el: ElementRef) {}

ngAfterViewInit() {
 //this.initialised = true;
 this.ngDoCheck(); 
}

ngDoCheck() { 
 if (!this.show) { return; }
 const visible = !!this.el.nativeElement.offsetParent;
 if (visible && !this.lastVisible) { 
 setTimeout(() => { this.el.nativeElement.focus(); }, 1);
 }
 this.lastVisible = visible;
 }
}
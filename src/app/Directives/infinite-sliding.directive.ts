import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[InfiniteSliding]',
  standalone: true
})
export class InfiniteSlidingDirective {

  //@HostBinding('class.animate') classFlag: Boolean;
  @HostBinding('class.paused') classFlag: Boolean;
  constructor(private element: ElementRef) {
    this.classFlag = false;
  }
  @HostListener("mouseenter") stopAnimation() {
    this.classFlag = true;
  }
  @HostListener("mouseleave") continueAnimation() {
    this.classFlag = false;
  }
}

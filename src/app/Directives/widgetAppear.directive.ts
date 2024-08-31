import {
  ElementRef, Directive, AfterViewInit, OnDestroy,
  HostBinding,
  ChangeDetectorRef
} from '@angular/core';
import { Subscription } from 'rxjs';
import { fromEvent } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Directive({
  selector: '[widgetAppear]',
  standalone: true,
})
export class WidgetAppearDirective implements AfterViewInit, OnDestroy {

  elementPos!: number;
  elementHeight!: number;

  scrollPos!: number;
  windowHeight!: number;

  subscriptionScroll!: Subscription;
  subscriptionResize!: Subscription;

  @HostBinding('class.appeared') classFlag: Boolean;

  constructor(private element: ElementRef, private cdr: ChangeDetectorRef) {
    this.classFlag = false;
  }
  ngAfterViewInit() {
    this.subscribe();
  }
  subscribe() {
    this.subscriptionScroll = fromEvent(window, 'scroll').pipe(startWith(null))
      .subscribe(() => {
        this.saveScrollPos();
        this.checkVisibility();
      });
    this.subscriptionResize = fromEvent(window, 'resize').pipe(startWith(null))
      .subscribe(() => {
        this.saveDimensions();
        this.checkVisibility();
      });
  }

  saveDimensions() {
    //get element position from the top
    this.elementPos = this.getOffsetTop(this.element.nativeElement);
    this.elementHeight = this.element.nativeElement.offsetHeight;
    //this is the window's height
    this.windowHeight = window.innerHeight;
  }
  saveScrollPos() {
    //window.scrollY this is your scroll y location
    this.scrollPos = window.scrollY;
  }
  getOffsetTop(element: HTMLElement): number {
    //this function returns the distance between the element and the top of the page
    let offsetTop = element.offsetTop || 0;
    //get total height by recursion
    if (element.offsetParent) {
      offsetTop += this.getOffsetTop(element.offsetParent as HTMLElement);
    }
    return offsetTop;
  }
  checkVisibility() {
    if (this.isVisible()) {
      // double check dimensions (due to async loaded contents, e.g. images)
      this.saveDimensions();
      if (this.isVisible()) {
        this.unsubscribe();
        this.classFlag = true;
        this.cdr.detectChanges();
      }
    }
  }
  isVisible() {
    //start animation when you pass the widget by 25 pixel
    return this.scrollPos + this.windowHeight >= (this.elementPos + 25) ||
      (this.scrollPos + this.windowHeight) >= (this.elementPos + this.elementHeight + 25);
  }
  unsubscribe() {
    if (this.subscriptionScroll) {
      this.subscriptionScroll.unsubscribe();
    }
    if (this.subscriptionResize) {
      this.subscriptionResize.unsubscribe();
    }
  }
  ngOnDestroy() {
    this.unsubscribe();
  }
}

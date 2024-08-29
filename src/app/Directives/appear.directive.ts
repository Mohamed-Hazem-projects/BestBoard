import {
  ElementRef, Output, Directive, AfterViewInit, OnDestroy, EventEmitter
} from '@angular/core';
import { Subscription } from 'rxjs';
import { fromEvent } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Directive({
  selector: '[appear]',
  standalone: true,
})
export class AppearDirective implements AfterViewInit, OnDestroy {
  @Output() appear: EventEmitter<void>;

  elementPos!: number;
  elementHeight!: number;

  scrollPos!: number;
  windowHeight!: number;

  subscriptionScroll!: Subscription;
  subscriptionResize!: Subscription;

  constructor(private element: ElementRef) {
    this.appear = new EventEmitter<void>();
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
        this.appear.emit();
      }
    }
  }
  isVisible() {
    return this.scrollPos >= this.elementPos ||
      (this.scrollPos + this.windowHeight) >= (this.elementPos + this.elementHeight);
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

import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[ClickedOutside]',
  standalone: true
})
export class ClickedOutsideDirective {

  constructor(private element: ElementRef) { }
  @Output()
  ClickedOutside: EventEmitter<void> = new EventEmitter();

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: PointerEvent) {
    const nativeElement: any = this.element.nativeElement;
    const clickedInside: boolean = nativeElement.contains(event.target);
    if (!clickedInside) {
      this.ClickedOutside.emit();
    }
  }

}

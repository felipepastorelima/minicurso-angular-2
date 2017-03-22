import { AfterViewInit, Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive(
  { selector: '[appHighlight]' }
)
export class HighlightDirective implements AfterViewInit{

  @Input() color;

    @HostListener('mouseenter') onMouseEnter() {
      // do work
    }

    constructor(private el: ElementRef) {}

    ngAfterViewInit() {
      this.el.nativeElement.style.backgroundColor = this.color;
    }

}

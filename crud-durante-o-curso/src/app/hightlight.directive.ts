import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({ selector: '[appHighlight]' })
export class HighlightDirective {

  @HostListener('click') onClick() {
    alert('clicou');
  }

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }

}

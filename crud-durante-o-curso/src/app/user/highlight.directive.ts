import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive(
  { selector: '[appHighlight]' }
)
export class HighlightDirective {

    @HostBinding('style.backgroundColor') role = 'yellow';
    @HostListener('click') onMouseEnter() {
      alert('clicou');
    }

    constructor(el: ElementRef) { }

}

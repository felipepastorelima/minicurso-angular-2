import { AfterViewInit, Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({ selector: 'label[appHighlight]' })
export class HighlightDirective implements AfterViewInit{

  @Input('appColor') color: String;

  @HostListener('click') onClick() {
    alert('clicou');
  }

  ngAfterViewInit(): void {
    this.el.nativeElement.style.backgroundColor = this.color;
  }

  constructor(private el: ElementRef) {

  }

}

import { Directive, ElementRef, HostBinding, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appConsoler]',
})
export class Consoler {
  private element = inject(ElementRef);

  @HostListener('click') onClick() {
    console.log(this.element.nativeElement.textContent);
  }

  @HostBinding('style.color') color = 'inherit';

  @HostListener('mouseenter') onMouseEnter() {
    this.color = '#f60';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.color = 'inherit';
  }
}

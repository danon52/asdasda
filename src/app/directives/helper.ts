import { Directive, ElementRef, HostBinding, HostListener, inject, input } from '@angular/core';

@Directive({
  selector: '[helper]',
})
export class Helper {
  private el = inject(ElementRef);

  fired = false;

  messageBox?: HTMLDivElement;

  hintText = input.required<string>();

  @HostBinding('style.border') border = '2px solid red';

  @HostListener('mouseenter') onHover() {
    if (!this.fired) {
      this.border = 'none';
      this.messageBox = document.createElement('div');
      this.messageBox.textContent = this.hintText();
      document.body.appendChild(this.messageBox);
        
      setTimeout(() => {
        this.messageBox?.remove();
      }, 2000);

      this.fired = true;
    }
  }
}

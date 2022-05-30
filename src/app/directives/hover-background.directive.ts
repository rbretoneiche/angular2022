import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHoverBackground]'
})
export class HoverBackgroundDirective {

  @HostBinding('style.background') background: string = 'white';

  @HostListener('mouseenter') onMouseEnter() {
    this.setBgColor('lavender')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBgColor('white')
  }

  setBgColor(color: string) {
    this.background = color
  }
}

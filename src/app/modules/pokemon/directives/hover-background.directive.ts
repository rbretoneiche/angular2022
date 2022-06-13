import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHoverBackground]'
})
export class HoverBackgroundDirective {

  @Input('appHoverBackground') color = 'white'

  @HostBinding('style.background') background: string = 'white';

  @HostListener('mouseenter') onMouseEnter() {
    this.setBgColor(this.color)
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBgColor('white')
  }

  setBgColor(color: string) {
    this.background = color
  }
}

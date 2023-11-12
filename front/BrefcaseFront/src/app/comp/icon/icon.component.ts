import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  template: `<img src="assets/icons/{{name}}" style="width: {{size}}px; height: {{size}}px;">`,
})
export class IconComponent {
  @Input() name: string = "";
  @Input() size: number = 24;
}

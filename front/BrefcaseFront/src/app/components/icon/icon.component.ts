import { Component, Input } from '@angular/core';
import { AssetsList } from 'src/app/helpers/assetsList';

@Component({
  selector: 'app-icon',
  template: `<img src="assets/icons/{{name}}" style="width: {{size}}px; height: {{size}}px;">`,
})
export class IconComponent {
  @Input() name: string = AssetsList.IconsList.warning;
  @Input() size: number = 24;
}

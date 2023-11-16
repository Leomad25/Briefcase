import { Component, Input } from '@angular/core';
import { AssetsList } from 'src/app/helpers/assetsList';

@Component({
  selector: 'app-image',
  template: `<img
    src="assets/images/{{name}}"
    style="
      width: {{sizeWidth > 0 ? sizeWidth + 'px' : 'auto'}};
      height: {{sizeHeight > 0 ? sizeHeight + 'px' : 'auto'}};
      {{isCircle || (borderRadius > 0) ? 'border-radius: ' + (isCircle ? '50%' : borderRadius + 'px') + ';': ''}}
    ">`
})
export class ImageComponent {
  @Input() name: string = AssetsList.ImagesList.warning;
  @Input('width') sizeWidth: number = 0;
  @Input('height') sizeHeight: number = 0;
  @Input() isCircle: boolean = false;
  @Input() borderRadius: number = 0;
}

import { Component, Input } from '@angular/core';
import { AssetsList } from 'src/app/helpers/assetsList.helper';

@Component({
  selector: 'app-image',
  template:`<div
    style="
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    "><img src="assets/images/{{name}}"
    style="
      width: {{sizeWidth > 0 ? sizeWidth + 'px' : 'auto'}};
      height: {{sizeHeight > 0 ? sizeHeight + 'px' : 'auto'}};
      {{isCircle || (borderRadius > 0) ? 'border-radius: ' + (isCircle ? '50%' : borderRadius + 'px') + ';': ''}}
    "></div>`
})
export class ImageComponent {
  @Input() name: string = AssetsList.ImagesList.warning;
  @Input('width') sizeWidth: number = 0;
  @Input('height') sizeHeight: number = 0;
  @Input() isCircle: boolean = false;
  @Input() borderRadius: number = 0;
}

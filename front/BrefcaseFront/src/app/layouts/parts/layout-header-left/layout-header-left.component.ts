import { Component, Input } from '@angular/core';
import { GraphicList } from 'src/app/components/graphic/graphic.component';
import { AssetsList } from 'src/app/helpers/assetsList.helper';

@Component({
  selector: 'app-layout-header-left',
  templateUrl: './layout-header-left.component.html',
  styleUrls: ['./layout-header-left.component.sass']
})

export class LayoutHeaderLeftComponent {
  @Input() isDefault: boolean = true;
  @Input() isLink: boolean = true;
  @Input() isDefaultBackButton: boolean = false;
  @Input() defaultLabel: string = 'Home';
  @Input() defaultLinkRedirect: string = '/';
  @Input() defaultIsGraphic: boolean = false;
  @Input() defaultImageName: string = AssetsList.IconsList.home;
  @Input() defaultImageSize: number = 24;
  defaultBackIcon = GraphicList.ARROW_LEFT;
}

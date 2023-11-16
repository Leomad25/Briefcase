import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeScreenComponent } from './pages/home-screen/home-screen.component';
import { TestScreenComponent } from './pages/test-screen/test-screen.component';
import { LayoutComponent } from './layouts/layout/layout.component';
import { LayoutHeaderComponent } from './layouts/parts/layout-header/layout-header.component';
import { LayoutFooterComponent } from './layouts/parts/layout-footer/layout-footer.component';
import { LayoutBodyComponent } from './layouts/parts/layout-body/layout-body.component';
import { LayoutHeaderLeftComponent } from './layouts/parts/layout-header-left/layout-header-left.component';
import { LayoutHeaderRightComponent } from './layouts/parts/layout-header-rigth/layout-header-right.component';
import { LayoutHeaderCenterComponent } from './layouts/parts/layout-header-center/layout-header-center.component';
import { LoadingScreenComponent } from './common/loading-screen/loading-screen.component';
import { IconComponent } from './components/icon/icon.component';
import { LinkComponent } from './components/link/link.component';
import { GraphicComponent } from './components/graphic/graphic.component';
import { LayoutHeaderBannerComponent } from './layouts/parts/layout-header-banner/layout-header-banner.component';
import { ImageComponent } from './components/image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    TestScreenComponent,
    LayoutComponent,
    LayoutHeaderComponent,
    LayoutFooterComponent,
    LayoutBodyComponent,
    LayoutHeaderLeftComponent,
    LayoutHeaderRightComponent,
    LayoutHeaderCenterComponent,
    IconComponent,
    LinkComponent,
    LoadingScreenComponent,
    GraphicComponent,
    LayoutHeaderBannerComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

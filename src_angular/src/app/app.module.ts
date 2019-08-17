import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GlViewComponent } from './components/gl-view/gl-view.component';
import { PostingUIComponent } from './components/posting-ui/posting-ui.component';
import { PostViewerUiComponent } from './components/post-viewer-ui/post-viewer-ui.component';
import { MediaDisplayComponent } from './components/media-display/media-display.component';
import { PinPostUiComponent } from './components/pin-post-ui/pin-post-ui.component';
import { PaintingUiComponent } from './components/painting-ui/painting-ui.component';
import { CmdUiComponent } from './components/cmd-ui/cmd-ui.component';
import { LoginComponent } from './components/login/login.component';
import { PlayerInterfaceComponent } from './interfaces/player-interface/player-interface.component';
import { AdminPostComponent } from './components/admin-post/admin-post.component';
import { AdminMapComponent } from './components/admin-map/admin-map.component';
import { TileEditComponent } from './components/tile-edit/tile-edit.component';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { PhonePosterComponent } from './components/phone-poster/phone-poster.component';
import { QRCodeModule } from 'angularx-qrcode';
import { ChatViewComponent } from './components/chat-view/chat-view.component';
import { InfoViewComponent } from './components/info-view/info-view.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { PlayerUiComponent } from './components/player-ui/player-ui.component';
import { AdPostUiComponent } from './components/ad-post-ui/ad-post-ui.component';

const appRoutes: Routes = [
  { path: '',
    pathMatch: 'full',
    component: HomeComponent 
  },
  { path: 'admin-post', component: AdminPostComponent },
  { path: 'admin-map', component: AdminMapComponent },
  //{ path: 'home', component: HomeComponent },
  { path: 'admin', component: LoginComponent },
  { path: 'gl-view', component: GlViewComponent },
  { path: 'ch/:map', component: GlViewComponent,},
  { path: 'painting', component: PaintingUiComponent },
  { path: 'phone-poster/:id/:key/:canvas', component: PhonePosterComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GlViewComponent,
    PostingUIComponent,
    PostViewerUiComponent,
    MediaDisplayComponent,
    PinPostUiComponent,
    PaintingUiComponent,
    CmdUiComponent,
    LoginComponent,
    PlayerInterfaceComponent,
    AdminPostComponent,
    AdminMapComponent,
    TileEditComponent,
    PhonePosterComponent,
    ChatViewComponent,
    InfoViewComponent,
    PlayerUiComponent,
    AdPostUiComponent
  ],
  imports: [
    QRCodeModule,
    BrowserModule,
    NgxPaginationModule,
    DeviceDetectorModule.forRoot(),
    FormsModule,
    HttpClientModule,
    NgxTwitterTimelineModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

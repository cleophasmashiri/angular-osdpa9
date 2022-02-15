import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ContainerComponent } from './container/container.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { OpenSidebarOnSwipeDirective } from './open-sidebar-on-swipe.directive';
import { SidebarSwipeService } from './sidebar-swipe.service';
import { SetGetWidthSidebarPipe } from './set-get-width-sidebar.pipe';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule,
                  MatSidenavModule, MatToolbarModule, MatButtonModule,
                  MatIconModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, ContainerComponent, OpenSidebarOnSwipeDirective, SetGetWidthSidebarPipe ],
  bootstrap:    [ AppComponent ],
  providers: [SidebarSwipeService]
})
export class AppModule { }

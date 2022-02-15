import { Component, ChangeDetectorRef } from '@angular/core';
import { SidebarSwipeService } from './sidebar-swipe.service';
import { SetGetWidthSidebarPipe } from './set-get-width-sidebar.pipe';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers : [SetGetWidthSidebarPipe]
})
export class AppComponent  {
  width: number;
  constructor(private cdr: ChangeDetectorRef){}
  ngOnInit(){
  }
  
  setWidth(widthNumber: number){
    this.width = widthNumber;
    this.cdr.detectChanges();
  }
}

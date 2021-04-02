import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopViewComponent } from './desktop-view.component';
import { RouterModule } from '@angular/router';
import { desktopRoutes } from './desktop-view.routing';



@NgModule({
  declarations: [DesktopViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(desktopRoutes)
  ]
})
export class DesktopViewModule { }

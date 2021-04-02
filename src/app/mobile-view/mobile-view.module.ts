import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileViewComponent } from './mobile-view.component';
import { RouterModule } from '@angular/router';
import { mobileRoutes } from './mobile-view.routing';


@NgModule({
  declarations: [MobileViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(mobileRoutes)
  ]
})
export class MobileViewModule { }

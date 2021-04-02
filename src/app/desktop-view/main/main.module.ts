import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VirtualGamesComponent } from './virtual-games/virtual-games.component';
import { RouterModule } from '@angular/router';
import { mainRoutes } from './main.routing';



@NgModule({
  declarations: [VirtualGamesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(mainRoutes)
  ]
})
export class MainModule { }

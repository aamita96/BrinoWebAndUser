import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => {
      if (window.innerWidth > 768) {
        return import('./desktop-view/desktop-view.module').then(m => m.DesktopViewModule)
      } else {
        return import('./mobile-view/mobile-view.module').then(m => m.MobileViewModule)
      }
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

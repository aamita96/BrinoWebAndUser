import { Routes } from "@angular/router";
import { DesktopViewComponent } from "./desktop-view.component";

export const desktopRoutes: Routes = [
    {
        path: '',
        redirectTo: '/d',
        pathMatch: 'full'
    }, {
        path: '',
        component: DesktopViewComponent,
        children: [
            {
                path: 'd',
                loadChildren: () => import('./main/main.module').then(m => m.MainModule)
            }
        ]
    }
];
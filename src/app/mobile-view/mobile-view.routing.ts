import { Routes } from "@angular/router";
import { MobileViewComponent } from "./mobile-view.component";


export const mobileRoutes: Routes = [
    {
        path: '',
        redirectTo: '/m',
        pathMatch: 'full'
    }, {
        path: '',
        component: MobileViewComponent,
        children: [
            {
                path: 'm',
                loadChildren: () => import('./main/main.module').then(m => m.MainModule)
            }
        ]
    }
];
import { Routes } from "@angular/router";
import { VirtualGamesComponent } from "./virtual-games/virtual-games.component";

export const mainRoutes: Routes = [
    {
        path: '',
        component: VirtualGamesComponent
    },
    /* 
    {
        selected-games/:game_id/:auth/:origin
    },{}
    */
]
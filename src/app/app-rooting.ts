import { Route, RouterModule, Routes } from "@angular/router";
import { CvComponent } from "./cvTech/cv/cv.component";
import { Page2Component } from "./page2/page2.component";
import { DetailComponent } from "./cvTech/detail/detail.component";
import { LoginComponent } from "./login/login.component";
import { MainComponent } from "./main/main.component";
import { ErrorComponent } from "./error/error.component";

const APP_ROUTING : Routes = [
    {path:'login',redirectTo:'/',pathMatch:'full'},
    {path:'',component:LoginComponent},
    {path:'main',component:MainComponent,children:
[
    {path:'cv',component:CvComponent},
    {path:'detail/:id',component:DetailComponent},
    {path:"accueil/:default/:secondparam",component:Page2Component},

]},  
{path:'**',component:ErrorComponent}
];
export const ROUTING =RouterModule.forRoot(APP_ROUTING);
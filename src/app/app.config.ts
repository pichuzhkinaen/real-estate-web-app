import { provideRouter, Routes } from "@angular/router";
import { ApplicationConfig } from "@angular/core";

import { HomeComponent } from "../app/home/home.component";
import { RentComponent } from "../app/rent/rent.component";
import { NotFoundComponent } from "../app/not-found/not-found.component";
 
const appRoutes: Routes =[
    { path: "", component: HomeComponent},
    { path: "Rent", component: RentComponent},
    { path: "**", component: NotFoundComponent }
];
 
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes)]
};
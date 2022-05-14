import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import {MyFridgeComponent} from "./features/my-fridge/my-fridge.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: environment.homePage,
    pathMatch: 'full'
  },
  {
    path: 'my-fridge',
    component: MyFridgeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

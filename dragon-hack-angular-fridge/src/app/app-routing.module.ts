import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import {MyFridgeComponent} from "./features/my-fridge/my-fridge.component";
import {RecipesComponent} from "./features/recipes/recipes.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: environment.homePage,
    pathMatch: 'full'
  },
  {
    path: 'my-fridge',
    component: MyFridgeComponent
  },
  {
    path: 'my-recipes',
    component: RecipesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

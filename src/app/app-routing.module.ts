import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { FoodPageComponent } from './Pages/food-page/food-page.component';
import { CartPageComponent } from './Pages/cart-page/cart-page.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  //{path:'search/:searchTerm', component:HomeComponent},
  //{path:'tag/:tag', component:HomeComponent},
  {path:'food/:id', component:FoodPageComponent},
  {path:'cart-page', component: CartPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

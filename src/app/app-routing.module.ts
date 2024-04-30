import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { ProfileComponent} from './profile/profile.component';
import { HeaderComponent} from './header/header.component';
import { CartComponent} from './cart/cart.component';
import { HomeComponent} from './home/home.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';


const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'profile', component:ProfileComponent},
  {path:'header', component:HeaderComponent},
  {path:'cart-page', component:CartComponent},
  {path:'', component:HomeComponent},
  {path:'search/:searchTerm', component:HomeComponent},
  {path:'food/:id', component:FoodDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

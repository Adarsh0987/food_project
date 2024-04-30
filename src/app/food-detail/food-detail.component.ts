import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food.service';
import { Food } from '../models/Food';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css']
})
export class FoodDetailComponent implements OnInit{

   food!:Food
  constructor(activatedRoute:ActivatedRoute, private api:FoodService, private cartService:CartService, 
    private router:Router){
    activatedRoute.params.subscribe((params) =>{
      if(params.id)
      this.food = api.getFoodById(params.id)
    })
  }

  ngOnInit(): void {

  }
  
  //Add to cart button code
  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page')
  }

}

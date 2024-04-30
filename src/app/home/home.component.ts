import { Component, OnInit } from '@angular/core';
import { Food } from '../models/Food';
import { FoodService } from '../services/food.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
foods:Food[] = [];

constructor(private api:FoodService, activateRoute:ActivatedRoute){
  activateRoute.params.subscribe((params)=>{
   if(params.searchTerm)
   this.foods=this.api.getAllFoodBySearchTerm(params.searchTerm)
   else
   this.foods = api.getAll();
   console.log(this.foods);
  })
 
}

ngOnInit(): void {}
}

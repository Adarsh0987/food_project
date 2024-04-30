import { Injectable } from '@angular/core';
import { NgControlStatus } from '@angular/forms';
import { sample_foods } from 'src/data';
import { Food } from '../models/Food';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll():Food[]{
    return sample_foods;
    //this.http.get("http://localhost:2000/insert");
  }
  //search food

  getAllFoodBySearchTerm(searchTerm:string){
    return this.getAll().filter(food =>food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  //Get food by id
  getFoodById(foodId:string){
    return this.getAll().find(food =>food.id==foodId)?? new Food();
  }
}

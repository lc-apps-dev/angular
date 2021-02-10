import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/Ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();


    constructor(private shoppingListService: ShoppingListService) {}
    
    private   recipes: Recipe[] = [
        new Recipe('Tasty sznycel', 'This is a simply a test', 'https://www.eatwell101.com/wp-content/uploads/2019/08/tuscan-salmon-recipe.jpg', [
            new Ingredient('Meat' , 1), new Ingredient('French Fries' , 20)
        ]),
        new Recipe('Burger', 'This is a simple test', 'https://www.eatwell101.com/wp-content/uploads/2019/08/tuscan-salmon-recipe.jpg', [
            new Ingredient('Buns' , 2), new Ingredient('Meat' , 1)
        ])
      ]; 


      getRecipes() {
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients : Ingredient []){
            this.shoppingListService.addIngredients(ingredients);
      }

}
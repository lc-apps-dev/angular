import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/Ingredient.model";


export class ShoppingListService {

    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients : Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomatoes', 10),
    
      ];

      getIngredients() {
          return this.ingredients.slice();
      }


    addIngredient(ingredient: Ingredient) {
        console.log('addIngredient: ingredient=' + ingredient);
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {

        console.log('addIngredients: ingredients list=' + ingredients);

        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
    
}
import { Recipe } from "./recipe.model";

export class RecipeService {
    private   recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is a simply a test', 'https://www.eatwell101.com/wp-content/uploads/2019/08/tuscan-salmon-recipe.jpg'),
        new Recipe('Another Test Recipe', 'This is a simple test', 'https://www.eatwell101.com/wp-content/uploads/2019/08/tuscan-salmon-recipe.jpg')
      ]; 


      getRecipes() {
          return this.recipes.slice();
      }

}
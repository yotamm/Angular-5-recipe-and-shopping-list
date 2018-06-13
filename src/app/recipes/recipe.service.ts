import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('test name', 'test desc',
          'http://www.readersdigest.ca/wp-content/uploads/2013/02/worst-foods-for-aging-fast-food.jpg',
        [
            new Ingredient('Meat', 1),
            new Ingredient('Fries', 20)
        ]),
        new Recipe('Another test name', 'test desc',
          'http://www.readersdigest.ca/wp-content/uploads/2013/02/worst-foods-for-aging-fast-food.jpg',
        [
            new Ingredient('Meat', 1),
            new Ingredient('Bun', 2)
        ])
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}

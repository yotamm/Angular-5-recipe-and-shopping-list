import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

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

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}

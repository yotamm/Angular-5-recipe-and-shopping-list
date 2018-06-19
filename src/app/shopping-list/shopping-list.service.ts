import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('tomato', 3),
        new Ingredient('cheese', 5)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.notifyChanges();
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.notifyChanges();
    }

    updateIngredient (index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.notifyChanges();
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.notifyChanges();
    }

    private notifyChanges() {
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}

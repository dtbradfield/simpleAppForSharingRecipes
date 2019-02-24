import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe(
            'Test Recipe',
            'Test description',
            'https://www.publicdomainpictures.net/pictures/270000/nahled/elephant-paint-splatter-watercolor.jpg', 
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        
        new Recipe(
            'Tasty Bleach', 
            'Test description', 
            'https://www.publicdomainpictures.net/pictures/270000/nahled/elephant-paint-splatter-watercolor.jpg', 
            [
                new Ingredient('Buns', 3),
                new Ingredient('Bleach', 27)
            ])
      ];

    constructor(private slService: ShoppingListService) {}

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShopppingList(ingredients: Ingredient[]) {
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
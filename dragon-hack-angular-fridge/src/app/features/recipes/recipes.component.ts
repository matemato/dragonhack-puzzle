import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  recipes = [
    {
      "id": 651715,
      "title": "Mexican Three Cheese Dip",
      "image": "https://spoonacular.com/recipeImages/651715-312x231.jpg",
      "imageType": "jpg",
      "usedIngredientCount": 3,
      "missedIngredientCount": 17,
      "missedIngredients": [
        {
          "id": 1117,
          "amount": 250,
          "unit": "grams",
          "unitLong": "grams",
          "unitShort": "g",
          "aisle": "Milk, Eggs, Other Dairy",
          "name": "low-fat yogurt",
          "original": "250 grams No Fat Yogurt (drained 12 hours to make yogurt cheese)",
          "originalName": "No Fat Yogurt (drained 12 hours to make yogurt cheese)",
          "meta": [
            "drained",
            "( 12 hours to make yogurt cheese)"
          ],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/plain-yogurt.jpg"
        },
        {
          "id": 6164,
          "amount": 1,
          "unit": "cup",
          "unitLong": "cup",
          "unitShort": "cup",
          "aisle": "Pasta and Rice;Ethnic Foods",
          "name": "salsa",
          "original": "1 cup Salsa (home made recipe below)",
          "originalName": "Salsa (home made recipe below)",
          "meta": [
            "(home made recipe below)"
          ],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/salsa.png"
        },
        {
          "id": 9037,
          "amount": 1,
          "unit": "cup",
          "unitLong": "cup",
          "unitShort": "cup",
          "aisle": "Produce",
          "name": "avocado",
          "original": "1 cup Avocado Paste or guacamole (home made recipe below)",
          "originalName": "Avocado Paste or guacamole (home made recipe below)",
          "meta": [
            "(home made recipe below)"
          ],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/avocado.jpg"
        },
        {
          "id": 1002014,
          "amount": 1,
          "unit": "teaspoon",
          "unitLong": "teaspoon",
          "unitShort": "tsp",
          "aisle": "Spices and Seasonings",
          "name": "cumin",
          "original": "1 teaspoon Cumin",
          "originalName": "Cumin",
          "meta": [],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/ground-cumin.jpg"
        },
        {
          "id": 1012028,
          "amount": 0.25,
          "unit": "teaspoon",
          "unitLong": "teaspoons",
          "unitShort": "tsp",
          "aisle": "Spices and Seasonings",
          "name": "smoked paprika",
          "original": "1/4 teaspoon Smoked paprika",
          "originalName": "Smoked paprika",
          "meta": [
            "smoked"
          ],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/paprika.jpg"
        },
        {
          "id": 11215,
          "amount": 1,
          "unit": "Clove",
          "unitLong": "Clove",
          "unitShort": "Clove",
          "aisle": "Produce",
          "name": "garlic",
          "original": "1 Clove garlic, finely minced",
          "originalName": "garlic, finely minced",
          "meta": [
            "finely minced"
          ],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/garlic.png"
        },
        {
          "id": 11156,
          "amount": 1,
          "unit": "tablespoon",
          "unitLong": "tablespoon",
          "unitShort": "Tbsp",
          "aisle": "Produce",
          "name": "chives",
          "original": "1 tablespoon Chives, finely sliced for garnish",
          "originalName": "Chives, finely sliced for garnish",
          "meta": [
            "finely sliced",
            "for garnish"
          ],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/fresh-chives.jpg"
        },
        {
          "id": 9160,
          "amount": 2,
          "unit": "tablespoons",
          "unitLong": "tablespoons",
          "unitShort": "Tbsp",
          "aisle": "Produce",
          "name": "lime juice",
          "original": "2 tablespoons Lime juice (or more for a smooth paste consistency)",
          "originalName": "Lime juice (or more for a smooth paste consistency)",
          "meta": [
            "for a smooth paste consistency)"
          ],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/lime-juice.png"
        },
        {
          "id": 11165,
          "amount": 2,
          "unit": "tablespoons",
          "unitLong": "tablespoons",
          "unitShort": "Tbsp",
          "aisle": "Produce;Spices and Seasonings",
          "name": "cilantro",
          "original": "2 tablespoons Cilantro, finely chopped",
          "originalName": "Cilantro, finely chopped",
          "meta": [
            "finely chopped"
          ],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/cilantro.png"
        },
        {
          "id": 11677,
          "amount": 1,
          "unit": "tablespoon",
          "unitLong": "tablespoon",
          "unitShort": "Tbsp",
          "aisle": "Produce",
          "name": "shallot",
          "original": "1 tablespoon Shallot, finely chopped",
          "originalName": "Shallot, finely chopped",
          "meta": [
            "finely chopped"
          ],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/shallots.jpg"
        },
        {
          "id": 1009159,
          "amount": 250,
          "unit": "grams",
          "unitLong": "grams",
          "unitShort": "g",
          "aisle": "Produce",
          "name": "lime zest",
          "original": "250 grams Mini tomatoes (if you use regular tomatoes, remove seeds 1/4 cup Cilantro, finely chopped 1 Clove garlic, finely minced 1 Green onion, finely chopped 1/4 cup Cucumber, finely diced Pinch of Cayenne pepper, or to taste 1 teaspoon Cumin 1/4 teaspo",
          "originalName": "Mini tomatoes (if you use regular tomatoes, remove seeds 1/4 cup Cilantro, finely chopped 1 Clove garlic, finely minced 1 Green onion, finely chopped 1/4 cup Cucumber, finely diced Pinch of Cayenne pepper, or to taste 1 teaspoon Cumin 1/4 teaspoon Smoked",
          "meta": [
            "smoked",
            "diced",
            "mini",
            "finely minced",
            "grated",
            "finely chopped",
            "to taste",
            "finely"
          ],
          "extendedName": "diced smoked lime zest",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/zest-lime.jpg"
        },
        {
          "id": 11291,
          "amount": 1,
          "unit": "",
          "unitLong": "",
          "unitShort": "",
          "aisle": "Produce",
          "name": "green onion",
          "original": "1 Green onion, finely chopped",
          "originalName": "Green onion, finely chopped",
          "meta": [
            "finely chopped"
          ],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/spring-onions.jpg"
        },
        {
          "id": 11206,
          "amount": 0.25,
          "unit": "cup",
          "unitLong": "cups",
          "unitShort": "cup",
          "aisle": "Produce",
          "name": "cucumber",
          "original": "1/4 cup Cucumber, finely diced",
          "originalName": "Cucumber, finely diced",
          "meta": [
            "diced",
            "finely"
          ],
          "extendedName": "diced cucumber",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/cucumber.jpg"
        },
        {
          "id": 2031,
          "amount": 1,
          "unit": "pinch",
          "unitLong": "pinch",
          "unitShort": "pinch",
          "aisle": "Spices and Seasonings",
          "name": "cayenne pepper",
          "original": "Pinch of Cayenne pepper, or to taste",
          "originalName": "Pinch of Cayenne pepper, or to taste",
          "meta": [
            "to taste"
          ],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/chili-powder.jpg"
        },
        {
          "id": 1041009,
          "amount": 1,
          "unit": "serving",
          "unitLong": "serving",
          "unitShort": "serving",
          "aisle": "Cheese",
          "name": "cheese",
          "original": "1Prepare yogurt cheese the night before by lining a fine sieve with coffee filter paper. Pour content of yogurt container into the lined sieve and allow to sit covered in the refrigerator overnight.",
          "originalName": "1Prepare yogurt cheese the night before by lining a fine sieve with coffee filter paper. Pour content of yogurt container into the lined sieve and allow to sit covered in the refrigerator overnight",
          "meta": [
            "with coffee filter paper. pour content of yogurt container into the lined sieve and allow to sit covered in the refrigerator overnight.",
            "fine"
          ],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/cheddar-cheese.png"
        },
        {
          "id": 93605,
          "amount": 1,
          "unit": "serving",
          "unitLong": "serving",
          "unitShort": "serving",
          "aisle": "Ethnic Foods",
          "name": "curry paste",
          "original": "4Avocado Paste: put content into a food processor and process until you achieve a smooth paste, adding lime juice to adjust the consistency.",
          "originalName": "4Avocado Paste: put content into a food processor and process until you achieve a smooth paste, adding lime juice to adjust the consistency",
          "meta": [],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/chili-paste.png"
        },
        {
          "id": 99169,
          "amount": 1,
          "unit": "tablespoon",
          "unitLong": "tablespoon",
          "unitShort": "Tbsp",
          "aisle": "Bread",
          "name": "bread bowl",
          "original": "5Assembly: In a clear bowl, evenly distribute the cream cheese mix. Then smooth the avocado paste over it. Next is the salsa, reserve about a tablespoon, evenly spread the remainder. And last but not least, sprinkle the cheddar and garnish with a little r",
          "originalName": "5Assembly: In a clear bowl, evenly distribute the cream cheese mix. Then smooth the avocado paste over it. Next is the salsa, reserve about a , evenly spread the remainder. And last but not least, sprinkle the cheddar and garnish with a little reserved sa",
          "meta": [
            "with a little reserved salsa and chives. serve at room temperature with flat breads, tortilla chips or corn chips. enjoy!"
          ],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/bread-bowl.png"
        }
      ],
      "usedIngredients": [
        {
          "id": 43274,
          "amount": 250,
          "unit": "grams",
          "unitLong": "grams",
          "unitShort": "g",
          "aisle": "Cheese",
          "name": "low fat cream cheese",
          "original": "250 grams Low Fat Cream Cheese, room temperature",
          "originalName": "Low Fat Cream Cheese, room temperature",
          "meta": [
            "low fat",
            "room temperature"
          ],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/cream-cheese.jpg"
        },
        {
          "id": 1031009,
          "amount": 1,
          "unit": "cup",
          "unitLong": "cup",
          "unitShort": "cup",
          "aisle": "Cheese",
          "name": "sharp cheddar cheese",
          "original": "1 cup Shredded sharp cheddar cheese",
          "originalName": "Shredded sharp cheddar cheese",
          "meta": [
            "shredded"
          ],
          "extendedName": "shredded sharp cheddar cheese",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/cheddar-cheese.png"
        },
        {
          "id": 1017,
          "amount": 1,
          "unit": "serving",
          "unitLong": "serving",
          "unitShort": "serving",
          "aisle": "Cheese",
          "name": "cream cheese",
          "original": "2Whip room temperature cream cheese with yogurt cheese. Add finely minced garlic, cumin, smoked paprika and salt and pepper. Whip until evenly distributed. Set aside.",
          "originalName": "2Whip room temperature cream cheese with yogurt cheese. Add finely minced garlic, cumin, smoked paprika and salt and pepper. Whip until evenly distributed. Set aside",
          "meta": [
            "smoked",
            "with yogurt cheese. add finely minced garlic, cumin,  paprika and salt and pepper. whip until evenly distributed. set aside.",
            "room temperature"
          ],
          "extendedName": "smoked cream cheese",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/cream-cheese.jpg"
        }
      ],
      "unusedIngredients": [],
      "likes": 1
    },
    {
      "id": 715602,
      "title": "Green Chili Cheddar Dip (Guest Post)",
      "image": "https://spoonacular.com/recipeImages/715602-312x231.png",
      "imageType": "png",
      "usedIngredientCount": 2,
      "missedIngredientCount": 2,
      "missedIngredients": [
        {
          "id": 1022020,
          "amount": 0.5,
          "unit": "tsp",
          "unitLong": "teaspoons",
          "unitShort": "tsp",
          "aisle": "Spices and Seasonings",
          "name": "garlic powder",
          "original": "grated ½ tsp Garlic Powder",
          "originalName": "grated Garlic Powder",
          "meta": [
            "grated"
          ],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/garlic-powder.png"
        },
        {
          "id": 31015,
          "amount": 4,
          "unit": "oz",
          "unitLong": "ounces",
          "unitShort": "oz",
          "aisle": "Produce",
          "name": "green chilis",
          "original": "4 oz Green Chilis (1 small can)",
          "originalName": "Green Chilis (1 small can)",
          "meta": [
            "green",
            "(1 small can)"
          ],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/chili-peppers-green.jpg"
        }
      ],
      "usedIngredients": [
        {
          "id": 1017,
          "amount": 8,
          "unit": "oz",
          "unitLong": "ounces",
          "unitShort": "oz",
          "aisle": "Cheese",
          "name": "cream cheese",
          "original": "8 oz Cream Cheese",
          "originalName": "Cream Cheese",
          "meta": [],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/cream-cheese.jpg"
        },
        {
          "id": 1031009,
          "amount": 4,
          "unit": "oz",
          "unitLong": "ounces",
          "unitShort": "oz",
          "aisle": "Cheese",
          "name": "sharp cheddar cheese",
          "original": "4 oz Sharp Cheddar Cheese",
          "originalName": "Sharp Cheddar Cheese",
          "meta": [],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/cheddar-cheese.png"
        }
      ],
      "unusedIngredients": [],
      "likes": 122
    },
    {
      "id": 636411,
      "title": "Buffalo Chicken Wings Wonton Wraps",
      "image": "https://spoonacular.com/recipeImages/636411-312x231.jpg",
      "imageType": "jpg",
      "usedIngredientCount": 2,
      "missedIngredientCount": 3,
      "missedIngredients": [
        {
          "id": 5006,
          "amount": 4,
          "unit": "ounces",
          "unitLong": "ounces",
          "unitShort": "oz",
          "aisle": "Meat",
          "name": "chicken",
          "original": "4 ounces-weight chicken, cooked, diced small",
          "originalName": "weight chicken, cooked, diced small",
          "meta": [
            "diced",
            "cooked"
          ],
          "extendedName": "cooked diced chicken",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/whole-chicken.jpg"
        },
        {
          "id": 6168,
          "amount": 0.25,
          "unit": "cups",
          "unitLong": "cups",
          "unitShort": "cup",
          "aisle": "Condiments",
          "name": "hot sauce",
          "original": "1/4 cups Franks Hot Sauce or hot sauce",
          "originalName": "Franks Hot Sauce or hot sauce",
          "meta": [],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/hot-sauce-or-tabasco.png"
        },
        {
          "id": 10018368,
          "amount": 20,
          "unit": "",
          "unitLong": "",
          "unitShort": "",
          "aisle": "Ethnic Foods",
          "name": "wonton wrappers",
          "original": "20 whole wonton wrappers",
          "originalName": "whole wonton wrappers",
          "meta": [
            "whole"
          ],
          "extendedName": "whole wonton wrappers",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/puff-pastry-squares.jpg"
        }
      ],
      "usedIngredients": [
        {
          "id": 1017,
          "amount": 1,
          "unit": "ounces",
          "unitLong": "ounce",
          "unitShort": "oz",
          "aisle": "Cheese",
          "name": "cream cheese",
          "original": "1 ounces-weight fat free cream cheese",
          "originalName": "weight fat free cream cheese",
          "meta": [
            "fat free"
          ],
          "extendedName": "fat free cream cheese",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/cream-cheese.jpg"
        },
        {
          "id": 1009,
          "amount": 1,
          "unit": "ounces",
          "unitLong": "ounce",
          "unitShort": "oz",
          "aisle": "Cheese",
          "name": "cheddar cheese",
          "original": "1 ounces-weight low fat cheddar cheese",
          "originalName": "weight low fat cheddar cheese",
          "meta": [
            "low fat"
          ],
          "extendedName": "low fat cheddar cheese",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/cheddar-cheese.png"
        }
      ],
      "unusedIngredients": [],
      "likes": 5
    },
    {
      "id": 715432,
      "title": "Buffalo Ranch Chicken Dip",
      "image": "https://spoonacular.com/recipeImages/715432-312x231.jpg",
      "imageType": "jpg",
      "usedIngredientCount": 2,
      "missedIngredientCount": 5,
      "missedIngredients": [
        {
          "id": 5062,
          "amount": 4,
          "unit": "",
          "unitLong": "",
          "unitShort": "",
          "aisle": "Meat",
          "name": "chicken breasts",
          "original": "4 boneless chicken breasts",
          "originalName": "boneless chicken breasts",
          "meta": [
            "boneless"
          ],
          "extendedName": "boneless chicken breasts",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/chicken-breasts.png"
        },
        {
          "id": 11291,
          "amount": 0.5,
          "unit": "cup",
          "unitLong": "cups",
          "unitShort": "cup",
          "aisle": "Produce",
          "name": "green onions",
          "original": "½ cup chopped green onions",
          "originalName": "chopped green onions",
          "meta": [
            "chopped"
          ],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/spring-onions.jpg"
        },
        {
          "id": 6168,
          "amount": 12,
          "unit": "oz",
          "unitLong": "ounces",
          "unitShort": "oz",
          "aisle": "Condiments",
          "name": "hot sauce",
          "original": "12oz bottle Louisiana Hot Sauce (or Tabasco Sauce if preferred)",
          "originalName": "Louisiana Hot Sauce (or Tabasco Sauce if preferred)",
          "meta": [
            "(or Tabasco Sauce if preferred)"
          ],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/hot-sauce-or-tabasco.png"
        },
        {
          "id": 2034,
          "amount": 7,
          "unit": "servings",
          "unitLong": "servings",
          "unitShort": "servings",
          "aisle": "Spices and Seasonings",
          "name": "poultry seasoning",
          "original": "Paul Prudhommes Poultry Seasoning",
          "originalName": "Paul Prudhommes Poultry Seasoning",
          "meta": [],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/seasoning.jpg"
        },
        {
          "id": 4639,
          "amount": 16,
          "unit": "oz",
          "unitLong": "ounces",
          "unitShort": "oz",
          "aisle": "Oil, Vinegar, Salad Dressing",
          "name": "ranch dressing",
          "original": "16oz bottle of Ranch Dressing",
          "originalName": "Ranch Dressing",
          "meta": [],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/ranch-dressing.jpg"
        }
      ],
      "usedIngredients": [
        {
          "id": 1017,
          "amount": 16,
          "unit": "oz",
          "unitLong": "ounces",
          "unitShort": "oz",
          "aisle": "Cheese",
          "name": "cream cheese",
          "original": "2 8oz packages of cream cheese",
          "originalName": "packages of cream cheese",
          "meta": [],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/cream-cheese.jpg"
        },
        {
          "id": 1031009,
          "amount": 8,
          "unit": "oz",
          "unitLong": "ounces",
          "unitShort": "oz",
          "aisle": "Cheese",
          "name": "sharp cheddar cheese",
          "original": "8oz package shredded sharp cheddar cheese",
          "originalName": "package shredded sharp cheddar cheese",
          "meta": [
            "shredded"
          ],
          "extendedName": "shredded sharp cheddar cheese",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/cheddar-cheese.png"
        }
      ],
      "unusedIngredients": [],
      "likes": 357
    },
    {
      "id": 647417,
      "title": "Hot Cheesy Bacon Party Dip",
      "image": "https://spoonacular.com/recipeImages/647417-312x231.jpg",
      "imageType": "jpg",
      "usedIngredientCount": 2,
      "missedIngredientCount": 5,
      "missedIngredients": [
        {
          "id": 10123,
          "amount": 8,
          "unit": "slices",
          "unitLong": "slices",
          "unitShort": "slice",
          "aisle": "Meat",
          "name": "bacon",
          "original": "8 slices of bacon - cooked crispy and crumbled",
          "originalName": "bacon - cooked crispy and crumbled",
          "meta": [
            "crispy",
            "crumbled",
            "cooked"
          ],
          "extendedName": "cooked crispy bacon",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png"
        },
        {
          "id": 4025,
          "amount": 1,
          "unit": "c",
          "unitLong": "cup",
          "unitShort": "cup",
          "aisle": "Condiments",
          "name": "mayo",
          "original": "1c mayo",
          "originalName": "mayo",
          "meta": [],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/mayonnaise.png"
        },
        {
          "id": 10211529,
          "amount": 2,
          "unit": "",
          "unitLong": "",
          "unitShort": "",
          "aisle": "Produce",
          "name": "roma tomatoes",
          "original": "2 Roma tomatoes – seeds and inner goop removed – only use the outside meat",
          "originalName": "Roma tomatoes – seeds and inner goop removed – only use the outside meat",
          "meta": [],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/roma-tomatoes.png"
        },
        {
          "id": 11291,
          "amount": 1,
          "unit": "small",
          "unitLong": "small",
          "unitShort": "small",
          "aisle": "Produce",
          "name": "green onions",
          "original": "1 small bundle of green onions – finely chopped",
          "originalName": "bundle of green onions – finely chopped",
          "meta": [
            "finely chopped"
          ],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/spring-onions.jpg"
        },
        {
          "id": 11215,
          "amount": 2,
          "unit": "Tbs",
          "unitLong": "Tbs",
          "unitShort": "Tbs",
          "aisle": "Produce",
          "name": "garlic",
          "original": "2 Tbs minced garlic",
          "originalName": "minced garlic",
          "meta": [
            "minced"
          ],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/garlic.png"
        }
      ],
      "usedIngredients": [
        {
          "id": 1017,
          "amount": 8,
          "unit": "oz",
          "unitLong": "ounces",
          "unitShort": "oz",
          "aisle": "Cheese",
          "name": "cream cheese",
          "original": "1 8oz package of cream cheese",
          "originalName": "package of cream cheese",
          "meta": [],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/cream-cheese.jpg"
        },
        {
          "id": 1009,
          "amount": 1,
          "unit": "c",
          "unitLong": "cup",
          "unitShort": "cup",
          "aisle": "Cheese",
          "name": "cheddar cheese",
          "original": "1 c cheddar cheese(sharp is best, mild is fine too)",
          "originalName": "cheddar cheese(sharp is best, mild is fine too)",
          "meta": [
            "fine"
          ],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/cheddar-cheese.png"
        }
      ],
      "unusedIngredients": [],
      "likes": 1
    },
    {
      "id": 662428,
      "title": "Sweet & Spicy White Cheddar Cheese Ball with apples & Bacon",
      "image": "https://spoonacular.com/recipeImages/662428-312x231.jpg",
      "imageType": "jpg",
      "usedIngredientCount": 2,
      "missedIngredientCount": 6,
      "missedIngredients": [
        {
          "id": 9003,
          "amount": 0.5,
          "unit": "cup",
          "unitLong": "cups",
          "unitShort": "cup",
          "aisle": "Produce",
          "name": "apple",
          "original": "1/2 cup dried apple slices",
          "originalName": "dried apple slices",
          "meta": [
            "dried"
          ],
          "extendedName": "dried apple",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"
        },
        {
          "id": 10114037,
          "amount": 2,
          "unit": "teaspoons",
          "unitLong": "teaspoons",
          "unitShort": "tsp",
          "aisle": "Alcoholic Beverages",
          "name": "brandy",
          "original": "2 teaspoons Applejack Brandy (I used 1 T. of Finger Lakes Distilling Maplejack)",
          "originalName": "Applejack Brandy (I used 1 T. of Finger Lakes Distilling Maplejack)",
          "meta": [
            "(I used 1 T. of Finger Lakes Distilling Maplejack)"
          ],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/brandy.png"
        },
        {
          "id": 19911,
          "amount": 1,
          "unit": "teaspoon",
          "unitLong": "teaspoon",
          "unitShort": "tsp",
          "aisle": "Cereal",
          "name": "maple syrup",
          "original": "1 teaspoon pure maple syrup",
          "originalName": "pure maple syrup",
          "meta": [
            "pure"
          ],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/maple-syrup.png"
        },
        {
          "id": 10123,
          "amount": 6,
          "unit": "slices",
          "unitLong": "slices",
          "unitShort": "slice",
          "aisle": "Meat",
          "name": "bacon",
          "original": "6 slices of bacon",
          "originalName": "bacon",
          "meta": [],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png"
        },
        {
          "id": 2031,
          "amount": 0.25,
          "unit": "teaspoon",
          "unitLong": "teaspoons",
          "unitShort": "tsp",
          "aisle": "Spices and Seasonings",
          "name": "cayenne pepper",
          "original": "1/4 teaspoon cayenne pepper",
          "originalName": "cayenne pepper",
          "meta": [],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/chili-powder.jpg"
        },
        {
          "id": 12142,
          "amount": 1,
          "unit": "cup",
          "unitLong": "cup",
          "unitShort": "cup",
          "aisle": "Nuts;Baking",
          "name": "pecans",
          "original": "1 cup Trader Joes Sweet and Spicy Pecans (substitute 1 c. pecans, 1 t. Cracker and apple slices to serve",
          "originalName": "Trader Joes Sweet and Spicy Pecans (substitute 1 c. pecans, 1 t. Cracker and apple slices to serve",
          "meta": [
            "sweet"
          ],
          "extendedName": "sweet pecans",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/pecans.jpg"
        }
      ],
      "usedIngredients": [
        {
          "id": 43274,
          "amount": 8,
          "unit": "ounces",
          "unitLong": "ounces",
          "unitShort": "oz",
          "aisle": "Cheese",
          "name": "lowfat cream cheese",
          "original": "8 ounces cream cheese, or lowfat (NOT nonfat) cream cheese, softened",
          "originalName": "cream cheese, or lowfat (NOT nonfat) cream cheese, softened",
          "meta": [
            "softened",
            "(NOT nonfat)"
          ],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/cream-cheese.jpg"
        },
        {
          "id": 1021009,
          "amount": 10,
          "unit": "ounces",
          "unitLong": "ounces",
          "unitShort": "oz",
          "aisle": "Cheese",
          "name": "extra sharp cheddar cheese",
          "original": "10 ounces of Adams Reserve New York Extra Sharp Cheddar cheese, shredded",
          "originalName": "Adams Reserve New York Extra Sharp Cheddar cheese, shredded",
          "meta": [
            "shredded"
          ],
          "extendedName": "shredded extra sharp cheddar cheese",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/cheddar-cheese.png"
        }
      ],
      "unusedIngredients": [],
      "likes": 18
    },
    {
      "id": 157426,
      "title": "Stuffed Shells with Beef and Broc",
      "image": "https://spoonacular.com/recipeImages/157426-312x231.jpg",
      "imageType": "jpg",
      "usedIngredientCount": 2,
      "missedIngredientCount": 6,
      "missedIngredients": [
        {
          "id": 11090,
          "amount": 300,
          "unit": "grams",
          "unitLong": "grams",
          "unitShort": "g",
          "aisle": "Produce",
          "name": "broccoli",
          "original": "300 grams frozen broccoli",
          "originalName": "frozen broccoli",
          "meta": [
            "frozen"
          ],
          "extendedName": "frozen broccoli",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/broccoli.jpg"
        },
        {
          "id": 10023572,
          "amount": 400,
          "unit": "g",
          "unitLong": "grams",
          "unitShort": "g",
          "aisle": "Meat",
          "name": "ground beef",
          "original": "400 g ground beef",
          "originalName": "ground beef",
          "meta": [],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/fresh-ground-beef.jpg"
        },
        {
          "id": 1002044,
          "amount": 2,
          "unit": "servings",
          "unitLong": "servings",
          "unitShort": "servings",
          "aisle": "Produce",
          "name": "herbs",
          "original": "mixed herbs",
          "originalName": "mixed herbs",
          "meta": [
            "mixed"
          ],
          "extendedName": "mixed herbs",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/lemon-basil.jpg"
        },
        {
          "id": 11282,
          "amount": 0.5,
          "unit": "",
          "unitLong": "",
          "unitShort": "",
          "aisle": "Produce",
          "name": "onion",
          "original": "1/2 onion",
          "originalName": "onion",
          "meta": [],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/brown-onion.png"
        },
        {
          "id": 11020420,
          "amount": 150,
          "unit": "grams",
          "unitLong": "grams",
          "unitShort": "g",
          "aisle": "Pasta and Rice",
          "name": "pasta shells",
          "original": "150 grams dry pasta shells",
          "originalName": "dry pasta shells",
          "meta": [
            "dry"
          ],
          "extendedName": "dry pasta shells",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/shell-pasta.jpg"
        },
        {
          "id": 11549,
          "amount": 330,
          "unit": "ml",
          "unitLong": "milliliters",
          "unitShort": "ml",
          "aisle": "Canned and Jarred",
          "name": "tomato sauce",
          "original": "330 ml tomato sauce",
          "originalName": "tomato sauce",
          "meta": [],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/tomato-sauce-or-pasta-sauce.jpg"
        }
      ],
      "usedIngredients": [
        {
          "id": 1017,
          "amount": 175,
          "unit": "g",
          "unitLong": "grams",
          "unitShort": "g",
          "aisle": "Cheese",
          "name": "cream cheese",
          "original": "175 g cream cheese",
          "originalName": "cream cheese",
          "meta": [],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/cream-cheese.jpg"
        },
        {
          "id": 1001009,
          "amount": 2,
          "unit": "slices",
          "unitLong": "slices",
          "unitShort": "slice",
          "aisle": "Cheese",
          "name": "shredded cheddar cheese",
          "original": "2 slices cheddar cheese, shredded",
          "originalName": "cheddar cheese, shredded",
          "meta": [
            "shredded"
          ],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/shredded-cheddar.jpg"
        }
      ],
      "unusedIngredients": [],
      "likes": 0
    },
    {
      "id": 1516713,
      "title": "Instant Pot Crack Chicken Chili",
      "image": "https://spoonacular.com/recipeImages/1516713-312x231.jpg",
      "imageType": "jpg",
      "usedIngredientCount": 2,
      "missedIngredientCount": 7,
      "missedIngredients": [
        {
          "id": 1055062,
          "amount": 2,
          "unit": "medium",
          "unitLong": "mediums",
          "unitShort": "medium",
          "aisle": "Meat",
          "name": "chicken breasts",
          "original": "2 medium chicken breasts boneless, skinless",
          "originalName": "chicken breasts boneless, skinless",
          "meta": [
            "boneless",
            "skinless"
          ],
          "extendedName": "skinless boneless chicken breasts",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/chicken-breasts.png"
        },
        {
          "id": 6194,
          "amount": 2,
          "unit": "cups",
          "unitLong": "cups",
          "unitShort": "cup",
          "aisle": "Canned and Jarred",
          "name": "chicken broth",
          "original": "2 cups chicken broth",
          "originalName": "chicken broth",
          "meta": [],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/chicken-broth.png"
        },
        {
          "id": 10716050,
          "amount": 15,
          "unit": "oz",
          "unitLong": "ounces",
          "unitShort": "oz",
          "aisle": "Pasta and Rice;Canned and Jarred",
          "name": "cannellini beans",
          "original": "15 oz cannellini beans",
          "originalName": "cannellini beans",
          "meta": [],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/cooked-cannellini-beans.png"
        },
        {
          "id": 10111693,
          "amount": 15,
          "unit": "oz",
          "unitLong": "ounces",
          "unitShort": "oz",
          "aisle": "Canned and Jarred",
          "name": "tomatoes",
          "original": "15 oz diced tomatoes with juice",
          "originalName": "diced tomatoes with juice",
          "meta": [
            "diced",
            "with juice"
          ],
          "extendedName": "diced tomatoes",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/tomatoes-canned.jpg"
        },
        {
          "id": 16015,
          "amount": 15,
          "unit": "oz",
          "unitLong": "ounces",
          "unitShort": "oz",
          "aisle": "Pasta and Rice;Canned and Jarred",
          "name": "black beans",
          "original": "15 oz black beans rinsed",
          "originalName": "black beans rinsed",
          "meta": [
            "rinsed"
          ],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/black-beans.jpg"
        },
        {
          "id": 93733,
          "amount": 4,
          "unit": "tbsp",
          "unitLong": "tablespoons",
          "unitShort": "Tbsp",
          "aisle": "Oil, Vinegar, Salad Dressing",
          "name": "ranch seasoning",
          "original": "4 tbsp Ranch seasoning",
          "originalName": "Ranch seasoning",
          "meta": [],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/oregano-dried.png"
        },
        {
          "id": 10862,
          "amount": 8,
          "unit": "pieces",
          "unitLong": "",
          "unitShort": "",
          "aisle": "Meat",
          "name": "bacon",
          "original": "8 pieces bacon cooked, crumbled",
          "originalName": "bacon cooked, crumbled",
          "meta": [
            "crumbled",
            "cooked"
          ],
          "extendedName": "cooked bacon",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/cooked-bacon.jpg"
        }
      ],
      "usedIngredients": [
        {
          "id": 1017,
          "amount": 8,
          "unit": "oz",
          "unitLong": "ounces",
          "unitShort": "oz",
          "aisle": "Cheese",
          "name": "cream cheese",
          "original": "8 oz cream cheese",
          "originalName": "cream cheese",
          "meta": [],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/cream-cheese.jpg"
        },
        {
          "id": 1001009,
          "amount": 2,
          "unit": "cups",
          "unitLong": "cups",
          "unitShort": "cup",
          "aisle": "Cheese",
          "name": "cheddar cheese",
          "original": "2 cups cheddar cheese shredded",
          "originalName": "cheddar cheese shredded",
          "meta": [
            "shredded"
          ],
          "extendedName": "shredded cheddar cheese",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/shredded-cheddar.jpg"
        }
      ],
      "unusedIngredients": [],
      "likes": 0
    },
    {
      "id": 1502521,
      "title": "Crack Chicken Chili",
      "image": "https://spoonacular.com/recipeImages/1502521-312x231.jpg",
      "imageType": "jpg",
      "usedIngredientCount": 2,
      "missedIngredientCount": 7,
      "missedIngredients": [
        {
          "id": 1005114,
          "amount": 2,
          "unit": "",
          "unitLong": "",
          "unitShort": "",
          "aisle": "Meat",
          "name": "chicken breasts",
          "original": "2 chicken breasts cooked and shredded",
          "originalName": "chicken breasts cooked and shredded",
          "meta": [
            "shredded",
            "cooked"
          ],
          "extendedName": "cooked shredded chicken breasts",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/rotisserie-chicken.png"
        },
        {
          "id": 93733,
          "amount": 4,
          "unit": "tbsp",
          "unitLong": "tablespoons",
          "unitShort": "Tbsp",
          "aisle": "Oil, Vinegar, Salad Dressing",
          "name": "ranch seasoning",
          "original": "4 tbsp ranch seasoning",
          "originalName": "ranch seasoning",
          "meta": [],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/oregano-dried.png"
        },
        {
          "id": 10716050,
          "amount": 15,
          "unit": "oz",
          "unitLong": "ounces",
          "unitShort": "oz",
          "aisle": "Pasta and Rice;Canned and Jarred",
          "name": "cannellini beans",
          "original": "15 oz cannellini beans",
          "originalName": "cannellini beans",
          "meta": [],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/cooked-cannellini-beans.png"
        },
        {
          "id": 10211693,
          "amount": 15,
          "unit": "oz",
          "unitLong": "ounces",
          "unitShort": "oz",
          "aisle": null,
          "name": "tomatoes",
          "original": "15 oz diced tomatoes with juice",
          "originalName": "diced tomatoes with juice",
          "meta": [
            "diced",
            "with juice"
          ],
          "extendedName": "diced tomatoes",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/null"
        },
        {
          "id": 16015,
          "amount": 15,
          "unit": "oz",
          "unitLong": "ounces",
          "unitShort": "oz",
          "aisle": "Pasta and Rice;Canned and Jarred",
          "name": "black beans",
          "original": "15 oz black beans",
          "originalName": "black beans",
          "meta": [],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/black-beans.jpg"
        },
        {
          "id": 6194,
          "amount": 2,
          "unit": "cups",
          "unitLong": "cups",
          "unitShort": "cup",
          "aisle": "Canned and Jarred",
          "name": "chicken broth",
          "original": "2 cups chicken broth",
          "originalName": "chicken broth",
          "meta": [],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/chicken-broth.png"
        },
        {
          "id": 10123,
          "amount": 8,
          "unit": "pieces",
          "unitLong": "",
          "unitShort": "",
          "aisle": "Meat",
          "name": "bacon",
          "original": "8 pieces bacon",
          "originalName": "bacon",
          "meta": [],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png"
        }
      ],
      "usedIngredients": [
        {
          "id": 1017,
          "amount": 8,
          "unit": "oz",
          "unitLong": "ounces",
          "unitShort": "oz",
          "aisle": "Cheese",
          "name": "cream cheese",
          "original": "8 oz cream cheese",
          "originalName": "cream cheese",
          "meta": [],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/cream-cheese.jpg"
        },
        {
          "id": 1009,
          "amount": 2,
          "unit": "cups",
          "unitLong": "cups",
          "unitShort": "cup",
          "aisle": "Cheese",
          "name": "cheddar cheese",
          "original": "2 cups cheddar cheese",
          "originalName": "cheddar cheese",
          "meta": [],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/cheddar-cheese.png"
        }
      ],
      "unusedIngredients": [],
      "likes": 0
    },
    {
      "id": 1506695,
      "title": "Easy Baked Spaghetti",
      "image": "https://spoonacular.com/recipeImages/1506695-312x231.jpg",
      "imageType": "jpg",
      "usedIngredientCount": 2,
      "missedIngredientCount": 8,
      "missedIngredients": [
        {
          "id": 11420420,
          "amount": 8,
          "unit": "oz",
          "unitLong": "ounces",
          "unitShort": "oz",
          "aisle": "Pasta and Rice",
          "name": "spaghetti noodles",
          "original": "8 oz spaghetti noodles pre-cooked",
          "originalName": "spaghetti noodles pre-cooked",
          "meta": [
            "pre-cooked"
          ],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/spaghetti.jpg"
        },
        {
          "id": 23557,
          "amount": 1,
          "unit": "lb",
          "unitLong": "pound",
          "unitShort": "lb",
          "aisle": "Meat",
          "name": "ground beef",
          "original": "1 lb lean ground beef",
          "originalName": "lean ground beef",
          "meta": [
            "lean"
          ],
          "extendedName": "lean ground beef",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/fresh-ground-beef.jpg"
        },
        {
          "id": 11549,
          "amount": 15,
          "unit": "oz",
          "unitLong": "ounces",
          "unitShort": "oz",
          "aisle": "Canned and Jarred",
          "name": "tomato sauce",
          "original": "15 oz tomato sauce",
          "originalName": "tomato sauce",
          "meta": [],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/tomato-sauce-or-pasta-sauce.jpg"
        },
        {
          "id": 2027,
          "amount": 1,
          "unit": "tbsp",
          "unitLong": "tablespoon",
          "unitShort": "Tbsp",
          "aisle": "Produce;Spices and Seasonings",
          "name": "oregano",
          "original": "1 tbsp oregano",
          "originalName": "oregano",
          "meta": [],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/oregano.jpg"
        },
        {
          "id": 1036,
          "amount": 8,
          "unit": "oz",
          "unitLong": "ounces",
          "unitShort": "oz",
          "aisle": "Cheese",
          "name": "ricotta cheese",
          "original": "8 oz ricotta cheese",
          "originalName": "ricotta cheese",
          "meta": [],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/ricotta.png"
        },
        {
          "id": 1056,
          "amount": 0.5,
          "unit": "cup",
          "unitLong": "cups",
          "unitShort": "cup",
          "aisle": "Milk, Eggs, Other Dairy",
          "name": "cream",
          "original": "1/2 cup sour cream",
          "originalName": "sour cream",
          "meta": [
            "sour"
          ],
          "extendedName": "sour cream",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/sour-cream.jpg"
        },
        {
          "id": 1001,
          "amount": 0.5,
          "unit": "cup",
          "unitLong": "cups",
          "unitShort": "cup",
          "aisle": "Milk, Eggs, Other Dairy",
          "name": "butter",
          "original": "1/2 cup butter sliced into squares",
          "originalName": "butter sliced into squares",
          "meta": [
            "sliced into squares"
          ],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg"
        },
        {
          "id": 10511297,
          "amount": 1,
          "unit": "serving",
          "unitLong": "serving",
          "unitShort": "serving",
          "aisle": "Produce",
          "name": "parsley",
          "original": " Fresh parsley for garnish ",
          "originalName": "Fresh parsley for garnish",
          "meta": [
            "fresh",
            "for garnish "
          ],
          "extendedName": "fresh parsley",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/parsley.jpg"
        }
      ],
      "usedIngredients": [
        {
          "id": 1017,
          "amount": 8,
          "unit": "oz",
          "unitLong": "ounces",
          "unitShort": "oz",
          "aisle": "Cheese",
          "name": "cream cheese",
          "original": "8 oz cream cheese",
          "originalName": "cream cheese",
          "meta": [],
          "image": "https://spoonacular.com/cdn/ingredients_100x100/cream-cheese.jpg"
        },
        {
          "id": 1001009,
          "amount": 8,
          "unit": "oz",
          "unitLong": "ounces",
          "unitShort": "oz",
          "aisle": "Cheese",
          "name": "cheddar cheese",
          "original": "8 oz shredded cheddar cheese",
          "originalName": "shredded cheddar cheese",
          "meta": [
            "shredded"
          ],
          "extendedName": "shredded cheddar cheese",
          "image": "https://spoonacular.com/cdn/ingredients_100x100/shredded-cheddar.jpg"
        }
      ],
      "unusedIngredients": [],
      "likes": 0
    }
  ]
  recipe: any;
  constructor() { }


  ngOnInit(): void {
    console.log(this.recipes.length)
  }

}

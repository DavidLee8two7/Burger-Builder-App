var recipes = [
  {
    id: 1,
    name: 'GRILLED STRIP ROAST',
    recipeBy: 'Recipe by Porter Road Butcher in Nashville, Tennessee',
    description: 'This roast is prepared using a technique called grill roasting: the meat is cooked on an outdoor grill over indirect heat, producing beef with an enticing smoky flavor.',
    servingSize: '8 servings',
    ingredient: ['3 pounds butternut squash', 'Oil as needed', 'Salt and pepper to taste', '4-5 pound strip roast', '3 tablespoons cider vinegar', '2 large egg yolks'],
    cookingDirections: ['Make the squash: Light a Big Green Egg or large grill to a medium flame. Peel squash and slice into 1-inch thick rounds. Coat rounds in oil and season with salt and pepper. Place rounds on grill and cover. Turn occasionally and cook until rounds are soft to the touch, about 6 minutes per side.', 'Make the roast: Season roast with salt and pepper. Place roast on grill grates and cook for about 20 to 35 minutes, turning as needed and closing lid between turns. Cook until internal temperature reaches 119 degrees. Remove from grill and let rest for 15 minutes for medium rare.', 'Make the béarnaise: In large saucepan over low heat add vinegar and tarragon. Cook for 5 minutes. Remove from heat and let cool to room temperature. Make a double boiler by heating a medium-sized pot fi lled halfway with water over low heat and placing a large bowl over top, making sure the bowl does not touch the water. In bowl of double boiler combine egg yolks and vinegar and whisk.'],
    image: 'recipes-img/stript-roast.jpg',
    alt: 'Stript Roast'
  },
  {
    id: 2,
    name: 'CREAMY BROCCOLI SOUP',
    recipeBy: 'Recipe Kecia Johndrow of Tiny Pies in Austin, Texas',
    description: 'Small pieces of broccoli cooked and combined into a cream base makes this soup a filling and enjoyable addition to a lunch of dinner menu. Made with milk, broccoli, flavorings, and spices, Cream of Broccoli Soup can also be used as a base for chicken and rice casseroles.',
    servingSize: '6 servings',
    ingredient: ['1 medium yellow onion', '2 pounds broccoli', '8 tablespoons butter', '1/4 teaspoon ground thyme', '1/2 cup flour', '2 quarts chicken stock, slightly warmed', 'Salt to taste'],
    cookingDirections: ['1. Peel onion and finely chop. Chop broccoli florets from stems. Peel broccoli stems with vegetable peeler and finely chop stems.', '2. In large stock pot, heat butter over medium-low heat. Add onion and thyme. Cook until onions are translucent, about 5 minutes. Add flour to make roux, whisking until well-combined. Continue to whisk until color slightly deepens, about 5-8 minutes. Pour chicken stock into pot, whisking constantly, until all is smooth. Bring liquid to simmer over low heat and cook for 20 minutes, whisking occasionally. Add broccoli florets and stems to pot and stir. Continue to cook for an additional 10-15 minutes, until broccoli is very tender. Remove pot from heat.', '3. Blend soup in blender or with immersion blender until smooth. Note: Do not fill blender more than halfway and be careful removing lid. Strain through sieve to remove any small remaining lumps. Return soup to stove to rewarm. Season to taste.'],
    image: 'recipes-img/broccoli-soup.jpg',
    alt: 'Broccoli Soup'
  },
  {
    id: 3,
    name: 'SUNNY BREAKFAST CASSEROLE',
    recipeBy: 'Recipe by C  hef Lauren Utvich in Los Angeles, California',
    description: 'The Sunny Skillet Breakfast can easily be altered to fit the tastes of your crowd. Try mixing in some of your favorite veggies or breakfast meats.',
    servingSize: '4 servings',
    ingredient: ['1 pound fingerling or other small potatoes', '4 ounces slab bacon cut into ¼-inch matchsticks', '2 tablespoons unsalted butter', '2 tablespoons flour', '1 cup whole milk', 'Salt and pepper to taste', '4 eggs'],
    cookingDirections: ['Preheat oven to 375 degrees. Cook potatoes by placing them in a pot of cold, heavily-salted water and bringing to a boil. Reduce heat to simmer and cook through. Drain potatoes and, when cool enough to handle, slice lengthwise', 'Add slab bacon to a cold pan and render over medium-low heat. Once crispy, remove bacon and drain on a paper towel-lined plate.', 'Melt butter in a saucepan over medium heat. Add flour, whisking constantly, and cook for about 3 minutes. Continue to whisk, add milk, and bring to boil. Reduce heat and add half of gruyère to sauce and stir. Season with salt, pepper, and nutmeg.', 'In a shallow baking dish or ovenproof skillet, gently combine potatoes, bacon, chives, and cheese sauce, then top with remaining gruyère. Bake for 30 minutes, or until cheese begins to brown. Remove casserole from oven and crack eggs over it. Return to oven and bake until eggs have reached desired doneness'],
    image: 'recipes-img/casserole.jpg',
    alt: 'Casserole'
  },
  {
    id: 4,
    name: 'PECORINO FAVA SALAD RECIPE',
    recipeBy: 'Recipe by Chef Jonathan Boncek in Portland, Oregon',
    description: 'Combine the fava beans in a large bowl with the onions, escarole, and the pecorino (reserve a couple shavings for garnish). Add some red wine vinegar, some olive oil and salt, to taste. Toss to coat the salad with the dressing. Arrange the salad on serving plates and top with the reserved shaved cheese.',
    servingSize: '4 servings',
    ingredient: ['6 ounces Pecorino Toscano or Fiore Sardo cheese', '1 pound fava beans removed from their pods', '⅓ cup high quality extra virgin olive oil ', 'Sea salt and fresh ground black pepper', '1 loaf bread'],
    cookingDirections: ['reak pecorino into small pieces into a bowl with shelled fava beans.', 'Drizzle extra virgin olive oil over favas and cheese and season to taste with salt and pepper. Gently toss salad, then divide among plates. Serve with good bread.'],
    image: 'recipes-img/fava-salad.jpg',
    alt: 'Fava Salad'
  }
]

var newRecipesUpdates = document.getElementById('recipes-updates')
function renderPost(post) {
  var newRecipes = document.createElement('div')
  newRecipes.classList.add('container')
  newRecipes.classList.add('new-recipes')
  var recipeUpdates = document.createElement('div')
  recipeUpdates.classList.add('row')
  recipeUpdates.classList.add('new-recipes')
  newRecipes.appendChild(recipeUpdates)
  var placeImage = document.createElement('div')
  placeImage.classList.add('col-md-5')
  recipeUpdates.appendChild(placeImage)
  var recipeImage = document.createElement('img')
  recipeImage.classList.add('new-images')
  recipeImage.setAttribute('src', post.image)
  recipeImage.setAttribute('alt', post.alt)
  placeImage.appendChild(recipeImage)
  var recipeContents = document.createElement('div')
  recipeContents.classList.add('col-md-7')
  recipeContents.classList.add('new-disc')
  recipeUpdates.appendChild(recipeContents)
  var recipeName = document.createElement('h4')
  recipeName.textContent = post.name
  recipeContents.appendChild(recipeName)
  var recipeUpdatesBy = document.createElement('h5')
  recipeUpdatesBy.textContent = post.recipeBy
  recipeContents.appendChild(recipeUpdatesBy)
  var recipeDescription = document.createElement('p')
  recipeDescription.textContent = post.description
  recipeContents.appendChild(recipeDescription)
  var recipeView = document.createElement('input')
  recipeView.setAttribute('type', 'button')
  recipeView.setAttribute('value', 'Show Cooking Directions')
  recipeView.setAttribute('id', post.id)
  recipeUpdates.appendChild(recipeView)
  return newRecipes
}

recipes.forEach(function (post) {
  var $post = renderPost(post)
  newRecipesUpdates.appendChild($post)
})

var newRecipesDirections = document.getElementById('recipes-directions')
function directionsPost(show) {
  var showDirections = document.createElement('div')
  showDirections.classList.add('container')
  showDirections.classList.add('new-recipes')
  var recipeTitle = document.createElement('div')
  recipeTitle.classList.add('row')
  recipeTitle.classList.add('new-recipes')
  showDirections.appendChild(recipeTitle)
  var descriptionDetails = document.createElement('div')
  descriptionDetails.classList.add('col-md-12')
  descriptionDetails.classList.add('new-disc')
  recipeTitle.appendChild(descriptionDetails)
  var directionsName = document.createElement('h4')
  directionsName.textContent = show.name
  descriptionDetails.appendChild(directionsName)
  var recipeTitleBy = document.createElement('h5')
  recipeTitleBy.textContent = show.recipeBy
  descriptionDetails.appendChild(recipeTitleBy)
  var recipeIngredient = document.createElement('div')
  recipeIngredient.classList.add('row')
  recipeIngredient.classList.add('new-recipes')
  showDirections.appendChild(recipeIngredient)
  var directionsImage = document.createElement('div')
  directionsImage.classList.add('col-md-5')
  recipeIngredient.appendChild(directionsImage)
  var ingredientImage = document.createElement('img')
  ingredientImage.classList.add('new-images')
  ingredientImage.setAttribute('src', show.image)
  ingredientImage.setAttribute('alt', show.alt)
  directionsImage.appendChild(ingredientImage)
  var directionsIngredient = document.createElement('div')
  directionsIngredient.classList.add('col-md-7')
  recipeIngredient.appendChild(directionsIngredient)
  var ingredientList = document.createElement('ul')
  directionsIngredient.appendChild(ingredientList)
  var ingredients = document.createElement('li')
  ingredientList.appendChild(ingredients)

  var cookingDirections = document.createElement('div')
  cookingDirections.classList.add('row')
  cookingDirections.classList.add('new-recipes')
  showDirections.appendChild(cookingDirections)
  var directionsSteps = document.createElement('div')
  directionsSteps.classList.add('col-md-12')
  cookingDirections.appendChild(directionsSteps)
  var recipesCookingSteps = document.createElement('ul')
  directionsSteps.appendChild(recipesCookingSteps)
  var cookingSteps = document.createElement('li')
  recipesCookingSteps.appendChild(cookingSteps)

  var closeDirections = document.createElement('input')
  closeDirections.setAttribute('type', 'button')
  closeDirections.setAttribute('value', 'Enjoy Cooking!')
  closeDirections.setAttribute('id', show.id)
  showDirections.appendChild(closeDirections)
  return showDirections
}

function findItem(findId) {
  for (var i = 0; i < recipes.length; i++) {
    var current = recipes[i]
    if (current.id.toString() === findId) {
      return current
    }
  }
}

var recipeContainer = document.getElementById('recipes-updates')
recipeContainer.addEventListener('click', function () {
  if (event.target.tagName === 'INPUT') {
    var recipeId = event.target.id
    var details = findItem(recipeId)
    var push = directionsPost(details)
    newRecipesDirections.appendChild(push)
    newRecipesUpdates.classList.add('hidden')
    newRecipesDirections.classList.remove('visiable')
  }
})

var detailsContainer = document.getElementById('recipes-directions')
detailsContainer.addEventListener('click', function () {
  if (event.target.tagName === 'INPUT') {
    newRecipesUpdates.classList.remove('hidden')
    newRecipesDirections.classList.add('hidden')
  }
})

// for (var i = 0; i < recipes.length; i++) {
//   var $ingredients = recipes[i].ingredient
//   ingredients.appendC
//   for (var z = 0; z < recipes.length; z++) {
//     var $directions = recipes[z].cookingDirections
//     cookingSteps.appendChild($directions)
//   }

// newRecipesDirections.appendChild(push)
// newRecipesUpdates.classList.add('hidden')
// newRecipesDirections.classList.remove('visiable')
// found return value then put it throught directionsPost(items)
// function to hind and show
// this to switch views when clicked on button on each class between hidden and show
/* 1. put array objects in the list for cooking direction and ingredient
  2. eventlistener to listen to event and finding data from the arrays(objects)
3. how to make switches between main window and cooking directions */

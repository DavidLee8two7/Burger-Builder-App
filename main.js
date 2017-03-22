var recipes = [
  {
    id: 1,
    name: 'GRILLED STRIP ROAST WITH SQUASH AND BÉARNAISE',
    recipeBy: 'Recipe by Porter Road Butcher in Nashville, Tennessee',
    description: 'This roast is prepared using a technique called grill roasting: the meat is cooked on an outdoor grill over indirect heat, producing beef with an enticing smoky flavor.',
    servingSize: '8 servings',
    image: 'recipes-img/stript-roast.jpg'
  },
  {
    id: 2,
    name: 'CREAMY BROCCOLI SOUP',
    recipeBy: 'Recipe Kecia Johndrow of Tiny Pies in Austin, Texas',
    description: 'Small pieces of broccoli cooked and combined into a cream base makes this soup a filling and enjoyable addition to a lunch of dinner menu. Made with milk, broccoli, flavorings, and spices, Cream of Broccoli Soup can also be used as a base for chicken and rice casseroles.',
    servingSize: '6 servings',
    image: 'recipes-img/broccoli-soup.jpg'
  },
  {
    id: 3,
    name: 'SUNNY BREAKFAST CASSEROLE',
    recipeBy: 'Recipe by Chef Lauren Utvich in Los Angeles, California',
    description: 'The Sunny Skillet Breakfast can easily be altered to fit the tastes of your crowd. Try mixing in some of your favorite veggies or breakfast meats.',
    servingSize: '4 servings',
    image: 'recipes-img/casserole.jpg'
  },
  {
    id: 4,
    name: 'PECORINO FAVA SALAD RECIPE',
    recipeBy: 'Recipe by Chef Jonathan Boncek in Portland, Oregon',
    description: 'Combine the fava beans in a large bowl with the onions, escarole, and the pecorino (reserve a couple shavings for garnish). Add some red wine vinegar, some olive oil and salt, to taste. Toss to coat the salad with the dressing. Arrange the salad on serving plates and top with the reserved shaved cheese.',
    servingSize: '4 servings',
    image: 'recipes-img/fava-salad.jpg'
  }
]
var newRecipesUpdate = document.getElementById('new-recipes-update')
function renderPost(post) {
  var newRecipes = document.createElement('div')
  newRecipes.classList.add('container')
  newRecipes.classList.add('new-recipes')

  var topRecipe = document.createElement('div')
  topRecipe.classList.add('row')
  topRecipe.classList.add('new-recipes')
  newRecipes.appendChild(topRecipe)
  var topImageColume = document.createElement('div')
  topImageColume.classList.add('col-md-5')
  topRecipe.appendChild(topImageColume)
  var topImage = document.createElement('img')
  topImage.classList.add('new-images')
  topImage.setAttribute('src', post.image)
  topImage.setAttribute('alt', 'Fava-salad picture')
  topImageColume.appendChild(topImage)

  var topDisplay = document.createElement('div')
  topDisplay.classList.add('col-md-7')
  topDisplay.classList.add('new-disc')
  topRecipe.appendChild(topDisplay)
  var topName = document.createElement('h4')
  topName.textContent = post.name
  topDisplay.appendChild(topName)
  var topRecipeBy = document.createElement('h5')
  topRecipeBy.textContent = post.recipeBy
  topDisplay.appendChild(topRecipeBy)
  var topDescription = document.createElement('p')
  topDescription.textContent = post.description
  topDisplay.appendChild(topDescription)

  var recipeView = document.createElement('input')
  recipeView.setAttribute('type', 'button')
  recipeView.setAttribute('value', 'Recipe Details')
  topRecipe.appendChild(recipeView)

  return newRecipes
}

recipes.forEach(function (post) {
  var $post = renderPost(post)
  newRecipesUpdate.appendChild($post)
})

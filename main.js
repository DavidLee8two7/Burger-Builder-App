var recipes = [
  {
    id: 1,
    name: 'PECORINO FAVA SALAD RECIPE',
    recipeBy: 'Recipe by Chef Jonathan Boncek in Portland, Oregon',
    description: 'Combine the fava beans in a large bowl with the onions, escarole, and the pecorino (reserve a couple shavings for garnish). Add some red wine vinegar, some olive oil and salt, to taste. Toss to coat the salad with the dressing. Arrange the salad on serving plates and top with the reserved shaved cheese.',
    servingSize: '4 servings',
    image: 'recipes-img/fava-salad.jpg'
  },
  {
    id: 2,
    name: 'CREAMY BROCCOLI SOUP',
    recipeBy: 'Recipe Kecia Johndrow of Tiny Pies in Austin, Texas',
    description: 'Small pieces of broccoli cooked and combined into a cream base makes this soup a filling and enjoyable addition to a lunch of dinner menu. Made with milk, broccoli, flavorings, and spices, Cream of Broccoli Soup can also be used as a base for chicken and rice casseroles.',
    servingSize: '6 servings',
    image: 'recipes-img/fava-salad.jpg'
  }
]

function renderPost(post) {
  var newRecipes = document.createElement('div')
  newRecipes.classList.add('container new-recipes')
  var message = document.createElement('h3')
  message.textContent = 'Newly Posted Recipes'
  newRecipes.appendChild(message)

  var topRecipe = document.createElement('div')
  topRecipe.classList.add('row new-recipes')
  newRecipes.appendChild(topRecipe)
  var topImageColume = document.createElement('div')
  topImageColume.classList.add('col-md-5')
  topRecipe.appendChild(topImageColume)
  var topImage = document.createElement('img')
  topImage.classList.add('new-images')
  topImage.setAttribute('src', recipes[0].image)
  topImage.setAttribute('alt', 'Fava-salad picture')
  topImageColume.appendChild(topImage)

  var topDisplay = document.createElement('div')
  topDisplay.classList.add('col-md-7 new-disc')
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

  return post
}

recipes.forEach(function (post) {
  var $post = renderPost(post)
  if (post.id === 1) {
    var recipesFrameBox = document.getElementsByClassName('outter')
    recipesFrameBox.appendChild($post)
  }
})

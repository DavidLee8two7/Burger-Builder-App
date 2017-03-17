var recipes = [
  {
    name: 'PECORINO FAVA SALAD RECIPE',
    recipeBy: 'Recipe by Chef Jonathan Boncek in Portland, Oregon',
    description: 'Combine the fava beans in a large bowl with the onions, escarole, and the pecorino (reserve a couple shavings for garnish). Add some red wine vinegar, some olive oil and salt, to taste. Toss to coat the salad with the dressing. Arrange the salad on serving plates and top with the reserved shaved cheese.',
    recipe: 'http://thelocalpalate.com/recipes/pecorino-fava-salad-recipe/',
    price: '$1.00'
  },
  {
    name: 'CREAMY BROCCOLI SOUP',
    recipeBy: 'Recipe Kecia Johndrow of Tiny Pies in Austin, Texas',
    description: 'Small pieces of broccoli cooked and combined into a cream base makes this soup a filling and enjoyable addition to a lunch of dinner menu. Made with milk, broccoli, flavorings, and spices, Cream of Broccoli Soup can also be used as a base for chicken and rice casseroles.',
    recipe: 'http://thelocalpalate.com/recipes/tlps-broccoli-soup/',
    price: '$2.00'
  }
]

function renderPost(post) {
  var $post = document.createElement('div')
  var $name = document.createElement('h4')
  var $recipeBy = document.createElement('h5')
  var $description = document.createElement('p')
  var $price = document.createElement('p')
  $name.textContent = post.name
  $recipeBy.textContent = post.recipeBy
  $description.textContent = post.description
  $price.textContent = post.price
  $post.appendChild($name)
  $post.appendChild($recipeBy)
  $post.appendChild($description)
  $post.appendChild($price)
  return $post
}

recipes.forEach(function (post) {
  var $post = renderPost(post)
  if (post.name === 'PECORINO FAVA SALAD RECIPE') {
    var $new1 = document.getElementById('new1')
    $new1.appendChild($post)
  }
  if (post.name === 'CREAMY BROCCOLI SOUP') {
    var $new2 = document.getElementById('new2')
    $new2.appendChild($post)
  }
})

var $target1 = document.getElementById('target1')
$target1.addEventListener('click', function(event) {
  window.location = 'http://thelocalpalate.com/recipes/tlps-broccoli-soup/'
})

var $target2 = document.getElementById('target2')
$target2.addEventListener('click', function(event) {
  window.location = 'http://thelocalpalate.com/recipes/tlps-broccoli-soup/'
})

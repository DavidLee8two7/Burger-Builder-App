var recipes = [
  {
    name: 'PECORINO FAVA SALAD RECIPE',
    recipeBy: 'Recipe by Chef Jonathan Boncek in Portland, Oregon',
    description: 'Combine the fava beans in a large bowl with the onions, escarole, and the pecorino (reserve a couple shavings for garnish). Add some red wine vinegar, some olive oil and salt, to taste. Toss to coat the salad with the dressing. Arrange the salad on serving plates and top with the reserved shaved cheese.',
    price: '$1.00',
    servingSize: '4 servings',
    id: 1
  },
  {
    name: 'CREAMY BROCCOLI SOUP',
    recipeBy: 'Recipe Kecia Johndrow of Tiny Pies in Austin, Texas',
    description: 'Small pieces of broccoli cooked and combined into a cream base makes this soup a filling and enjoyable addition to a lunch of dinner menu. Made with milk, broccoli, flavorings, and spices, Cream of Broccoli Soup can also be used as a base for chicken and rice casseroles.',
    price: '$2.00',
    servingSize: '6 servings',
    id: 2
  }
]

function displayItems(post) {
  var $post = document.createElement('div')
  var $name = document.createElement('h4')
  var $recipeBy = document.createElement('h5')
  $name.textContent = post.name
  $recipeBy.textContent = post.recipeBy
  $post.appendChild($name)
  $post.appendChild($recipeBy)
  return $post
}

recipes.forEach(function (post) {
  var $post = displayItems(post)
  if (post.id === 1) {
    var $item1 = document.getElementById('item1')
    $item1.appendChild($post)
  }
  if (post.id === 2) {
    var $item2 = document.getElementById('item2')
    $item2.appendChild($post)
  }
})

var firstButton = document.getElementById('first-button')
firstButton.addEventListener('click', function(event) {
  function displayItems(post) {
    var $post = document.createElement('div')
    var $detailDescription = document.createElement('p')
    var $detailPrice = document.createElement('p')
    var $detailServing = document.createElement('p')
    $detailDescription.textContent = post.description
    $detailPrice.textContent = post.price
    $detailServing.textContent = post.servingSize
    $post.appendChild($detailDescription)
    $post.appendChild($detailPrice)
    $post.appendChild($detailServing)
    return $post
  }
  recipes.forEach(function (post) {
    var $post = displayItems(post)
    if (post.id === 1) {
      var $item1 = document.getElementById('item1')
      $item1.appendChild($post)
    }
  })
})

var secondButton = document.getElementById('second-button')
secondButton.addEventListener('click', function(event) {
  function displayItems(post) {
    var $post = document.createElement('div')
    var $detailDescription = document.createElement('p')
    var $detailPrice = document.createElement('p')
    var $detailServing = document.createElement('p')
    $detailDescription.textContent = post.description
    $detailPrice.textContent = post.price
    $detailServing.textContent = post.servingSize
    $post.appendChild($detailDescription)
    $post.appendChild($detailPrice)
    $post.appendChild($detailServing)
    return $post
  }
  recipes.forEach(function (post) {
    var $post = displayItems(post)
    if (post.id === 2) {
      var $item2 = document.getElementById('item2')
      $item2.appendChild($post)
    }
  })
})

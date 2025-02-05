// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((mush) => {
    if (state.mushrooms) {
      mush.style.visibility = 'visible';
    } else {
      mush.style.visibility = 'hidden';
    }
  })
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((pepper) => {
    if (state.greenPeppers) {
      pepper.style.visibility = 'visible';
    } else {
      pepper.style.visibility = 'hidden'
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const wSauce = document.querySelector('.sauce')
  if (state.whiteSauce) {
    wSauce.classList.toggle('sauce-white')
  } else {
    wSauce.className = 'sauce'
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const gfCrust = document.querySelector('.crust')
  if (state.glutenFreeCrust) {
    gfCrust.classList.toggle('crust-gluten-free')
  } else {
    gfCrust.className = 'crust'
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const pepBtn = document.querySelector('.btn.btn-pepperoni')
  const mushBtn = document.querySelector('.btn.btn-mushrooms')
  const gPepBtn = document.querySelector('.btn.btn-green-peppers')
  const wSauceBtn = document.querySelector('.btn.btn-sauce')
  const gfCrustBtn = document.querySelector('.btn.btn-crust')

  if (state.pepperoni) pepBtn.classList.add('active')
  else pepBtn.classList.remove('active')

  if (state.mushrooms) mushBtn.classList.add('active')
  else mushBtn.classList.remove('active')

  if (state.greenPeppers) gPepBtn.classList.add('active')
  else gPepBtn.classList.remove('active')

  if (state.whiteSauce) wSauceBtn.classList.add('active')
  else wSauceBtn.classList.remove('active')

  if (state.glutenFreeCrust) gfCrustBtn.classList.add('active')
  else gfCrustBtn.classList.remove('active')
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let total = basePrice
  const finalPrice = document.querySelector('aside strong')
  //console.log(finalPrice)
  let listOfIngredients = document.querySelector('aside ul')
  //console.log(listOfIngredients)
  listOfIngredients.innerHTML = ''

  for (let ingredient in ingredients) {
    //console.log(ingredients[ingredient].price)
    if (state[ingredient]) {
      total += ingredients[ingredient].price
      const li = document.createElement('li')
      li.innerHTML = `$${ingredients[ingredient].price} ${ingredients[ingredient].name.toLowerCase()}`
      listOfIngredients.appendChild(li)
    }
  }
  finalPrice.innerHTML = `$${total}`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
})

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = () => {
  state.greenPeppers = !state.greenPeppers
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = () => {
  state.whiteSauce = !state.whiteSauce
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = () => {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
}

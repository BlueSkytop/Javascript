
/*- взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.*/
fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(carts=>{
        for (const cart of carts.carts) {
            console.log(cart);
        }
    });
/************************************************/

   /* - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.*/
fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(value => {
        let {recipes} = value;
        console.log(recipes);

        for (const recipe of recipes) {
            document.write(`<div>`);
            document.write(`<h5>Id:${recipe.id}</h5>`);
            document.write(`<h4>Name:${recipe.name}</h4>`)
            document.write(`<h4>Ingredients:</h4>`)
            document.write(`<ul>`)
            for (const recipeElement of recipe.ingredients) {
                document.write(`<li>${recipeElement}</li>`)
            }
            document.write(`</ul>`)
            document.write(`<h4>Instructions:</h4>`)
            document.write(`<ol>`)
            for (const recipeElement2 of recipe.instructions) {
                document.write(`<li>${recipeElement2}</li>`)
            }
            document.write(`</ol>`);
            document.write(`<h4>PrepTimeMinutes: ${recipe.prepTimeMinutes}</h4>`);
            document.write(`<h4>CookTimeMinutes: ${recipe.cookTimeMinutes}</h4>`);
            document.write(`<h4>Servings: ${recipe.servings}</h4>`);
            document.write(`<h4>Difficulty: ${recipe.difficulty}</h4>`);
            document.write(`<h4>Cuisine: ${recipe.cuisine}</h4>`);
            document.write(`<h4>CaloriesPerServing: ${recipe.caloriesPerServing}</h4>`);
            document.write(`<h4>Tags:</h4>`);
            document.write(`<ul>`)
            for (const recipeElement of recipe.tags) {
                document.write(`<li>${recipeElement}</li>`)
            }
            document.write(`</ul>`)
            document.write(`<h4>UserId:${recipe.userId}</h4>`)

            document.write(`<img width="200px" height="200px" src="${recipe.image}" alt="">`)

            document.write(`<h4>Rating:${recipe.rating}</h4>`)
            document.write(`<h4>ReviewCount:${recipe.reviewCount}</h4>`)
            document.write(`<h4>MealType:${recipe.mealType}</h4>`)
            document.write(`</div><hr>`);
        }
    })
   /* - зробити файл users.html
з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
    вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)*/
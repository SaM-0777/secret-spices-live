# secret-spices-test-api


# Endpoints:
## User Routes
### Authors
https://secret-spices.herokuapp.com/api/user/author/all - GET
https://secret-spices.herokuapp.com/api/user/author/display/all - GET
https://secret-spices.herokuapp.com/api/user/author/details/<authorId> - GET
https://secret-spices.herokuapp.com/api/user/author/create/new/ - POST
    userId,
    thumbnail,
    banner,
    name,
    description,
    authorSocials,
    location,

https://secret-spices.herokuapp.com/api/user/author/update/<authorId> - PATCH
    thumbnail,
    banner,
    name,
    description,
    authorSocials,


### Cookbooks
https://secret-spices.herokuapp.com/api/user/cookbook/all - GET
https://secret-spices.herokuapp.com/api/user/cookbook/display/all - GET
https://secret-spices.herokuapp.com/api/user/cookbook/details/<cookbookId> - GET
https://secret-spices.herokuapp.com/api/user/cookbook/create/new - POST
    userId,
    authorId,
    thumbnail,
    name,
    description,

https://secret-spices.herokuapp.com/api/user/cookbook/update/<cookbookId> - PATCH
    thumbnail,
    name,
    description,


### Recipes
https://secret-spices.herokuapp.com/api/user/recipe/all - GET
https://secret-spices.herokuapp.com/api/user/recipe/display/all - GET
https://secret-spices.herokuapp.com/api/user/recipe/details/<recipeId> - GET
https://secret-spices.herokuapp.com/api/user/recipe/create/new - POST
    userId,
    authorId,
    cookbookId,
    thumbnail,
    heroBanner,
    title,
    description,
    steps,
    ingridients,
    nutrients,
    duration,
    budget,
    tags,
    categories,
    vegOrNonVeg,


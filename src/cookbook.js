class Cookbook {
  constructor() {
    this.recipes = {};
  }

  addRecipe(name, ingredients) {
    this.recipes[name] = ingredients;
  }

  listRecipes() {
    return Object.keys(this.recipes);
  };

  getRecipe(name) {
    return this.recipes[name];
  }

  removeRecipe(name) {
    delete this.recipes[name];
  }
}
module.exports = { Cookbook };

const myCookbook = new Cookbook();

myCookbook.addRecipe('hotdog', ['meat', 'bread']);
myCookbook.addRecipe('hotdog2', ['meat2', 'bread2'])

console.log(myCookbook.recipes);
console.log(myCookbook.listRecipes());
console.log(myCookbook.getRecipe('hotdog'));
module.exports = { Cookbook };

class CookbookCli {
  constructor(cookbook) {
    this.cookbook = cookbook;
  }

  run(command, ...args) { 
    switch (command) {
      case 'list': return this.list();
      case 'exist': return this.exist(...args);
      case 'isEmpty': return this.isEmpty();
      case 'add': return this.add(...args);
      case 'get': return this.get(...args);
      case 'remove': return this.remove(...args);
      default: return `Whoops, the following command is unsupported: ${command}.`;
    }
  }

  list() {
    return `You have the following recipes: ${this.cookbook.listRecipes().join(',')}`;
  }
  
  add(name, ingredients) {

    if (Object.keys(this.cookbook.recipes).includes(name)) {
      console.warn(`The recipe of ${name} already exists`)
      return `The recipe of ${name} already exists`
    } else {
      this.cookbook.addRecipe(name, ingredients);
      return `Successfully added the following recipe: ${name}`;
    }
  }

  get(name) {
    if (Object.keys(this.cookbook.recipes).includes(name)) {
      return `The ingredients for ${name} are: ${this.cookbook.getRecipe(name)}`;
    } else {
      console.warn(`The recipe of ${name} does not exist in this cookbook`)
      return `The recipe of ${name} does not exist in this cookbook`
    }
  }

  remove(name) {
    this.cookbook.removeRecipe(name);
    return `Successfully removed the following recipe: ${name}`;
  }

  isEmpty() {
    if(this.cookbook.empty()){
      return `this cookbook is empty`
    }
  }
  
}

module.exports = { CookbookCli };

const { Cookbook } = require('../src/cookbook');

describe('Cookbook', () => {
  describe('Adding recipes', () => {
    test('should allow a recipe to be added', () => {
      const myCookbook = new Cookbook();

      myCookbook.addRecipe("hotdog", ['salsicha', 'pao']);
      expect(myCookbook.recipes).toEqual({ hotdog: ['salsicha', 'pao'] })

    });
  });

  describe('Listing recipes', () => {
    test('should allow the recipes to be listed', () => {
      const myCookbook = new Cookbook();
      myCookbook.addRecipe("hotdog", ['salsicha', 'pao']);
      const myRecipes = myCookbook.listRecipes();
      expect(myRecipes).toEqual(['hotdog']);
      

    });
  });
  

  describe('Retrieving a recipe', () => {
    test('should allow the ingredients for a recipe to be retrieved', () => {
      const myCookbook = new Cookbook();
      myCookbook.addRecipe("hotdog", ['salsicha', 'pao']);
      const retrieved = myCookbook.getRecipe("hotdog")
      
      expect(retrieved).toEqual(['salsicha', 'pao']);

    });
  });

  describe('Deleting a recipe', () => {
    test('should allow a recipe to be deleted', () => {
      const myCookbook = new Cookbook();
      myCookbook.addRecipe("hotdog", ['salsicha', 'pao']);
      
      myCookbook.removeRecipe("hotdog");
      
      expect(myCookbook.recipes).toEqual({});
    });
  });
});

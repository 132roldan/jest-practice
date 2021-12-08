const { Cookbook } = require('../src/cookbook');
const { CookbookCli } = require('../src/cookbook-cli');

describe('CookbookCli', () => {
  describe('Adding recipes', () => {
    test('should accept the recipe information and display the correct message', () => {
      const myCookbook = new Cookbook();
      const myCookbookCli = new CookbookCli(myCookbook);

      const message = myCookbookCli.add('hotdog', ['meat', 'bread']);

      expect(message).toEqual('Successfully added the following recipe: hotdog')
    });
  });

  describe('Listing recipes', () => {
    test('should display the correct message listing all of the recipe names', () => {
      const myCookbook = new Cookbook();
      const myCookbookCli = new CookbookCli(myCookbook);

      myCookbookCli.add('hotdog', ['meat', 'bread'])

      const message = myCookbookCli.list();
       
      expect(message).toEqual('You have the following recipes: hotdog')

     
    });
  });

  describe('Retrieving a recipe', () => {
    test('should display the ingredients required to make the specified recipe', () => {
      const myCookbook = new Cookbook();
      const myCookbookCli = new CookbookCli(myCookbook);

      myCookbookCli.add('hotdog', ['meat', 'bread'])
      const message = myCookbookCli.get('hotdog')
      console.log(message);
      expect(message).toEqual('The ingredients for hotdog are: meat,bread')
      
    });
  });

  describe('Deleting a recipe', () => {
    test('should accept the recipe name and display the correct message', () => {
      const myCookbook = new Cookbook();
      const myCookbookCli = new CookbookCli(myCookbook);

      myCookbookCli.add('hotdog', ['meat', 'bread'])
      const message  = myCookbookCli.remove('hotdog')
      const dell = myCookbookCli.list();
      console.log(dell);
      
      
      expect(message).toEqual('Successfully removed the following recipe: hotdog')
      
    });
  });

   
  describe('Verify if current cookbook is empty', () => {
    test('should accept the cookbook name and display the correct message', () => {
      const myCookbook = new Cookbook();
      const myCookbookCli = new CookbookCli(myCookbook);

      
      const message  = myCookbookCli.isEmpty()
      
      
      
      expect(message).toEqual('this cookbook is empty')
      
    });
  });
});

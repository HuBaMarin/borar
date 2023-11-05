class Recipe {
    constructor(name, ingredients, price) {
      this.name = name;
      this.ingredients = ingredients;
      this.price = price;
    }
  
    displayRecipe() {
      const resultDiv = document.getElementById("result");
      resultDiv.innerHTML += `<p>Name: ${this.name}</p>`;
      resultDiv.innerHTML += `<p>Ingredients: ${this.ingredients.join(", ")}</p>`;
      resultDiv.innerHTML += `<p>Price: $${this.price.toFixed(2)}</p>`;
      resultDiv.innerHTML += "<hr>";
    }
  }
  
  const recipes = [
    new Recipe("Chocolate Cake", ["flour", "sugar", "cocoa powder", "eggs", "butter"], 10.99),
    new Recipe("Pasta Carbonara", ["spaghetti", "bacon", "eggs", "parmesan cheese", "black pepper"], 15.99),
    new Recipe("Chicken Stir Fry", ["chicken breast", "vegetables", "soy sauce", "garlic", "ginger"], 12.99)
  ];
  
  const displayButton = document.getElementById("displayButton");
  displayButton.addEventListener("click", () => {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ""; // Clear previous results
    recipes.forEach(recipe => recipe.displayRecipe());
  });
// const { exportAllDeclaration } = require('@babel/types');

// Mock data for meals upto 10
const meals = [
  {
    idMeal: '52977', strMeal: 'Corba', strDrinkAlternate: null, strCategory: 'Side', strArea: 'Turkish',
  },
  {
    idMeal: '53060', strMeal: 'Burek', strDrinkAlternate: null, strCategory: 'Side', strArea: 'Croatian',
  },
  {
    idMeal: '53065', strMeal: 'Sushi', strDrinkAlternate: null, strCategory: 'Seafood', strArea: 'Japanese',
  },
  {
    idMeal: '52978', strMeal: 'Kumpir', strDrinkAlternate: null, strCategory: 'Side', strArea: 'Turkish',
  },
  {
    idMeal: '53026', strMeal: 'Tamiya', strDrinkAlternate: null, strCategory: 'Vegetarian', strArea: 'Egyptian',
  },
  {
    idMeal: '52785', strMeal: 'Dal fry', strDrinkAlternate: null, strCategory: 'Vegetarian', strArea: 'Indian',
  },
  {
    idMeal: '52804', strMeal: 'Poutine', strDrinkAlternate: null, strCategory: 'Miscellaneous', strArea: 'Canadian',
  },
  {
    idMeal: '52844', strMeal: 'Lasagne', strDrinkAlternate: null, strCategory: 'Pasta', strArea: 'Italian',
  },
  {
    idMeal: '52929', strMeal: 'Timbits', strDrinkAlternate: null, strCategory: 'Dessert', strArea: 'Canadian',
  },
  {
    idMeal: '52948', strMeal: 'Wontons', strDrinkAlternate: null, strCategory: 'Pork', strArea: 'Chinese',
  },
  {
    idMeal: '52971', strMeal: 'Kafteji', strDrinkAlternate: null, strCategory: 'Vegetarian', strArea: 'Tunisian',
  },

];

const displayMealsCounter = (meals) => meals.length;

describe('Meals Length', () => {
  test('Counts the number of meals in array', () => {
    expect(displayMealsCounter(meals)).toBe(11);
  });

  test('Counts the number of meals in array', () => {
    expect(displayMealsCounter(meals)).not.toBe(12);
  });
});
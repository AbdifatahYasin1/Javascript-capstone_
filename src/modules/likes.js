export const getLikes = async () => {
  const uri = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/R0U3YhWaag3EdpAQTbkm/likes';
  const response = await fetch(uri);
  const data = await response.json();
  return data;
};

export const fetchAllMeals = async () => {
  const response = await fetch(
    'https://www.themealdb.com/api/json/v1/1/search.php?s=',
  );
  const data = await response.json();
  return data;
};

export const mealsWithLikes = async () => {
  const meals = await fetchAllMeals();
  const likes = await getLikes();
  const mealsWithLikes = meals.meals.map((meal) => {
    const likesCount = likes.filter((like) => like.item_id === meal.idMeal);
    meal.likes = likesCount[0]?.likes || 0;
    return meal;
  });
  return mealsWithLikes;
};

export default {
  getLikes,
  mealsWithLikes,
  fetchAllMeals,
};

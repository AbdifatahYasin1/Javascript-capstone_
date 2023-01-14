export const getLikes = async () => {
  const uri = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/R0U3YhWaag3EdpAQTbkm/likes';
  const response = await fetch(uri);
  const data = await response.json();
  return data;
};

export const postLikes = async (id) => {
  const uri = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/R0U3YhWaag3EdpAQTbkm/likes';
  const response = await fetch(uri, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });
  const data = await response.text();
  return data;
};

export const updateUI = (id, likes) => {
  const meal = document.getElementById(id);
  const mealInfoDiv = meal.querySelector('.mealInfo');
  const mealLikesDiv = mealInfoDiv.querySelector('.likes');
  mealLikesDiv.innerHTML = likes;
};

export const like = async (id) => {
  await postLikes(id);
  getLikes().then((data) => {
    const likesCount = data.filter((like) => like.item_id === id);
    updateUI(id, likesCount[0]?.likes);
  });
};

export default {
  getLikes,
  postLikes,
  updateUI,
  like,
};

export const addComment = async (id, comment, user, e) => {
  e.preventDefault();
  if (!checkCommentsInput()) return;
  const comments = await postComments(id, comment, user);
  if (comments.error) return;
  const Comments = await getComments(id);
  const lastComment = Comments[Comments.length - 1];
  updateUIWithComments(lastComment);
  updateUINumberOfComments(Comments);
  clearCommentsInput();
};
export const updateUIWithComments = (comment) => {
  const commentsDiv = document.querySelector('.comments');
  commentsDiv.innerHTML += `
      <div class="comment">
          <div class="comment-header">
              <h5 class="comment-author">${comment.username}</h5>
              <span class="comment-date">${comment.creation_date}</span>
          </div>
          <p class="comment-body">${comment.comment}</p>
      </div>
      `;
};
export const checkCommentsInput = () => {
  const username = document.getElementById('username');
  const comment = document.getElementById('comment');
  if (username.value === '' || comment.value === '') {
    return false;
  }
  return true;
};
export const updateUINumberOfComments = (comments) => {
  const totalComments = document.querySelector('.comment-total');
  totalComments.innerHTML = comments.length;
};
export const clearCommentsInput = () => {
  const username = document.getElementById('username');
  const comment = document.getElementById('comment');
  username.value = '';
  comment.value = '';
};
export const getComments = async (id) => {
  const uri = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/R0U3YhWaag3EdpAQTbkm/comments?item_id=${id}`;
  const response = await fetch(uri);
  const data = await response.json();
  return data;
};
export const postComments = async (id, comment, user) => {
  const uri = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/R0U3YhWaag3EdpAQTbkm/comments';
  const response = await fetch(uri, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      username: user,
      comment,
    }),
  });
  const data = await response.text();
  return data;
};
export default {
  addComment, updateUIWithComments, checkCommentsInput, updateUINumberOfComments, getComments, postComments,
};
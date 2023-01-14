const comments = [

  { creation_date: '2023-01-11', username: 'n', comment: 'gh' },
  { comment: 'dg', creation_date: '2023-01-11', username: 'xf' },
  { username: 'ds', creation_date: '2023-01-11', comment: 'dsf' },
  { creation_date: '2023-01-11', username: 'last testing', comment: 'comments' },
  { comment: 'comments', creation_date: '2023-01-11', username: 'last testing' },

];

const displayCommentsCounter = (comments) => comments.length;

describe('Comments Length', () => {
  test('Counts the number of comments in array', () => {
    expect(displayCommentsCounter(comments)).toBe(5);
  });

  test('Counts the number of comments in array', () => {
    expect(displayCommentsCounter(comments)).not.toBe(6);
  });
});

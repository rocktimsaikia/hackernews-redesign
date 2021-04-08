const hn_api = (id) => `https://hacker-news.firebaseio.com/v0/item/${id}.json`; // comment_counts
const hn_algolia_api = (id) => `http://hn.algolia.com/api/v1/items/${id}`; // comments

export default async function getComments(id) {
  const itemData = await fetch(hn_algolia_api(id));
  const item = await itemData.json();

  const commentData = await fetch(hn_api(id));
  const { descendants: comment_count } = await commentData.json();

  return { ...item, comment_count };
}

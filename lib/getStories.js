export default async function getStories(category) {
  const data = await fetch(`https://hn-apiv0.herokuapp.com/api/${category}`, {
    headers: {
      Authorization: process.env.ACCESS_TOKEN,
    },
  });
  const stories = await data.json();

  return stories;
}

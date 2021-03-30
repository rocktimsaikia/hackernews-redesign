export default async function getStories(category) {
  const data = await fetch(`${process.env.HN_API}/${category}`, {
    headers: {
      Authorization: process.env.ACCESS_TOKEN,
    },
  });
  const stories = await data.json();

  return stories;
}

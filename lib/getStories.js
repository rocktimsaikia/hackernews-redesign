export default async function getStories(category) {
  const data = await fetch(`https://hn-api.glitch.me/api/${category}`, {
    headers: {
      Authorization: "D7x1tecF8l1LIOcVz18VMwKR4ozyUobo",
    },
  });
  const stories = await data.json();

  return stories;
}

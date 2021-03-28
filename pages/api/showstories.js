export default async (req, res) => {
  const data = await fetch('https://hn-api.glitch.me/api/showstories', {
    headers: {
      Authorization: 'D7x1tecF8l1LIOcVz18VMwKR4ozyUobo'
    }
  });
  const stories = await data.json();

  res.send(stories);
};

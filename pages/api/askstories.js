import getStories from "../../lib/getStories";

export default async (req, res) => {
  const data = await getStories("askstories");
  res.send(data);
};

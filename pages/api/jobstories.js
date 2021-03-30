import getStories from "../../lib/getStories";

export default async (req, res) => {
  const data = await getStories("jobstories");
  res.send(data);
};

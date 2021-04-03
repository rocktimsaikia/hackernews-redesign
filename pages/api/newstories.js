import getStories from "../../lib/getStories";

export default async (req, res) => {
  const data = await getStories(`newstories?page=${req.query.page}`);
  res.send(data);
};

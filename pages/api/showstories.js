// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { map } from "p-iteration";

export default async (req, res) => {
  let items = await fetch(
    `https://hacker-news.firebaseio.com/v0/showstories.json?print=pretty`
  );
  items = await items.json();

  const stories = await map(items.slice(0, 20), async (item) => {
    let data = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`
    );
    data = await data.json();
    return {
      item,
      author: data.by,
      title: data.title,
      score: data.score,
      comments_count: data.descendants,
      time: data.time,
      url:
        data.url != null
          ? data.url
          : `https://news.ycombinator.com/item?id=${item}`,
    };
  });

  res.status(200).json(stories);
};

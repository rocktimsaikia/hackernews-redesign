import Story from "./Story";
import useFetched from "../lib/useFetched";

export default function Show({ initialData, page }) {
  const { data: stories, isPending } = useFetched(
    `api/frontstories?page=${page}`,
    initialData
  );

  if (isPending) {
    return <h1>Loading...</h1>;
  }

  return stories.map((story, i) => <Story story={story} key={i} />);
}

import Story from "./Story";
import useFetched from "../lib/useFetched";

export default function Show({ initialData, page, category }) {
  const { data: stories, isPending } = useFetched(
    `api/${category}?page=${page}`,
    initialData
  );

  if (isPending) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="mt-4">
      {stories.map((story, i) => (
        <Story story={story} key={i} />
      ))}
    </div>
  );
}

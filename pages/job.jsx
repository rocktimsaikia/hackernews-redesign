import useFetched from "../lib/useFetched";
import getStories from "../lib/getStories";
import Stories from "../components/Stories";

export async function getStaticProps() {
  const posts = await getStories("jobstories");
  return { props: { posts } };
}

export default function Job({ posts }) {
  const { data, isPending } = useFetched("/api/jobstories", posts);

  return (
    <div className="container grid justify-center my-5">
      <h1 className="main-title">Job Stories</h1>
      {!isPending ? <Stories stories={data} /> : null}
    </div>
  );
}

import getStories from "../lib/getStories";
import Page from "../components/Page";

export async function getStaticProps() {
  const posts = await getStories("jobstories");
  return { props: { posts } };
}

export default function Job({ posts }) {
  return (
    <div className="container grid justify-center my-5">
      <h1 className="main-title">Job Stories</h1>
      {!isPending ? <Page initialData={posts} /> : null}
    </div>
  );
}

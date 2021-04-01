import getStories from "../lib/getStories";
import Page from "../components/Page";
import BriefcaseIcon from "../components/icons/briefcase";

export async function getStaticProps() {
  const posts = await getStories("jobstories");
  return { props: { posts } };
}

export default function Job({ posts }) {
  return (
    <div className="container grid justify-center">
      <h1 className="main-title flex items-center">
        <BriefcaseIcon /> Job Stories
      </h1>
      <Page initialData={posts} category="jobstories" />
    </div>
  );
}

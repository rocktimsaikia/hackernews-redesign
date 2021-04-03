import Head from "next/head";
import getStories from "../lib/getStories";
import Page from "../components/Page";

export async function getStaticProps() {
  const posts = await getStories("jobstories");
  return { props: { posts } };
}

export default function Job({ posts }) {
  return (
    <>
      <Head>
        <title>Hackernews Redesign - Job stories</title>
      </Head>
      <div className="lg:col-span-2 mt-8">
        <span className="main-title flex items-center text-soft-black">
          <h1 className="fancy-undeline">Job stories</h1>
        </span>
        <Page initialData={posts} category="jobstories" />
      </div>
    </>
  );
}

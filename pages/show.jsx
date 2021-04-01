import { useState } from "react";
import getStories from "../lib/getStories";
import Page from "../components/Page";
import SparklesIcon from "../components/icons/sparkles";

export async function getStaticProps() {
  const posts = await getStories("showstories");
  return { props: { posts } };
}

export default function Show({ posts }) {
  const [pageCount, setpageCount] = useState(1);
  const pages = [];

  for (let i = 0; i < pageCount; i++) {
    pages.push(
      <Page
        page={i + 1}
        category="showstories"
        initialData={i + 1 !== 1 ? null : posts}
        key={i}
      />
    );
  }

  return (
    <div className="container grid justify-center">
      <h1 className="main-title flex items-center">
        <SparklesIcon /> Show Stories
      </h1>
      {pages}
      <button className="more-btn" onClick={() => setpageCount(pageCount + 1)}>
        Load more
      </button>
    </div>
  );
}

import { useState } from "react";
import getStories from "../lib/getStories";
import Page from "../components/Page";

export async function getStaticProps() {
  const posts = await getStories("askstories");
  return { props: { posts } };
}

export default function Ask({ posts }) {
  const [pageCount, setpageCount] = useState(1);
  const pages = [];

  for (let i = 0; i < pageCount; i++) {
    pages.push(
      <Page
        page={i + 1}
        category="askstories"
        initialData={i + 1 !== 1 ? null : posts}
        key={i}
      />
    );
  }

  return (
    <div className="col-span-2 mt-8">
      <span className="main-title flex items-center text-soft-black">
        <h1 className="fancy-undeline">Ask stories</h1>
      </span>
      {pages}
      <button className="more-btn" onClick={() => setpageCount(pageCount + 1)}>
        Load more
      </button>
    </div>
  );
}

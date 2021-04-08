import React from "react";
import Link from "next/link";
import ChatIcon from "../components/icons/chat";
import UpIcon from "../components/icons/up";
import ThumbsUp from "../components/icons/thumbsup";

export default function Story({ story }) {
  const getHost = (url, id) => {
    url = !url ? `https://news.ycombinator.com/item?id=${id}` : url;
    url = new URL(url);
    return url.hostname;
  };

  return (
    <Link href={`/items/${story.id}`}>
      <div className="news-card flex flex-row font-inter">
        <div className="px-5 hidden lg:flex flex-col justify-center text-center w-20">
          <UpIcon />
          <p className="text-gray-600 text-xs font-medium">{story.score}</p>
        </div>
        <div className="px-5">
          <h2 className="font-medium text-sm text-soft-black">{story.title}</h2>
          <div className="flex mt-2">
            <p className="hidden lg:inline-block text-xs mr-4 text-gray-600">
              by <span className="text-red-500 font-medium">{story.user}</span>
            </p>
            <p className="text-xs text-gray-600 mr-4"> {story.time}</p>
            <p className="text-xs hidden lg:inline-block text-gray-600 mr-4">
              {getHost(story.source, story.id)}
            </p>
            <figure className="flex items-start mr-4">
              <ChatIcon />
              <figcaption className="text-xs text-gray-600">
                {story.comment_count}
              </figcaption>
            </figure>

            <div className="lg:hidden flex items-start">
              <ThumbsUp />
              <p className="text-xs text-gray-600">{story.score}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

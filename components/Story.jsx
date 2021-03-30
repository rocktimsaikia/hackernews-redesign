import React from "react";
import Link from "next/link";
import ChatIcon from "../components/icons/chat";

export default function Story({ story }) {
  return (
    <Link href={`/items/${story.id}`}>
      <div
        href={story.link}
        target="_blank"
        className={`news-card flex flex-row`}
      >
        <div className="px-5 flex flex-col justify-center text-center w-16">
          <svg
            height="18"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="sort-up"
            className="svg-inline--fa fa-sort-up fa-w-10"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="#B2B1B1"
              d="M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z"
            ></path>
          </svg>
          <p className="text-gray-500 text-xs font-medium">{story.score}</p>
        </div>
        <div className="px-5">
          <h2 className="font-medium text-sm text-gray-700">{story.title}</h2>
          <div className="flex mt-2">
            <p className="text-xs mr-4 text-gray-500">
              by <span className="text-red-500 font-medium">{story.user}</span>
            </p>
            <p className="text-xs text-gray-500 mr-4">{story.time}</p>
            <figure className="flex items-start">
              <ChatIcon />
              <figcaption className="text-xs text-gray-500">
                {story.comment_count}
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </Link>
  );
}

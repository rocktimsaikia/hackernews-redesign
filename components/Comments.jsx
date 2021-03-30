import React from "react";
import * as timeago from "timeago.js";

export default function Comments({ comments }) {
  return (
    <div>
      <ul>
        {comments.map((comment, i) => (
          <li className="my-6 font-inter" key={i}>
            <div>
              <span className="text-gray-800 text-sm font-bold mr-4 mb-2 inline-block">
                {comment.author}
              </span>
              <span className="text-gray-500 text-xs">
                {timeago.format(comment.created_at)}
              </span>
            </div>
            <p
              className="text-sm text-gray-800 font-normal tracking-wide"
              dangerouslySetInnerHTML={{ __html: comment.text }}
            ></p>
          </li>
        ))}
      </ul>
    </div>
  );
}

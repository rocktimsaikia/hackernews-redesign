import React from "react";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

export default function Comments({ comments }) {
  dayjs.extend(localizedFormat);
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
                {dayjs(comment.created_at).format("MMM D, h:mm A")}
              </span>
            </div>
            <p
              className="text-sm text-gray-800 font-normal tracking-tight"
              dangerouslySetInnerHTML={{ __html: comment.text }}
            ></p>
          </li>
        ))}
      </ul>
    </div>
  );
}

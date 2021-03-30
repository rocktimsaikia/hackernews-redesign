import React from "react";
import * as timeago from "timeago.js";
import ReplyIcon from "./icons/reply";

export default function Comments({ comments }) {
  const [showReplies, setShowReplies] = React.useState(false);

  return (
    <div>
      <ul>
        {comments.map((comment, i) => (
          <li className="my-6 font-inter" key={i}>
            <div>
              <span className="text-gray-800 text-xs font-bold mr-4 mb-2 inline-block">
                {comment.author}
              </span>
              <span className="text-gray-500 text-xs">
                {timeago.format(comment.created_at)}
              </span>
            </div>
            <p
              className="comments-paragraph"
              dangerouslySetInnerHTML={{ __html: comment.text }}
            ></p>
            {comment["children"].length > 0 && (
              <button
                className="flex items-center text-xs underline mt-2"
                onClick={() => setShowReplies(!showReplies)}
              >
                <ReplyIcon /> <span>replies...</span>
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

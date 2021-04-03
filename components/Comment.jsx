import { useState } from "react";
import * as timeago from "timeago.js";
import ReplyIcon from "./icons/reply";
import { motion } from "framer-motion";

const item = {
  hidden: { y: 10, opacity: 0 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Comment({ comment }) {
  const [showReplies, setShowReplies] = useState(false);

  return (
    <motion.li className="my-6 font-inter" variants={item}>
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
          className="flex items-center text-xs underline mt-2 text-gray-600"
          onClick={() => setShowReplies(!showReplies)}
        >
          <ReplyIcon /> <span>replies...</span>
        </button>
      )}
      {showReplies && (
        <div className="pl-4 border-l-2 border-gray-400">
          {comment.children.map((reply) => (
            <Comment comment={reply} />
          ))}
        </div>
      )}
    </motion.li>
  );
}

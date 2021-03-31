import React from "react";
import Comment from "./Comment";

export default function Comments({ comments }) {
  return (
    <div>
      <ul>
        {comments.map((comment, i) => (
          <Comment comment={comment} key={i} />
        ))}
      </ul>
    </div>
  );
}

import React from "react";
import Comment from "./Comment";

export default function Comments({ comments }) {
  return (
    <ul className="mt-16">
      {comments.map((comment, i) => (
        <Comment comment={comment} key={i} />
      ))}
    </ul>
  );
}

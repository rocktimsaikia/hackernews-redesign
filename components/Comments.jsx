import React from "react";
import Comment from "./Comment";
import { motion } from "framer-motion";

const list = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { ease: "easeOut", staggerChildren: 0.2 },
  },
};

export default function Comments({ comments }) {
  return (
    <motion.ul
      className="children mt-16"
      initial="hidden"
      animate="show"
      variants={list}
    >
      {comments.map((comment, i) => (
        <Comment comment={comment} key={i} />
      ))}
    </motion.ul>
  );
}

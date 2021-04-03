import Story from "./Story";
import useFetched from "../lib/useFetched";
import { motion } from "framer-motion";

const list = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, deplay: 1 },
  },
};
const item = {
  hidden: { x: -20, opacity: 0 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Show({ initialData, page, category }) {
  const { data: stories, isPending } = useFetched(
    `api/${category}?page=${page}`,
    initialData
  );

  if (isPending) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="mt-4">
      <motion.div
        className="children"
        initial="hidden"
        animate="show"
        variants={list}
      >
        {stories.map((story, i) => (
          <motion.div variants={item}>
            <Story story={story} key={i} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

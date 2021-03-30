import useFetched from "../../lib/useFetched";
import { useRouter } from "next/router";
import Comments from "../../components/Comments";
import ChatIcon from "../../components/icons/chat";
import * as timeago from "timeago.js";

export default function Best() {
  const { pid } = useRouter().query;
  const { data, isPending } = useFetched(`/api/comments/${pid}`);

  return (
    <div className="container grid justify-center my-5">
      {!isPending ? (
        <div className="comments-container">
          <h1 className="font-extrabold text-xl">{data.title}</h1>
          <div className="flex mt-2">
            <p className="text-xs mr-4 text-gray-500">
              by <span className="text-red-500 font-medium">{data.author}</span>
            </p>
            <p className="text-xs text-gray-500 mr-4">
              {timeago.format(data.created_at)}
            </p>
            <figure className="flex items-start">
              <ChatIcon />
              <figcaption className="text-xs text-gray-500">
                {data.comment_count}
              </figcaption>
            </figure>
          </div>
          <Comments comments={data.children} />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
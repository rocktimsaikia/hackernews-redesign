import { useRouter } from "next/router";
import Head from "next/head";
import useFetched from "../../lib/useFetched";
import Comments from "../../components/Comments";
import ChatIcon from "../../components/icons/chat";
import GlobeIcon from "../../components/icons/globe";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
// import getComments from "../../lib/getComments";

export default function Best() {
  const { id } = useRouter().query;
  const { data, isPending } = useFetched(`/api/comments/${id}`);
  dayjs.extend(localizedFormat);

  const getHost = (url, id) => {
    url = !url ? `https://news.ycombinator.com/item?id=${id}` : url;
    url = new URL(url);
    return url.hostname;
  };

  return (
    <div className="container grid justify-center my-10">
      {!isPending ? (
        <div className="w-full lg:w-140">
          <Head>
            <title>Hackernews Redesign - {data.title}</title>
          </Head>
          <div>
            <a
              className="font-extrabold text-xl fancy-undeline"
              href={
                !data.url
                  ? `https://news.ycombinator.com/item?id=${data.id}`
                  : data.url
              }
              target="_blank"
            >
              {data.title}
            </a>
            <div className="flex mt-2">
              <p className="text-xs mr-4 text-gray-500">
                by{" "}
                <span className="text-red-500 font-medium">{data.author}</span>
              </p>
              <p className="text-xs text-gray-500 mr-4">
                {dayjs(data.created_at).format("MMM D, h:mm A")}
              </p>
              <p className="text-xs text-gray-500 mr-4 flex items-start">
                <GlobeIcon /> {getHost(data.url)}
              </p>
              <figure className="flex items-start">
                <ChatIcon />
                <figcaption className="text-xs text-gray-500">
                  {data.comment_count}
                </figcaption>
              </figure>
            </div>
          </div>
          <Comments comments={data.children} />
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

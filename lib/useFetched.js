import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function useFetched(url, initialData) {
  const { data, error } = useSWR(url, fetcher, {
    ...(initialData && { initialData }),
  });
  const stories = data || [];
  const isPending = !data;

  return { data: stories, error, isPending };
}

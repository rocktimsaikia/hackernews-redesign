import axios from "axios";

export default function fetcher(url) {
  return axios.get(`http://localhost:3000${url}`).then((res) => res.data);
}

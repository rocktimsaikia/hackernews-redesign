import React, { useState, useEffect } from "react";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import News from "./components/News";
import "./App.css";
import axios from "axios";

const App = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getData().then(arr => getDeatils(arr).then(item => setList(item)));
  }, []);

  const getData = async function() {
    const arr = [];
    try {
      const { data } = await axios.get(
        `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`
      );
      data.slice(0, 20).map(item => arr.push(item));
    } catch (error) {
      return error;
    }
    return arr;
  };

  const getDeatils = async function(arr) {
    const promises = arr.map(async item => {
      const { data } = await axios.get(
        `https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`
      );
      return {
        author: data.by,
        title: data.title,
        score: data.score,
        comments_count: data.descendants,
        time: data.time,
        url: data.url
          .replace("http://", "")
          .replace("https://", "")
          .split(/[/?#]/)[0]
      };
    });
    const results = await Promise.all(promises);
    return results;
  };

  return (
    <div>
      <Header />
      <News list={list} />
      <Footer />
    </div>
  );
};
export default App;

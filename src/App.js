import React, { useState, useEffect } from "react";
import Header from "./components/layouts/Header";
import Navbar2 from "./components/layouts/Navbar2";
import Footer from "./components/layouts/Footer";
import News from "./components/News";
import "./App.css";
import axios from "axios";

const App = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getData("topstories").then(arr =>
      getDeatils(arr).then(item => setList(item))
    );
  }, []);

  const getData = async function(category) {
    const arr = [];
    try {
      const { data } = await axios.get(
        `https://hacker-news.firebaseio.com/v0/${category}.json?print=pretty`
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
        item,
        author: data.by,
        title: data.title,
        score: data.score,
        comments_count: data.descendants,
        time: data.time,
        url:
          data.url != null
            ? data.url
            : `https://news.ycombinator.com/item?id=${item}`
      };
    });
    const results = await Promise.all(promises);
    return results;
  };

  return (
    <div>
      <Header />
      <Navbar2 />
      <News list={list} />
      <Footer />
    </div>
  );
};
export default App;

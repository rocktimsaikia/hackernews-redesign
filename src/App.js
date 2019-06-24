import React, { useState, useEffect, useRef } from "react";
import Header from "./components/layouts/Header";
import Navbar2 from "./components/layouts/Navbar2";
import Footer from "./components/layouts/Footer";
import News from "./components/News";
import Loader from "./components/layouts/Loader";
import "./App.css";
import axios from "axios";
import Pace from "react-pace-progress";

const App = () => {
  const [state, setState] = useState(20);
  const [isLoading, setLoadingState] = useState(false);
  const [list, setList] = useState([]);
  const [refSate, setRefState] = useState("topstories");

  const newsRef = useRef(null);
  const loaderRef = useRef(null);

  useEffect(() => {
    getData("topstories", state).then(arr =>
      getDeatils(arr).then(item => setList(item))
    );
  }, []);

  const getData = async function(category, n) {
    const arr = [];
    try {
      const { data } = await axios.get(
        `https://hacker-news.firebaseio.com/v0/${category}.json?print=pretty`
      );
      data.slice(0, n).map(item => arr.push(item));
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

  const formatLoaders = (item, callback) => {
    setList(item);
    callback();
  };

  const handleClick = text => {
    setRefState(text);
    newsRef.current.style.display = "none";
    loaderRef.current.style.display = "block";
    getData(text, state).then(arr =>
      getDeatils(arr).then(item =>
        formatLoaders(item, () => {
          newsRef.current.style.display = "block";
          loaderRef.current.style.display = "none";
        })
      )
    );
  };

  const setLoader = (item, callback) => {
    setList(item);
    callback();
  };

  const onShowMoreClick = () => {
    setLoadingState(true);
    const n = state + 20;
    getData(refSate, n).then(arr =>
      getDeatils(arr).then(item =>
        setLoader(item, () => {
          setLoadingState(false);
          setState(n);
          setState(20);
        })
      )
    );
  };

  return (
    <div>
      <div className="sticky">
        {isLoading ? <Pace color="#ff6600" height="3px" /> : null}
      </div>
      <Header />
      <Navbar2 handleClick={handleClick} />
      <div ref={loaderRef} style={{ display: "none" }}>
        <Loader />
      </div>
      <div ref={newsRef} className="mt-2">
        <News list={list} onShowMoreClick={onShowMoreClick} />
      </div>
      <div className="text-center m-1">
        <span className="more-btn" onClick={onShowMoreClick}>
          More
        </span>
      </div>
      <Footer />
    </div>
  );
};

export default App;

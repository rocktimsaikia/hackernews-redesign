import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Stories from "./layouts/Stories";
import Loader from "./layouts/Loader";

const News = props => {
  const [state, setState] = useState([]);
  const [count, setCount] = useState(21);
  const [isLoading, setLoading] = useState(false);

  //a global index to keep track of the all showed items

  //setting different api params for different routes
  const checkRoute = () => {
    let route;
    switch (props.location.pathname) {
      case "/":
        route = "/topstories";
        break;

      case "/shows":
        route = "/showstories";
        break;

      case "/ask":
        route = "/askstories";
        break;

      case "/jobs":
        route = "/jobstories";
        break;

      case "/top":
        route = "/topstories";
        break;

      case "/new":
        route = "/newstories";
        break;

      case "/best":
        route = "/beststories";
        break;

      default:
        route = "/notFound";
        break;
    }
    return route;
  };
  const formatComponent = (item, callback) => {
    setState(item);
    callback();
  };
  useEffect(() => {
    // function executes here ,calling two async function
    getData(checkRoute(), 0, 20).then(arr => {
      getDeatils(arr).then(item =>
        formatComponent(item, () => {
          props.hideLoader();
        })
      );
    });
  }, []);

  //getting all the data ids and storing them in an array
  const getData = async function(category, start, end) {
    const arr = [];
    try {
      const { data } = await axios.get(
        `https://hacker-news.firebaseio.com/v0${category}.json?print=pretty`
      );
      data.slice(start, end).map(item => arr.push(item));
    } catch (error) {
      return error;
    }
    return arr;
  };

  //fetching data from those ids and storing only the necessary datas in an array
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

  const showMoreContent = () => {
    setLoading(true);
    getData(checkRoute(), count, count + 20).then(arr => {
      getDeatils(arr).then(item =>
        formatComponent(item, () => {
          setCount(count + 20);
          setLoading(false);
          window.scrollTo(0, 0);
        })
      );
    });
  };

  //return statement
  return (
    <>
      {props.isLoading ? (
        <Loader />
      ) : (
        <>
          <div
            className={
              isLoading
                ? "container-fluid main overlay"
                : "container-fluid main"
            }
          >
            <table className="table">
              <tbody>
                <Stories state={state} />
              </tbody>
            </table>
          </div>
          <div className="text-center m-1">
            <span className="more-btn " onClick={showMoreContent}>
              More
            </span>
          </div>
        </>
      )}
    </>
  );
};

export default withRouter(News);

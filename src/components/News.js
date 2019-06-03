import React from "react";
import timeago from "epoch-timeago";
import { Url } from "url";

const News = ({ list }) => {
  return (
    <div className="container-fluid main">
      <table>
        <tbody>
          {list.map(
            (
              { item, author, title, score, comments_count, time, url },
              index
            ) => (
              <tr>
                <td>{index + 1}</td>
                <td style={{ padding: "0px" }}>
                  <i
                    className="fas fa-sort-up"
                    style={{
                      fontSize: "30px",
                      marginTop: "16px",
                      padding: "0px",
                      marginRight: "0px"
                    }}
                  />
                </td>
                <td style={{ padding: "0px", paddingRight: "20px" }}>
                  {" " + " "}
                  {score}
                </td>
                <td style={{ paddingRight: "100px", fontWeight: "600" }}>
                  <a href={url} target="_blank">
                    {title}
                  </a>
                </td>
                <td>
                  <i className="fas fa-user" />{" "}
                  <a
                    href={`https://news.ycombinator.com/user?id=${author}`}
                    target="_blank"
                  >
                    {author}
                  </a>
                </td>
                <td>
                  <i className="fas fa-globe" />{" "}
                  <a
                    href={`https://${
                      url
                        .replace("http://", "")
                        .replace("https://", "")
                        .split(/[/?#]/)[0]
                    }`}
                    target="_blank"
                  >
                    {
                      url
                        .replace("http://", "")
                        .replace("https://", "")
                        .split(/[/?#]/)[0]
                    }
                  </a>
                </td>
                <td>
                  <i className="fas fa-clock"> {timeago(time * 1000)}</i>
                </td>
                <td>
                  <i className="far fa-comment-alt" />{" "}
                  <a
                    href={`https://news.ycombinator.com/item?id=${item}`}
                    target="_blank"
                  >
                    {comments_count}
                  </a>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default News;

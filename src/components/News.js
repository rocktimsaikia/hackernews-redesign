import React from "react";
import timeago from "epoch-timeago";

const News = ({ list }) => {
  return (
    <div className="container-fluid main">
      <table>
        <tbody>
          {list.map(
            ({ author, title, score, comments_count, time, url }, index) => (
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
                  {title}
                </td>
                <td>
                  <i className="fas fa-user" /> {author}
                </td>
                <td>
                  <i className="fas fa-globe" /> {url}
                </td>
                <td>
                  <i className="fas fa-clock"> {timeago(time * 1000)}</i>
                </td>
                <td>
                  <i className="far fa-comment-alt" /> {comments_count}
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

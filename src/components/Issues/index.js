import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import Pagination from "../Pagination";


const Issues = ({
  fetchedData,
  passIssuesDetail,
  postsPerPage,
  totalPosts,
  paginate,
}) => {
  //console.log(fetchedData);

  const renderedData = fetchedData.map((item, index) => {
    //   const daysAgo=
    return (
      <div className="fetched-data" key={item.id}>
        <div>
          <h3 className="title">
            {item.state === "open" ? (
              <ErrorOutlineIcon style={{ color: "green" }} fontSize="inherit" />
            ) : (
              <ErrorOutlineIcon style={{ color: "red" }} fontSize="inherit" />
            )}
            {item.title}
          </h3>
          {item.labels.map((i) => {
            return (
              <button
                key={i.id}
                className="label"
                style={{ backgroundColor: `#${i.color}` }}
              >
                {i.name}
              </button>
            );
          })}
          <p>
            #{item.number} opened on {item.created_at.substr(0, 10)} by{" "}
            {item.user.login}
            <Link to="/issues-detail">
              <KeyboardArrowRightIcon
                onClick={() => passIssuesDetail(item, index)}
              />
            </Link>
          </p>
        </div>
      </div>
    );
  });
  return (
    <div className="render">
      <div className="item1">{renderedData}</div>{" "}
      <div className="item2">
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={totalPosts}
          paginate={paginate}
        />{" "}
      </div>
    </div>
  );
};

export default Issues;

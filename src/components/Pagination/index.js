import React, { useState, useEffect } from "react";
import "./style.css";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  const [count, setCount] = useState(1);
  useEffect(() => {
    paginate(count);
  }, [count]);
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const handleClick = () => {
    if(count===34)return;
    setCount(count + 1);
  };
  return (
    <div >
      <div className="paginate-container">
        {pageNumbers.map((item) => {
          return (
            <div
              key={item}
              onClick={() => {
                paginate(item);
                setCount(item);
              }}
            >
              <div style={{cursor:"pointer"}}>{item}</div>
            </div>
          );
        })}
      </div>
      <div className="footer">
        <div style={{display:"inline-block"}}>Page {count}</div>
        <button onClick={handleClick} style={{ margin: "10px" }}>
          Next
        </button>
      </div>
    </div>
  );
};
export default Pagination;

/*const [count, setCount] = useState(1);
  useEffect(() => {
    paginate(count);
  }, [count]);
  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    if (count === 1) return;
    setCount(count - 1);
  };
  return (
    <div>
      <button onClick={handleDecrease}>Previous </button>

      <button>{count}</button>
      <button onClick={handleIncrease}>Next</button>
    </div>
  );
};
 */

import React from "react";

const imgListCompo = ({ urlList }) => {
  const list = urlList.map((url) => {
    return (
      <li key={url} className="item">
        {/* {url} */}
        <img src={url} alt="" className="img" />
      </li>
    );
  });
  return <ul className="list">{list}</ul>;
};

export default imgListCompo;

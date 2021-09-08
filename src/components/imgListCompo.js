import React from "react";

const imgListCompo = ({ urlList }) => {
  const list = urlList.map((url) => {
    return (
      <li key={url}>
        {url}
        <img src={url} alt="" />
      </li>
    );
  });
  return <ul>{list}</ul>;
};

export default imgListCompo;

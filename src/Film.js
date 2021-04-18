import React from "react";

const Film = ({ img, title }) => {
  const clickHandler = (title) => {
    alert("liked " + title);
  };
  return (
    <div className="film">
      <img src={img} alt={title} />
      <h1>{title}</h1>
      <div>
        <button type="button" onClick={() => clickHandler(title)}>
          Like
        </button>
      </div>
    </div>
  );
};

export default Film;

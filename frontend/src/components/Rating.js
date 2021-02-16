import React from 'react'
import propTypes from "prop-types";
const Rating = ({ value, text }) => {
  const processRating = (value) => {
    const arr = [0, 1, 2, 3, 4];
    const iconList = [];
    arr.forEach((item, index) => {
      const relativeRating = value - item;
      if (relativeRating >= 1) {
        iconList.push("#icon-full-star");
      } else if (relativeRating >= 0.5) {
        iconList.push("#icon-half-star")
      } else {
        iconList.push("#icon-empty-star")
      }
    });
    return iconList;
  }
  const iconList = processRating(value);
  return (
    <div className="rating-wrapper">
      {
        iconList.map((icon, index) => (
          <span key={index} className="rating">
            <svg className="icon" aria-hidden="true">
              <use xlinkHref={icon}></use>
            </svg>
          </span>
        ))
      }
      <span className="px-3">{text && text}</span>
    </div>
  )
}

Rating.propTypes = {
  value: propTypes.number.isRequired,
  text: propTypes.string.isRequired,
}

export default Rating

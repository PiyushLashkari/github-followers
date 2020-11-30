import React from "react";
import PropTypes from "prop-types";

import CarouselItem from "./CarouselItem";

function LoadingPlaceholder({ step }) {
  return Array.from({ length: step }, (i, v) => v).map((item) => (
    <CarouselItem
      key={item}
      data={{}}
      altSrc="https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif"
    />
  ));
}

LoadingPlaceholder.propTypes = {
  step: PropTypes.number,
};

export default LoadingPlaceholder;

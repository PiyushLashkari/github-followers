import React, { useMemo } from "react";
import PropTypes from "prop-types";

function CarouselItem({ data, altSrc }) {
  const { divStyle, imgStyle } = useMemo(
    () => ({
      divStyle: {
        display: "inline-block",
        border: "1px solid gray",
        margin: "5px",
        height: "40px",
        width: "40px",
      },
      imgStyle: { height: "100%", width: "100%" },
    }),
    []
  );

  return (
    <div style={divStyle} title={data.login}>
      <img style={imgStyle} src={data.avatar_url || altSrc} alt="NA" />
    </div>
  );
}

CarouselItem.propTypes = {
  data: PropTypes.object,
};

export default CarouselItem;

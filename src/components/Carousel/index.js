import React, { useCallback, useMemo, useState } from "react";
import PropTypes from "prop-types";
import CarouselItem from "./CarouselItem";
import LoadingPlaceholder from "./LoadingPlaceholder";

function Carousel({ step = 4, start, setStart, list, isFetching, fetchMore }) {
  const handlePrev = useCallback(() => {
    setStart((p) => p - step);
  }, [step]);

  const handleNext = useCallback(() => {
    setStart((p) => {
      if (p + step * 2 > list.length) {
        if (typeof fetchMore === "function") fetchMore();
      }
      return p + step;
    });
  }, [step, list]);

  const btnDisabled = useMemo(() => {
    const listSize = list.length;
    return {
      btnPrev: !listSize || start <= 0,
      btnNext: !listSize || start + step >= listSize,
    };
  }, [list, start, step]);

  if (!list.length && !isFetching) return <h5>No records found</h5>;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <div>
        <button id="btnPrev" onClick={handlePrev} disabled={btnDisabled.btnPrev}>
          &lt;
        </button>
      </div>
      <div>
        {isFetching ? (
          <LoadingPlaceholder step={step} />
        ) : (
          list
            .slice(start, start + step)
            .map((item) => <CarouselItem key={item.id} data={item} />)
        )}
      </div>
      <div>
        <button id="btnNext" onClick={handleNext} disabled={btnDisabled.btnNext}>
          &gt;
        </button>
      </div>
    </div>
  );
}

Carousel.propTypes = {
  start: PropTypes.number,
  step: PropTypes.number,
  list: PropTypes.array,
  isFetching: PropTypes.bool,
  setStart: PropTypes.func,
  fetchMore: PropTypes.func,
};

export default Carousel;

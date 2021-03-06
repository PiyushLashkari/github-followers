import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import { useInput } from "../../hooks";
import Carousel from "../Carousel";

function Followers({ fetchMore }) {
  const [searchText, setSearchText] = useInput("");
  const { data, isFetching, page, error } = useSelector((state) => {
    const list = state.data.filter((item) => item.login.includes(searchText))
    return {
      ...state,
      data: list,
    }
  });

  const [start, setStart] = useState(0);

  useEffect(() => {
    setStart(0);
  }, [searchText]);

  useEffect(() => {
    if (page === 1) {
      setStart(0);
    }
  }, [page]);

  if (!!error) return <h5>{error.message}</h5>;

  // if (!data.length && !isFetching) return <h5>No records found</h5>;

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "20px",
        width: "265px",
      }}
    >
      <input
        type="text"
        name="followerName"
        id="followerName"
        value={searchText}
        onChange={setSearchText}
        placeholder="Search follower..."
      />
      <Carousel
        start={start}
        setStart={setStart}
        isFetching={isFetching}
        list={data}
        fetchMore={fetchMore}
      />
    </div>
  );
}

Followers.propTypes = {
  fetchMore: PropTypes.func,
};

export default Followers;

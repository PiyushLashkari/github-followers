import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import { useInput } from "../../hooks";
import { getFollowers, getMoreFollowers } from "./redux/actions";
import Followers from "../Followers";

function Profile() {
  const [username, setUsername] = useInput("");
  const dispatch = useDispatch();

  const handleGetFollowers = useCallback(() => {
    dispatch(getFollowers(username));
  }, [username, getFollowers]);

  const handleFetchMore = useCallback(() => {
    dispatch(getMoreFollowers());
  }, [getMoreFollowers]);

  return (
    <div>
      <h3>Github followers</h3>
      <div
        style={{
          display: "flex",
          margin: "20px 0",
          alignItems: 'flex-end',
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "250px",
          }}
        >
          <label htmlFor="username">Github username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={setUsername}
          />
        </div>
        <div>
          <button id="btnSearch" onClick={handleGetFollowers}>
            Search
          </button>
        </div>
      </div>
      <Followers fetchMore={handleFetchMore} />
    </div>
  );
}

export default Profile;

import React from "react";
import PropTypes from "prop-types";
import styles from "./FriendList.module.css";
import FriendItem from "./FriendItem/FriendItem";

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map((friend) => (
        <FriendItem key={friend.id} {...friend} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};

export default FriendList;

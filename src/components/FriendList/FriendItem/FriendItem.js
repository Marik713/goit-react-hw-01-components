import React from 'react';
import PropTypes from 'prop-types';
import styles from '../FriendList.module.css';

const FriendItem = ({ id, isOnline, avatar, name }) => {
  return (
    <li key={id} className={styles.item}>
      <span className={isOnline ? styles.online : styles.notOnline}></span>
      <img className={styles.avatar} src={avatar} alt="" width="88" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendItem.defaultProps = {
  avatar:
    'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Profile+image+placeholder',
};

FriendItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendItem;

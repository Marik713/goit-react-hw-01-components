import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';


const FriendList = ({friends}) => {
    return (
        <ul className={styles.friendList}>
            {friends.map(friend=>{
                return(<li key={friend.id} className={styles.item}>
                <span className={friend.isOnline ? styles.online : styles.notOnline}></span>
                <img className={styles.avatar} src={friend.avatar} alt="" width="88"/>
            <p className={styles.name}>{friend.name}</p>
            </li>)
            })}
     </ul>
    )
};

FriendList.defaultProps = {
    avatar: "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Profile+image+placeholder"
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({id: PropTypes.number.isRequired, name: PropTypes.string.isRequired, avatar: PropTypes.string, isOnline: PropTypes.bool.isRequired}))
};
export default FriendList;

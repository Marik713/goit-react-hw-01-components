import React from 'react';
import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statictics';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import FriendList from '../FriendList/FriendList';
import styles from './App.module.css';
import user from '../Profile/user.json';
import statisticalData from '../Statistics/statisticalData.json';
import transactions from '../TransactionHistory/transactions.json';
import friends from '../FriendList/friends.json';


const App = () => {
    return (
        <div>
            <h2 className={
                styles.mainTitle
            }>Task1</h2>
            <Profile name={user.name} tag= {user.tag} location={user.location} avatar={user.avatar} stats={user.stats}/>
            <h2 className={
                styles.mainTitle
            }>Task2</h2>
            <Statistics title="Upload stats"
                stats={statisticalData}/>
            <Statistics stats={statisticalData}/>
            <h2 className={
                styles.mainTitle
            }>Task3</h2>
            <FriendList friends={friends} />
            <h2 className={
                styles.mainTitle
            }>Task4</h2>
            <TransactionHistory items={transactions} />
        </div>
    )
}

export default App;

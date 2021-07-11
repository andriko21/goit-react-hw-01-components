import React from "react";
import Profile from "./components/Profile/Profile.js";
import user from './data/user.json';
import Statistics from "./components/Statistics/Statistics.js";
import statisticalData from "./data/statistical-data.json";
import FriendList from "./components/FriendList/FriendList.js";
import friends from "./data/friends.json";
import TransactionsHistory from "./components/Transactions/Transactions.js";
import transactions from "./data/transactions.json";
// import './App.css';
const App = () => {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload Stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionsHistory items={transactions} />
    </div>
  );
};

export default App;

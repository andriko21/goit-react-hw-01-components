import React from "react";
import Profile from './hw-01/components/Profile';
// import user from './hw-01/data/user.json';
import Statistics from "./hw-02/components/Statistics";
import statisticalData from './hw-02/data/statistical-data.json';
// import './App.css';
const App = ({name,tag,location,avatar,stats}) => {
  return(<div>
    <Profile
      name={name}
      tag={tag}
      location={location}
      avatar={avatar}
      stats={stats}
    />
     <Statistics title="Upload Stats" stats={statisticalData} />
  </div>)
};

export default App;

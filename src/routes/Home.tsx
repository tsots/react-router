// import React from "react";
import Users from "../../data/users.json";

const Home = () => {
  console.log(Users.results);
  return (
    <div>
      Home
      {Users.results.map((user) => (
        <li key={user.id}>{user.first}</li>
      ))}
    </div>
  );
};

export default Home;

// import React from "react";
import Users from "../../data/users.json";

const Home = () => {
  console.log(Users.results);
  return (
    <div>
      Home
      {Users.results.map((user) => (
        <ul>
          <li key={user.id}>
            {user.first} <span>{user.last}</span>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Home;

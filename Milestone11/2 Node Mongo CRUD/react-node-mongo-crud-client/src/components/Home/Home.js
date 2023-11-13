import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleUserDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      console.log("Deleteing ", id);
      const url = `http://localhost:5000/user/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.log(data);
            const remaining = users.filter((user) => user._id !== id); // jei id te match korbe seta bade baki gula dekhabe karon oita to delete hobe eta users dependency diyeo slv korte pari..
            setUsers(remaining);
          }
        });
    }
  };
  return (
    <div>
      <h2>Available Users {users.length}</h2>
      {users.map((user) => (
        <li key={user._id}>
          {user.name}::{user.email}
          <Link to={`/update/${user._id}`}>
            <button>Update</button>
          </Link>
          {/* particular user er e jabe id wise then udpate korbe  */}
          <button onClick={() => handleUserDelete(user._id)}>X</button>
          {/* user id sent kore dissi parameter e delete korar jonno  */}
        </li>
      ))}
    </div>
  );
};

export default Home;

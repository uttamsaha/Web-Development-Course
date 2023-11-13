import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateUser = () => {
  const { id } = useParams(); //getting id from url
  const [user, setUser] = useState({});
  //getting user info reading sinlge by id
  useEffect(() => {
    const url = `http://localhost:5000/user/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const handleUpdateUser = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;

    const updatedUser = { name, email };

    //update data
    const url = `http://localhost:5000/user/${id}`;
    fetch(url, {
      method: "PUT", //put used for update
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("user added successfully");
        event.target.reset(); // from er value reset or empty korbe..
      });
  };
  return (
    <div>
      <h2>Updating user...{user.name}</h2>
      <form onSubmit={handleUpdateUser}>
        <input type="text" name="name" id="" required placeholder="Name.." />{" "}
        <br />
        <input
          type="email"
          name="email"
          id=""
          placeholder="Email..."
          required
        />
        <br />
        <input type="submit" value="Update User" />
      </form>
    </div>
  );
};

export default UpdateUser;

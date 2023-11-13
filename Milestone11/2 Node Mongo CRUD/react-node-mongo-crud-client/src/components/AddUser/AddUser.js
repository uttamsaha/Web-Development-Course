import React from "react";

const AddUser = () => {
  const handleAddUser = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;

    const user = { name, email };

    //send data to server
    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("user added successfully");
        event.target.reset(); // from er value reset or empty korbe..
      });
  };
  return (
    <div>
      <h2>Please add a new User</h2>
      <form onSubmit={handleAddUser}>
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
        <input type="submit" value="Add User" />
      </form>
    </div>
  );
};
export default AddUser;

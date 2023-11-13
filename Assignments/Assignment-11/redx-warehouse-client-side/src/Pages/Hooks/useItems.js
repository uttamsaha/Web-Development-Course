import { async } from "@firebase/util";
import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const useItems = () => {
  const [items, setItems] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    const getMyItems = async () => {
      const email = user.email;
      const url = `https://polar-lowlands-06321.herokuapp.com/items?email=${email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setItems(data);
      } catch (error) {
        console.log(error);
        if (error.response.status === 403 || error.response.status === 401) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getMyItems();
  }, [items, user.email, navigate]);
  return [items, setItems];
};
export default useItems;

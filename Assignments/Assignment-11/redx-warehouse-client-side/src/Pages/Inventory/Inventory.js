import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useProduct from "../Hooks/useProduct";
import { HiArrowRight } from "react-icons/hi";
import "./Inventory.css";
import swal from "sweetalert";

const Inventory = () => {
  const { id } = useParams();
  const [product] = useProduct(id);
  const navigate = useNavigate();
  const manageInventories = () => {
    navigate("/manageInventories");
  };

  //handle stock add
  const productQuantity = product.quantity;
  console.log("product quantity:", productQuantity);

  //handle update
  const handleUpdate = (event) => {
    event.preventDefault();
    const restockQuantity = event.target.restock.value;
    const updatedRestock =
      parseInt(productQuantity) + parseInt(restockQuantity);
    const updatedProductQuantity = updatedRestock.toString();
    console.log("update restock:", updatedProductQuantity);
    const updateQuantity = { updatedProductQuantity };

    //update data
    const url = `https://polar-lowlands-06321.herokuapp.com/products/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setProduct(product);
        swal("Quantity Updated!", "Quantity Successfully Updated!", "success");
        event.target.reset();
      });
  };

  //hande delivered
  const handleDelivered = () => {
    let quantity = 0;
    if (productQuantity > 0) {
      quantity = parseInt(productQuantity) - 1;
    }

    const updatedProductQuantity = quantity.toString();
    console.log("update restock:", updatedProductQuantity);
    const updateQuantity = { updatedProductQuantity };

    //update data
    const url = `https://polar-lowlands-06321.herokuapp.com/products/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setProduct(product);
        if (productQuantity > 0) {
          swal("Item Delivered!", "Quantity Successfully Updated!", "success");
        } else if (productQuantity === "0") {
          swal(
            "You have No Item to be deleted!",
            "Please add some item first!",
            "error"
          );
        }
      });
  };
  return (
    <div className="product-information">
      <img src={product.img} alt="" />
      <p>
        <b>Product ID: </b> {product._id}
      </p>
      <h5>
        <b>Product Name:</b> {product.name}
      </h5>
      <p>
        <b>Price: </b> {product.price}৳
      </p>
      <small>{product.description}</small>
      <p>
        <b>Quantity: </b>
        {product.quantity === "0" ? (
          <button className="btn btn-danger btn-sm">Sold Out</button>
        ) : (
          product.quantity
        )}
      </p>
      <p>
        <b>Supplier name:</b> {product.supplierName}
      </p>
      <button onClick={handleDelivered} className="delivered-btn">
        Delivered
      </button>
      <button onClick={manageInventories} className="delivered-btn">
        Manage Inventories <HiArrowRight />
      </button>
      <form onSubmit={handleUpdate}>
        <label htmlFor="restock">
          <b>Restock the item:</b>
        </label>
        <input
          className="item-quantity form-control"
          type="number"
          name="restock"
          id=""
          placeholder="Enter number of items"
        />
        <input
          className="btn btn-dark mt-3 mb-5"
          type="submit"
          value="Add Quantity"
        />
      </form>
    </div>
  );
};

export default Inventory;

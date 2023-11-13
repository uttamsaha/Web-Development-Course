import React from "react";
import "./SingleInventoryItem.css";
import { AiOutlineDelete } from "react-icons/ai";
import useProducts from "../../Hooks/useProducts";
import swal from "sweetalert";

const SingleInventoryItem = ({ product }) => {
  const { _id, name, img, description, quantity, supplierName, price } =
    product;
  const [products, setProducts] = useProducts(true);

  const handleDelete = (id) => {
    //sweet alert
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Your Item has been deleted successfully!", {
          icon: "success",
        });
        const url = `https://polar-lowlands-06321.herokuapp.com/products/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const remaining = products.filter((product) => product._id !== id);
            setProducts(remaining);
          });
      } else {
        swal("Item not deleted. You cancelled.");
      }
    });
  };
  return (
    <div data-aos="fade-up" className="outer-product">
      <div className="product">
        <img width={360} height={313} src={img} alt="" />
        <div className="product-info">
          <h6>{name}</h6>
          <small>
            <b>Price:</b> {price}৳
          </small>{" "}
          <br />
          <small>{description.slice(0, 140)}</small>
          <p>
            <b>Quantity:</b> {quantity}
          </p>
          <p>
            <b>Supplier:</b> {supplierName}
          </p>
        </div>
        <button onClick={() => handleDelete(_id)} className="stock-btn">
          Delete This Item <AiOutlineDelete />
        </button>
      </div>
    </div>
  );
};

export default SingleInventoryItem;

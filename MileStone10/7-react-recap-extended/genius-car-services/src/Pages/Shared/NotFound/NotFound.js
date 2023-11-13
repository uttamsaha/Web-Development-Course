import React from "react";
import notFoundImage from '../../../images/notFound.gif';
import './NotFound.css'
const NotFound = () => {
    return (
      <div className="notFound">
        <img src={notFoundImage} alt="" />
      </div>
    );
}
export default NotFound;
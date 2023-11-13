import React from "react";

const Expert = ({expert}) => {
    const {name, img} = expert;
  return (
    <div className="g-5 gy-5col-sm-12 col-md-6 col-lg-4">
      <div className="card">
        <img src={img} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti,
            iusto.
          </p>
          <a href="#" className="btn btn-dark">
            Go Somewhere
          </a>
        </div>
      </div>
    </div>
  );
};
export default Expert;

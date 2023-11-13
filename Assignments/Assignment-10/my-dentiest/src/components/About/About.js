import React from "react";
import image from "../../Images/uttam.jpg";

const About = () => {
  return <div style={{'backgroundColor': '#FAF9F6'}} className="about-container p-5">
      <div className="container">
          <div className="d-flex flex-column align-items-center mb-3">
              <img className="img-fluid rounded" width={320} src={image} alt="" />
              <h2 className="m-3">Uttam Kumar Saha</h2>
          </div>
          <div>
              <h4>My Goal in Next 3 Months: </h4>
              <p>Hi there! It's me Uttam Kumar Saha. Currently, I am doing my B. Sc in CSE at Southeast University. Currently I am learning react and firebase. My goal in the next 3 month is to become a full stack web developer and I want to get my first job as a Junior Web Developer at any company. I want to become successful web developer. In the next few month I will learn about Mongo DB, MySQL, No SQL, PHP, Node JS, Express JS and backend related works. I will be regular to achieve all of these knowledge. In the next few month I will also try to improve my programming skills. I will try to solve some problems daily which can enrich me in programming more. That's all about me what I am going to do & my goal in the next 3 months. Thank you so much. Keep me on your prayer.</p>
          </div>
      </div>
  </div>;
};

export default About;

import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer>
      <p className="text-center mt-5">
        <small>Copyright ©{year}</small>
      </p>
    </footer>
  );
};
export default Footer;

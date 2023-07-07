import React from "react";

const Footer = () => {
  return (
    <div className="h-20 border-t flex item-center justify-between">
      <div>
        <p className="text-[10px]">
          All rights reserved &copy; {new Date().getFullYear()}
        </p>
      </div>
      <div>
        <p className="text-[12px]">
          For understanding typescript, check out whole project{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;

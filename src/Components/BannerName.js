import React from "react";

function BannerName({ name, discount, link }) {
  return(
    <div className="bannerContent">
        <h3 className="">Hello {name}</h3>
        <p className="">Get free discount for every <span className="">${discount}</span> purchase </p>
        <a className="" href={link}>Learn More</a>
    </div>
  );
}

export default BannerName;

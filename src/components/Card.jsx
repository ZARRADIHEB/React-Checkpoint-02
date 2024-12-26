import React from "react";
import Name from "./Name";
import Description from "./Description";
import Price from "./Price";
import Image from "./Image";

function Card({ product, children }) {
  return (
    <div className="text-center vh-100 d-flex justify-content-center align-items-center flex-column bg-dark text-white ">
      <div className="wrapper h-fit-content">
        <Name name={product.name} />
        <Description desc={product.desc} />
        <Price price={product.price} />
        <Image src={product.imgUrl} />
        {children}
      </div>
    </div>
  );
}

export default Card;

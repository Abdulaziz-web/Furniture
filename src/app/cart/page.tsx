"use client";
import React from "react";
import Delete from "../images/delete";
import Product from "../components/product";

const page = () => {
  const getedProducts = JSON.parse(localStorage.getItem("products"));
  return (
      <div className=" mb-[100px]">
        <div className="flex justify-center items-center relative w-full h-[335px]">
          <img className="w-full absolute  top-[0px]" src="/Main.png" alt="" />
          <p className=" absolute top-[150px] text-[50px] font-bold">Cart</p>
        </div>
        <div>
          <div className="grid grid-rows-2 w-[917px] h-[200px] gap-y-[62px]">
            <div className="flex justify-around bg-[#F9F1E7] ">
              <div className=" h-[55px] flex items-center justify-around">
                Product
              </div>
              <div className=" h-[55px] flex items-center justify-center">
                Price
              </div>
              <div className="h-[55px] flex items-center justify-center">
                Quantity
              </div>
              <div className=" h-[55px] flex items-center justify-around">
                Subtotal
              </div>
            </div>
              {getedProducts?.products.map((item) => (
                <Product
                  title={item.title}
                  id={item._id}
                  image={item.image}
                  price={item.price}
                ></Product>
              ))}
          </div>
        </div>
      </div>
  );
};

export default page;

"use client";
import React from "react";
import Star from "../images/star";
import HalfStar from "../images/half-star";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { addProduct } from "../redux/reducer/setStorageSlice";
import { addCount } from "../redux/reducer/setStorageSlice";

interface IPromiseData {
  image: string;
  price: number;
  title: string;
  size: string;
  color: string;
  id: string;
  __v: number;
}
const singleProduct = ({
  image,
  price,
  title,
  size,
  color,
  id,
  __v,
}: IPromiseData) => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);
  const main = localStorage.getItem("products");
  const main2 = JSON.parse(main);

  const onClick = () => {
    const isReturn = main2?.products?.filter((item) => item.id == id);
    if (isReturn) {
      if (isReturn[0]?.id == id) {
        dispatch(addCount(isReturn[0]?.id));
      } else {
        dispatch(addProduct({ image, price, title, size, color, id, __v }));
      }
    } else {
      dispatch(addProduct({ image, price, title, size, color, id, __v }));
    }
  };
  return (
    <div className="flex container gap-x-[80px] justify-center">
      <div className=" w-[423px] h-[500px]">
        <img className="w-[481px] h-[391px] object-cover" src={image} alt="" />
      </div>
      <div className="flex flex-col gap-y-[10px]">
        <p className=" text-[42px]">{title}</p>
        <p className=" text-[24px] font-medium text-[#9F9F9F]">Rs {price}</p>
        <div className="flex">
          <Star></Star>
          <Star></Star>
          <Star></Star>
          <Star></Star>
          <HalfStar></HalfStar>
        </div>
        <p className="w-[424px]">
          Setting the bar as one of the loudest speakers in its class, the
          Kilburn is a compact, stout-hearted hero with a well-balanced audio
          which boasts a clear midrange and extended highs for a sound.
        </p>
        <div>
          <p className=" text-[#9F9F9F]">Size</p>
          <p>{size}</p>
        </div>
        <div>
          <p className=" text-[#9F9F9F]">Color</p>
          <p>{color}</p>
        </div>
        <div className="flex gap-x-[20px]">
          <div className="flex justify-around w-[123px] h-[64px] border-[1px] border-[#9f9f9f] rounded-[10px]">
            <button>+</button>
            <p></p>
            <button>-</button>
          </div>
          <button
            onClick={onClick}
            className=" border-[1px] border-black w-[215px] h-[64px] rounded-[10px]"
          >
            Add To Cart
          </button>
          <button className=" border-[1px] border-black w-[215px] h-[64px] rounded-[10px]">
            + Compare
          </button>
        </div>
        <div className=" bg-[#D9D9D9] w-[605px] h-[1px] mt-[40px] mb-[40px]"></div>
        <div>
          <p className=" text-[#9F9F9F]">SKU : SS001</p>
          <p className=" text-[#9F9F9F]">Category : Sofas</p>
          <p className=" text-[#9F9F9F]">Tags : {title}, Home, Shop</p>
          <p className=" text-[#9F9F9F]">Share :</p>
        </div>
      </div>
    </div>
  );
};

export default singleProduct;

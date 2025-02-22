"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../redux/reducer/setStorageSlice";

interface IProps {
  image: string;
  title: string;
  price: number;
  id:string
}

const cartProduct = ({ image, title, price,id }: IProps) => {  
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(deleteProduct(id))
  };
  return (
    <div className="flex gap-x-[26px]">
      <img className="w-[114px] h-[105px]" src={image} alt="" />
      <div className="flex items-center">
        <div className="flex flex-col justify-center w-[200px]">
          <p>{title}</p>
          <p>
            1 X{" "}
            <span className=" text-[#B88E2F] text-[12px] font-medium">
              Rs {price}
            </span>
          </p>
        </div>
        <svg
          onClick={onClick}
          width="20.000000"
          height="20.000000"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <desc>Created with Pixso.</desc>
          <defs />
          <path
            id="Vector"
            d="M10 0C4.47 0 0 4.47 0 10C0 15.52 4.47 20 10 20C15.52 20 20 15.52 20 10C20 4.47 15.52 0 10 0ZM13.37 7.91C13.53 7.74 13.62 7.51 13.62 7.27C13.62 7.03 13.52 6.8 13.35 6.64C13.19 6.47 12.96 6.37 12.72 6.37C12.48 6.37 12.25 6.46 12.08 6.63L10 8.71L7.91 6.63C7.83 6.54 7.73 6.47 7.62 6.42C7.5 6.37 7.39 6.35 7.26 6.35C7.14 6.35 7.02 6.37 6.91 6.42C6.8 6.46 6.7 6.53 6.61 6.61C6.53 6.7 6.46 6.8 6.41 6.91C6.37 7.02 6.35 7.14 6.35 7.26C6.35 7.39 6.37 7.5 6.42 7.62C6.47 7.73 6.54 7.83 6.62 7.91L8.71 10L6.62 12.08C6.54 12.16 6.47 12.26 6.42 12.37C6.37 12.49 6.35 12.6 6.35 12.73C6.35 12.85 6.37 12.97 6.41 13.08C6.46 13.19 6.53 13.29 6.61 13.38C6.7 13.46 6.8 13.53 6.91 13.57C7.02 13.62 7.14 13.64 7.26 13.64C7.39 13.64 7.5 13.62 7.62 13.57C7.73 13.52 7.83 13.45 7.91 13.37L10 11.28L12.08 13.37C12.25 13.53 12.48 13.62 12.72 13.62C12.96 13.62 13.19 13.52 13.35 13.35C13.52 13.19 13.62 12.96 13.62 12.72C13.62 12.48 13.53 12.25 13.37 12.08L11.28 10L13.37 7.91Z"
            fill="#9F9F9F"
            fillOpacity="1.000000"
            fillRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default cartProduct;

"use client";
import React from "react";
import Delete from "../images/delete";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../redux/reducer/setStorageSlice";

interface IProps {
  image: string;
  title: string;
  price: number;
  id: string;
}

const product = ({ image, title, price, id }: IProps) => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(deleteProduct(id));
  };
  return (
    <>
      <div className="flex justify-between w-[917px] mb-[40px]">
        <div className="h-[55px] flex items-center justify-center gap-x-[20px]">
          <div className="w-[105px] h-[105px] rounded-[10px]">
            <img src={image} alt="" />
          </div>

          <p>{title}</p>
        </div>
        <div className="h-[55px] flex items-center justify-center">
          <p>Rs {price}</p>
        </div>
        <div className="h-[55px] flex items-center justify-center">
          <p>1</p>
        </div>
        <div className="h-[55px] flex items-center justify-center">
          <p>1</p>
        </div>
        <div className="h-[55px] flex items-center justify-center">
          <p>{price}</p>
        </div>
        <div className="h-[55px] flex items-center justify-center">
          <div onClick={onClick}>
            <Delete></Delete>
          </div>
        </div>
      </div>
    </>
  );
};

export default product;

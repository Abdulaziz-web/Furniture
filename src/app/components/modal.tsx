"use client";
import { Modal } from "antd";
import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import CartProduct from "./cart-product";
import Link from "next/link";

const modal = () => {
  const main = localStorage.getItem("products");
  const main2 = JSON.parse(main);
  const dispatch = useDispatch();
  const cartProducts = useSelector(
    (state: RootState) => state.products.products
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <svg
        onClick={showModal}
        width="24.530090"
        height="22.058228"
        viewBox="0 0 24.5301 22.0582"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <desc>Created with Pixso.</desc>
        <defs />
        <path
          id="Vector"
          d="M23.56 15.63L7.27 15.63L8.09 13.97L21.68 13.94C22.14 13.94 22.53 13.61 22.61 13.16L24.49 2.63C24.54 2.35 24.47 2.07 24.29 1.85C24.2 1.75 24.09 1.66 23.96 1.6C23.84 1.54 23.7 1.51 23.56 1.51L6.28 1.46L6.13 0.76C6.04 0.32 5.64 0 5.18 0L0.96 0C0.7 0 0.46 0.1 0.28 0.28C0.1 0.46 0 0.7 0 0.96C0 1.22 0.1 1.46 0.28 1.64C0.46 1.82 0.7 1.93 0.96 1.93L4.4 1.93L5.05 4.99L6.64 12.69L4.59 16.02C4.49 16.17 4.42 16.34 4.41 16.52C4.39 16.69 4.43 16.87 4.51 17.03C4.67 17.36 5 17.56 5.37 17.56L7.09 17.56C6.72 18.05 6.52 18.64 6.52 19.25C6.52 20.8 7.78 22.05 9.33 22.05C10.88 22.05 12.14 20.8 12.14 19.25C12.14 18.64 11.93 18.04 11.57 17.56L15.98 17.56C15.61 18.05 15.41 18.64 15.41 19.25C15.41 20.8 16.67 22.05 18.22 22.05C19.77 22.05 21.03 20.8 21.03 19.25C21.03 18.64 20.82 18.04 20.46 17.56L23.56 17.56C24.09 17.56 24.53 17.13 24.53 16.6C24.52 16.34 24.42 16.1 24.24 15.91C24.06 15.73 23.81 15.63 23.56 15.63ZM6.68 3.36L22.43 3.41L20.88 12.05L8.52 12.07L6.68 3.36ZM9.33 20.11C8.85 20.11 8.47 19.72 8.47 19.25C8.47 18.77 8.85 18.38 9.33 18.38C9.81 18.38 10.19 18.77 10.19 19.25C10.19 19.48 10.1 19.7 9.94 19.86C9.78 20.02 9.56 20.11 9.33 20.11ZM18.22 20.11C17.74 20.11 17.36 19.72 17.36 19.25C17.36 18.77 17.74 18.38 18.22 18.38C18.7 18.38 19.08 18.77 19.08 19.25C19.08 19.48 18.99 19.7 18.83 19.86C18.67 20.02 18.45 20.11 18.22 20.11Z"
          fill="#000000"
          fillOpacity="1.000000"
          fillRule="nonzero"
        />
      </svg>
      <Modal
        className=" absolute right-0"
        footer={null}
        open={isModalOpen}
        onCancel={handleCancel}
        onOk={handleOk}
      >
        {main2?.products?.map((item) => (
          <CartProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
          ></CartProduct>
        ))}
        <Link href={"/cart"}>
          <button className="w-[100px] h-[30px] border-[2px] border-black rounded-[5px]">
            Cart
          </button>
        </Link>
      </Modal>
    </>
  );
};

export default modal;

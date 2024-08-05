import React from "react";
import Link from "next/link";

const footer = () => {
  return (
    <div className="flex gap-x-[100px] container pt-[100px] pb-[100px]">
      <div className=" flex flex-col gap-y-[50px]">
        <p className=" text-[24px] font-bold">Furniro</p>
        <p className="w-[285px] text-[#9F9F9F]">
          400 University Drive Suite 200 Coral Gables, FL 33134 USA
        </p>
      </div>
      <div className="flex flex-col gap-y-[50px]">
        <p className=" text-[#9F9F9F]">Links</p>
        <div className="flex flex-col gap-y-[46px]">
          <Link href={"/"}>Home</Link>
          <Link href={"/shop"}>Shop</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/contact"}>Contact</Link>
        </div>
      </div>
      <div className="flex flex-col gap-y-[50px]">
        <p className=" text-[#9F9F9F]">Help</p>
        <div className="flex flex-col gap-y-[46px]">
          <p>Payment Options</p>
          <p>Returns</p>
          <p>Privacy Policies</p>
        </div>
      </div>
      <div className="flex flex-col gap-y-[50px]">
        <p className=" text-[#9F9F9F]">Newsletter</p>
        <form>
          <input value={"Enter Your Email Address"} type="text" />
          <button>SUBSCRIBE</button>
        </form>
      </div>
    </div>
  );
};

export default footer;

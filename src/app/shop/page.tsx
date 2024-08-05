import React from "react";
import Filter from "../images/filter";
import { getProductData } from "../service/products";
import Link from "next/link";

const Page = async () => {
  interface productSingle {
    _id: string;
    title: string;
    subtitle: string;
    image: string;
    description: string;
    rate: number;
    price: number;
    size: string;
    color: string;
    __v: number;
  }
  const product = await getProductData();
  return (
    <div>
      <div className="flex justify-center items-center relative w-full h-[335px]">
        <img className="w-full absolute  top-[0px]" src="/Main.png" alt="" />
        <p className=" absolute top-[150px] text-[50px] font-bold">Shop</p>
      </div>
      <div className=" w-full">
        <Filter></Filter>
      </div>
      <div className="grid grid-cols-4 gap-x-[32px] gap-y-[40px] container">
        {product.map((item: productSingle) => (
          <Link
            key={item._id}
            href={`http://localhost:3000/single-product/${item._id}`}
          >
            <div>
              <img className="w-[285px] h-[301px]" src={item.image} alt="" />
              <div className="bg-[#F4F5F7] flex flex-col gap-y-[8px]">
                <p className=" font-[24px] font-semibold">{item.title}</p>
                <p className="text-[#B0B0B0]">{item.subtitle}</p>
                <div className="flex gap-x-[16px]">
                  <p className=" font-[20px] font-semibold">Rp {item.price}</p>
                  <p className="font-[16px] text-[#B0B0B0] line-through">
                    Rp {(item.price / 100) * 70}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;

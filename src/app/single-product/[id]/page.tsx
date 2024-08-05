import React from "react";
import { getSingleProductData } from "@/app/service/single-product";
import Star from "@/app/images/star";
import HalfStar from "@/app/images/half-star";
import Link from "next/link";
import { getProductData } from "@/app/service/products";
import SingleProduct from "@/app/components/single-product";

const Page = async ({ params }: { params: string[] }) => {
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
  const productData: productSingle = await getSingleProductData(params.id);
  const productAll: productSingle[] = await getProductData();
  const product = productAll.slice(3);
  return (
    <div>
      {/* <div className="flex container gap-x-[80px] justify-center">
        <div className=" w-[423px] h-[500px]">
          <img
            className="w-[481px] h-[391px] object-cover"
            src={productData.image}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-y-[10px]">
          <p className=" text-[42px]">{productData.title}</p>
          <p className=" text-[24px] font-medium text-[#9F9F9F]">
            Rs {productData.price}
          </p>
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
            <p>{productData.size}</p>
          </div>
          <div>
            <p className=" text-[#9F9F9F]">Color</p>
            <p>{productData.color}</p>
          </div>
          <div className="flex gap-x-[20px]">
            <div className="flex justify-around w-[123px] h-[64px] border-[1px] border-[#9f9f9f] rounded-[10px]">
              <button>+</button>
              <p></p>
              <button>-</button>
            </div>
            <button
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
            <p className=" text-[#9F9F9F]">
              Tags : {productData.title}, Home, Shop
            </p>
            <p className=" text-[#9F9F9F]">Share :</p>
          </div>
        </div>
      </div> */}
      <SingleProduct
        title={productData.title}
        image={productData.image}
        color={productData.color}
        price={productData.price}
        size={productData.size}
        id={productData._id}
        __v={productData.__v}
      ></SingleProduct>
      <div className="container flex flex-col items-center gap-y-[37px]">
        <p className=" text-[25px] font-medium">Description</p>
        <p className="w-[1026px] text-[#9F9F9F]">
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
          portable active stereo speaker takes the unmistakable look and sound
          of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <p className="w-[1026px] text-[#9F9F9F]">
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boasts a clear midrange and extended
          highs for a sound that is both articulate and pronounced. The analogue
          knobs allow you to fine tune the controls to your personal preferences
          while the guitar-influenced leather strap enables easy and stylish
          travel.
        </p>
        <div className="flex gap-x-[32px]">
          <div className="bg-[#D9D9D9] w-[605px] h-[348px] flex justify-center items-center">
            <img src="/Cloud.png" alt="" />
          </div>
          <div className="bg-[#D9D9D9] w-[605px] h-[348px] flex justify-center items-center">
            <img src="/Cloud.png" alt="" />
          </div>
        </div>
        <div className=" bg-[#D9D9D9] w-full h-[1px] mt-[40px] mb-[40px]"></div>
      </div>
      <div className=" container flex flex-col items-center ">
        <p className=" text-[36px] font-medium">Related Products</p>
        <div className="flex gap-x-[33px]">
          {product.map((item, index) => (
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
                    <p className=" font-[20px] font-semibold">
                      Rp {item.price}
                    </p>
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
    </div>
  );
};

export default Page;

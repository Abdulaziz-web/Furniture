import { getBannersData } from "./service/banners";
import { getProductData } from "./service/products";
import { revalidateTag } from "next/cache";
import Link from "next/link";

export default async function Home() {
  try {
    revalidateTag("product");
    revalidateTag("category");
  } catch (error) {}
  interface category {
    _id: string;
    name: string;
    image: string;
  }
  interface product {
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
  const banners = await getBannersData();
  const products = await getProductData();

  return (
    <main>
      <img className=" w-full mb-[20px]" src="/Banner.png" alt="" />
      <div className="container flex flex-col  items-center">
        <p className="font-bold text-[25px]">Browse The Range</p>
        <p className=" text-[#666666] line-through">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="flex gap-x-10 container justify-center mb-[40px]">
        {banners.map((item: category) => (
          <div>
            <img
              className="w-[381px] h-[480px] mb-[20px] object-fill"
              src={item.image}
              alt=""
            />
            <p className=" text-center text-[24px] font-semibold">
              {item.name}
            </p>
          </div>
        ))}
      </div>
      <div className=" container flex flex-col gap-y-[20px] mb-[20px] items-center">
        <p className=" text-[40px] font-bold text-center">Our Products</p>
        <div className="grid grid-cols-4 gap-[32px] bg-white">
          {products.map((item: product) => (
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
        <button className="w-[245px] h-[48px] border-[1px] border-[#B88E2F]">Show More</button>
      </div>
      <div className=" container flex items-center mb-[30px]">
        <div className="flex flex-col gap-y-[10px]">
          <p className=" text-[40px] font-bold">
            50+ Beautiful rooms inspiration
          </p>
          <p className="text-[16px] text-[#616161]">
            Our designer already made a lot of beautiful <br /> prototipe of
            rooms that inspire you
          </p>
          <button className=" text-white bg-[#B88E2F] w-[178px] h-[48px]">
            Explore More
          </button>
        </div>
        <div className="flex gap-x-[24px] mb-[60px]">
          <img src="/Rectangle 24.png" alt="" />
          <img src="/Rectangle 25.png" alt="" />
        </div>
      </div>
      <div>
        <div className=" container">
          <img className="" src="/Share.png" alt="" />
        </div>
      </div>
    </main>
  );
}

import React from "react";

const page = () => {
  return (
    <div>
      <div  className="flex justify-center items-center relative w-full h-[335px] mb-[100px]">
        <img className="w-full absolute  top-[0px]" src="/Main.png" alt="" />
        <p className=" absolute top-[150px] text-[50px] font-bold">Cart</p>
      </div>
      <div className="flex container justify-center gap-x-[100px]">
        <div className="flex flex-col gap-y-[32px]">
          <p className=" text-[36px] font-semibold">Billing details</p>
          <div className="flex gap-x-[30px]">
            <div className="flex flex-col">
              First Name
              <input
                className="w-[211px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px]"
                type="text"
              />
            </div>
            <div className="flex flex-col">
              Last Name
              <input
                className="w-[211px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px]"
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-[22px]">
            Company Name (Optional)
            <input
              className=" h-[75px] w-[453px] border-[1px] rounded-[16px] border-[#9F9F9F]"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-y-[22px]">
            Country / Region
            <input
              className=" h-[75px] w-[453px] border-[1px] rounded-[16px] border-[#9F9F9F]"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-y-[22px]">
            Street address
            <input
              className=" h-[75px] w-[453px] border-[1px] rounded-[16px] border-[#9F9F9F]"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-y-[22px]">
            Town / City
            <input
              className=" h-[75px] w-[453px] border-[1px] rounded-[16px] border-[#9F9F9F]"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-y-[22px]">
            Province
            <input
              className=" h-[75px] w-[453px] border-[1px] rounded-[16px] border-[#9F9F9F]"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-y-[22px]">
            ZIP code
            <input
              className=" h-[75px] w-[453px] border-[1px] rounded-[16px] border-[#9F9F9F]"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-y-[22px]">
            Phone
            <input
              className=" h-[75px] w-[453px] border-[1px] rounded-[16px] border-[#9F9F9F]"
              type="text"
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-[30px] w-[528px]">
          <div>
            <div className="flex justify-between">
              <p>Product</p> <p>Subtotal</p>
            </div>
            <div className="flex justify-between">
              <p>product</p> <p> Rs 250,000.00 </p>
            </div>
            <div className="flex justify-between">
              <p>Total</p> <p>Rs 250,000.00</p>
            </div>
          </div>
          <div className="w-[527px] h-[1px] bg-[#D9D9D9]"></div>
          <div className="flex flex-col gap-y-[20px]">
            <div className="flex items-center gap-x-[15px]">
              <div className=" w-[14px] h-[14px] bg-[#000000] rounded-full"></div>
              <p>Direct Bank Transfer</p>
            </div>
            <p className=" text-[#9F9F9F]">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
            <div>
              <div className="flex items-center  gap-x-[15px]">
                <div className="w-[14px] h-[14px] rounded-full border-[1px] border-[#9F9F9F]"></div>
                <p className=" text-[#9F9F9F]">Direct Bank Transfer</p>
              </div>
              <div className="flex items-center  gap-x-[15px]]">
                <div className="w-[14px] h-[14px] rounded-full border-[1px] border-[#9F9F9F]"></div>
                <p className=" text-[#9F9F9F]">Cash On Delivery</p>
              </div>
            </div>
            <p>
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our privacy policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

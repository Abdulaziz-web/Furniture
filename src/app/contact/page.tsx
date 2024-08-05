import React from "react";
import Addres from "../images/addres";
import Phone from "../images/phone";
import Clock from "../images/clock";
import { Button } from "antd";

const page = () => {
  return (
    <div>
      <div className="flex justify-center items-center relative w-full h-[335px]">
        <img className="w-full absolute  top-[0px]" src="/Main.png" alt="" />
        <p className=" absolute top-[150px] text-[50px] font-bold">Cart</p>
      </div>
      <div className=" container flex flex-col items-center gap-y-[50px]">
        <p className=" text-[36px] font-semibold">Get In Touch With Us</p>
        <p className=" text-center text-[#9F9F9F]">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do
          Not Hesitate!
        </p>
        <div className="flex gap-x-[100px]">
          <div className=" flex flex-col gap-y-[20px]">
            <div className="flex gap-x-[20px]">
              <Addres></Addres>
              <div>
                <p className=" text-[24px] font-medium">Address</p>
                <p className="w-[212px] text-center">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>
            <div className="flex gap-x-[20px]">
              <Phone></Phone>
              <div>
                <p className=" text-[24px] font-medium">Phone</p>
                <p className=" text-center">
                  Mobile: +(84) 546-6789 <br /> Hotline: +(84) 456-6789
                </p>
              </div>
            </div>
            <div className="flex gap-x-[20px]">
              <Clock></Clock>
              <div>
                <p className=" text-[24px] font-medium">Working Time</p>
                <p className="w-[212px]">
                  Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-[36px]">
            <div>
              <p>Your name</p>
              <input className="w-[526px] h-[75px]" type="text" />
            </div>
            <div>
              <p>Email address</p>
              <input className="w-[526px] h-[75px]" type="text" />
            </div>
            <div>
              <p>Subject</p>
              <input className="w-[526px] h-[75px]" type="text" />
            </div>
            <div>
              <p>Message</p>
              <input className="w-[526px] h-[120px]" type="text" />
            </div>
            <button className="w-[237px] h-[55px] text-white bg-[#B88E2F]">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

"use client";
import React from "react";
import Image from "next/image";
import { Profile } from "./image/header-img/profile";
import { Loop } from "./image/header-img/loop";
import { Heart } from "./image/header-img/heart";
import Link from "next/link";
// import { Modal } from "antd";
import { useState } from "react";
import Modal from "../components/modal";

const Header: React.FC = () => {
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
    <div className="flex justify-around  mb-[20px]">
      <div className="flex">
        <Image src={"/Logo.png"} width={50} height={32} alt=""></Image>
        <p className="text-[34px]">Furniro</p>
      </div>
      <ul className="flex gap-x-[75px] text-[16px] font-medium font-poppins">
        <Link href={"/"}>Home</Link>
        <Link href={"/shop"}>Shop</Link>
        <Link href={"/"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
      </ul>
      <div className="flex gap-x-[47px]">
        <Profile></Profile>
        <Loop></Loop>
        <Heart></Heart>
    
        <Modal></Modal>
      </div>
    </div>
  );
};

export default Header;

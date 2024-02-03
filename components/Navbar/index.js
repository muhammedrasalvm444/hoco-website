"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { StyledButton } from "../StyledButton";
import { FaLongArrowAltRight } from "react-icons/fa";
import SearchBox from "../SearchBox";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const array = ["Home", "Pages", "Cources", "Shop", "Blog", "Contact Us"];
  console.log("mdmd", isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full shadow-md bg-textWhite">
      <div className="items-center justify-between px-6 py-4 bg-white lg:flex">
        <div className="flex items-center relative w-24 md:w-[136px] lg:w-[136px] h-12 lg:h-[36px] md:h-[36px]  cursor-pointer hover:transition-transform duration-700 ease-out transform hover:scale-110">
          <Image
            alt="11d logo"
            src="/images/main-logo.svg.png"
            layout="fill"
            objectFit="contain"
            quality={100}
            className=""
          />
        </div>

        <div
          className="absolute text-3xl cursor-pointer right-8 top-6 lg:hidden"
          onClick={toggleMenu}
        >
          {!isMenuOpen ? <IoIosMenu /> : <IoMdClose />}
        </div>
        <ul
          className={`absolute pb-12 bg-white lg:flex lg:items-center lg:pb-0 lg:static lg:z-auto z-[-1] lg:pl-auto pl-9 lg:w-auto w-full transition-all ease-in duration-500 ${
            isMenuOpen ? "top-20 opacity-100" : "top-[-490px] lg:opacity-100"
          }`}
        >
          {array.map((item) => (
            <li className="ml-3 text-xl my-7 lg:ml-6 lg:my-0">
              <Link href={"/"}>
                <p className="text-black duration-500 hover:text-orangeColor">
                  {item}
                </p>
              </Link>
            </li>
          ))}
          <div className="items-center justify-center gap-2 ml-2 lg:flex md:gap-0">
            <SearchBox />
            <StyledButton
              text={"Enroll Now"}
              bgColor={"blueColor"}
              arrow={<FaLongArrowAltRight className="text-textWhite" />}
            />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

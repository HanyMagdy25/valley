import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import logoImage from "../assets/logo.png";
import Image from "next/image";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group text-lg`}>
      {title}

      <span
        className={`inline-block h-[1px] bg-dark absolute left-0 -bottom-0.5 
              group-hover:w-full transition-[width] ease duration-300 ${
                router.asPath === href ? "w-full" : "w-0"
              } bg-light`}
      ></span>
    </Link>
  );
};
const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-white  my-2`}
      onClick={handleClick}
    >
      {title}

      <span
        className={`inline-block h-[1px] bg-white absolute left-0 -bottom-0.5 
              group-hover:w-full transition-[width] ease duration-300 ${
                router.asPath === href ? "w-full" : "w-0"
              } `}
      ></span>
    </button>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header
      className="w-full font-medium flex items-center justify-between
      relative px-8 py-4  z-10  md:px-12 sm:px-8 shadow-lg" 
    >
      <button
        className="flex lg:hidden flex-col justify-center items-center"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          } `}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          } `}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          } `}
        ></span>
      </button>

      <div className="w-full  hidden lg:flex">
        <div className="container m-auto px-6 flex justify-between items-center">
          <nav>
            <CustomLink href="/" title="الرئيسية" className="mr-4" />
            <CustomLink href="/about" title="من نحن" className="mx-4" />
            <CustomLink href="/projects" title="مشاريعنا" className="mx-4" />
          </nav>
          <span className="">
            <Image src={logoImage} alt="logoImage" className="w-28" />
          </span>

          {/* <nav className="flex items-center justify-center flex-wrap">
          TwitterIcon2525
        </nav> */}
        </div>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col z-30 justify-between items-center
            fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/80
          dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              href="/"
              title="الرئيسية"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="من نحن"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="مشاريعنا"
              className=""
              toggle={handleClick}
            />
          </nav>
          {/* <nav className="flex items-center justify-center flex-wrap mt-2">
             
                TwitterIconnnnn
            
             
              
  
              
            </nav> */}
        </motion.div>
      ) : null}

      {/* <Logo /> */}
      <Link href="/" className="flex lg:hidden ">
        <span className="text-2xl font-bold">
          <Image src={logoImage} alt="logoImage" className="w-24" />
        </span>
      </Link>
    </header>
  );
};

export default Navbar;

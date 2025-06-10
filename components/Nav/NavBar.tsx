"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/Hey-nav-logo/Support/Navbar/Logosec.svg";
import Ham from "@/public/hamburger/Support/Navbar/Frame.svg";
import cancel from "@/public/cancel-close-delete-svgrepo-com.svg";
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#808080] flex justify-between items-center p-4 relative">
      <div>
        <Image src={Logo} width={70} height={50} alt="Logo" className="logo" />
      </div>

      <div className="flex items-center gap-[4em] not-shown">
        <div className="flex text-center text-white">
          <Link href="#Home" className="min-w-[100px] p-4 hover:bg-[#22222280]">
            Home
          </Link>
          <Link
            href="#About"
            className="min-w-[100px] p-4 hover:bg-[#22222280]"
          >
            About
          </Link>
          <Link
            href={"#Services"}
            className="min-w-[100px] p-4 hover:bg-[#22222280]"
          >
            Services
          </Link>
          <Link
            href={"#Contact"}
            className="min-w-[100px] p-4 hover:bg-[#22222280]"
          >
            Contact
          </Link>
        </div>

        <div className="bg-[#595959] p-1 rounded-sm text-white text-[0.8em]">
          <p>Block account</p>
        </div>
      </div>

      <div onClick={() => setIsOpen(!isOpen)} className="ham">
        <Image
          src={isOpen ? cancel : Ham}
          width={30}
          height={40}
          alt="hamburger"
        />
      </div>

      <div
        className={`absolute ham bg-[#808080] top-[74.5px] left-0 w-full flex flex-col z-20 text-center text-white ${
          isOpen ? "show" : "hide"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <Link href="#" className="min-w-[100px] py-4 z-10  hover:bg-[#808080]">
          Home
        </Link>
        <Link
          href="#About"
          className="min-w-[100px] py-4 z-10 hover:bg-[#272727]"
        >
          About
        </Link>
        <Link
          href={"#Services"}
          className="min-w-[100px] py-4 z-10 hover:bg-[#272727]"
        >
          Services
        </Link>
        <Link
          href={"#Contact"}
          className="min-w-[100px] py-4 z-10 hover:bg-[#272727]"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default NavBar;

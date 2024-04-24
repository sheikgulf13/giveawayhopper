"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

import Logo from "@/assets/navbar-assets/logo.svg";
import { ChevronDown, Menu, X } from "lucide-react";

function Navbar({ loading, visitedBefore }) {
  const [open, setOpen] = useState(false);
  return (
    <nav className="center relative mx-auto w-full max-w-[1400px] justify-between px-4 py-4 text-xl shadow-sm lg:px-16 lg:py-0">
      {
        !visitedBefore && !loading ? (
          <motion.div 
            transition={{ ease: [0.2, 0.2, 0.2, 0.9], duration: 0.9 }}
            layoutId='logo'
          >
            <Link href={"/"}>
              <Image src={Logo} alt="logo" />
            </Link>
          </motion.div>
        ) : (
            <Link href={"/"}>
              <Image src={Logo} alt="logo" />
            </Link>
        )
      }

      <div className="lg:center hidden">
        <button className="navbar-button gap-1">
          Features <ChevronDown size={18} />
        </button>

        <button className="navbar-button gap-1">
          Resources <ChevronDown size={18} />
        </button>

        <button className="navbar-button">Pricing</button>
      </div>

      <div className="lg:center hidden">
        <button className="navbar-button gap-1">
          English <ChevronDown size={18} />
        </button>

        <button className="navbar-button">Log In</button>
      </div>

      <div className="center lg:hidden">
        <button onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <div
        className={`${open ? "block" : "hidden"} absolute right-0 top-[60px] w-[100%] bg-pink-300 duration-300 lg:hidden`}
      >
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
      </div>
    </nav>
  );
}

export default Navbar;

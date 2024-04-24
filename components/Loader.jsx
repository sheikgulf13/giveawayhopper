"use client"

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Logo from "@/assets/navbar-assets/logo.svg";
import Image from "next/image";

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const itemMain = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.2, 0.2, 0.2, 0.9],
      duration: 2,
    },
  },
};

const Loader = ({ setLoading }) => {
  return (
    <motion.div className="absolute h-screen max-w-[100vw] w-full flex items-center justify-center top-0">
      <motion.div
        variants={container}
        onAnimationComplete={() => setLoading(false)}
        initial="hidden"
        animate="show"
        exit="exit"
        className="loader-inner"
      >
        {/*Shared Layour for loading page transition */}
        <motion.div variants={itemMain} className="space-y-[20px]">
            <motion.div
                transition={{ ease: [0.2, 0.2, 0.2, 0.9], duration: 0.1 }}
                layoutId='logo' 
            >
                <Link href={"/"}>
                <Image src={Logo} alt="logo" />
                </Link>
            </motion.div>
            <motion.h1
                transition={{ ease: [0.2, 0.2, 0.2, 0.9], duration: 0.1 }}
                layoutId='Hero-Text' 
                className="text-4xl font-bold"
            >
              The <span className="text-green-500">Easiest</span> Way to <br /> Grow With{" "}
              <span className="text-green-500">Giveaways</span>.
            </motion.h1>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Loader;
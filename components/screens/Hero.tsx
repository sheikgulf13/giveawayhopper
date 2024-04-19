"use client";
import Image from "next/image";
import React from "react";
import Banner from "@/assets/hero-assets/banner-img.webp";
import Person1 from "@/assets/hero-assets/person1.webp";
import Person2 from "@/assets/hero-assets/person2.webp";
import Person3 from "@/assets/hero-assets/person3.webp";
import Person4 from "@/assets/hero-assets/person4.webp";
import Person5 from "@/assets/hero-assets/person5.webp";

function Hero() {
  return (
    <main
      className="lg:center relative mx-auto my-10 w-full max-w-[1400px] p-4 py-10"
      id="hero"
    >
      <div className="w-full lg:mr-20 lg:w-[30%]">
        <h1 className="text-4xl font-bold">
          The <span className="text-green-500">Easiest</span> Way to Grow With{" "}
          <span className="text-green-500">Giveaways</span>.
        </h1>

        <p className="my-8 text-xl">
          Set up giveaways in just 2 minutes! Grow followers, likes, website
          traffic, email subscribers, and more! Customize entry options and
          enjoy fraud protection, random winner selection, and automatic prize
          delivery.
        </p>

        <button className="rounded-md bg-gradient-to-b from-green-400 to-green-600 px-6 py-3 text-xl font-bold text-white shadow-md duration-300 hover:bg-gradient-to-b hover:from-green-600 hover:to-green-400">
          Get Started for Free
        </button>

        <p className="mt-4 text-zinc-500">No credit card required</p>

        <div className="flex gap-[20px] ml-[140px] mt-[15px]">
          <Image src='/arrowGif.gif' width={60} height={5} alt="arrowgif" />
          <Image src='/giveitatry.png' width={120} height={100} alt="tag" className="mt-[20px]" />
        </div>
      </div>

      <div className="center mt-20 w-full lg:mt-0 lg:w-[30%]">
        <Image
          src={Banner}
          alt="banner-image"
          className="w-full max-w-[400px]"
        />
      </div>

      <div className="hidden lg:block">
        <div className="float1 center absolute left-[100px] top-[0px] flex-col gap-2">
          <Image src={Person1} alt="person1" className="w-24 rounded-full" />
          <p>Marketer</p>
        </div>

        <div className="float2 center absolute left-[30px] top-[200px] flex-col gap-2">
          <Image src={Person2} alt="person2" className="w-24 rounded-full" />
          <p>Shopkeeper</p>
        </div>

        <div className="float3 center absolute left-[100px] top-[400px] flex-col gap-2">
          <Image src={Person3} alt="person3" className="w-24 rounded-full" />
          <p>Content Creator</p>
        </div>

        <div className="float2 center absolute right-[100px] top-[100px] flex-col gap-2">
          <Image src={Person4} alt="person4" className="w-24 rounded-full" />
          <p>Restaurateur</p>
        </div>

        <div className="float1 center absolute right-[100px] top-[300px] flex-col gap-2">
          <Image src={Person5} alt="person5" className="w-24 rounded-full" />
          <p>Online Retailer</p>
        </div>
      </div>
    </main>
  );
}

export default Hero;

import Image from "next/image";
import React from "react";
import Giveaway from "@/assets/last-assets/giveaway.webp";

function Last() {
  return (
    <main className="center my-20 p-4 py-10">
      <div className="center h-[500px] w-full flex-col justify-start rounded-[50px] bg-green-500 lg:w-[70%]">
        <p className="my-20 text-center text-xl font-bold text-white lg:text-5xl">
          Are You Ready to Try?
        </p>

        <button className="rounded-sm bg-white px-6 py-2 font-semibold">
          Get Started for Free Now
        </button>

        <Image
          src={Giveaway}
          alt="giveaway"
          className="mt-20 w-full max-w-[500px]"
        />
      </div>
    </main>
  );
}

export default Last;

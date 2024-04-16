import React from "react";
import Achievement1 from "@/assets/achievement-assets/achievement1.svg";
import Achievement2 from "@/assets/achievement-assets/achievement2.svg";
import Achievement3 from "@/assets/achievement-assets/achievement3.svg";
import Image from "next/image";

function Achievement() {
  return (
    <main className="my-20 p-4">
      <h1 className="py-20 text-center text-2xl font-bold lg:text-4xl">
        We Have Great Achievements to Show
      </h1>
      <div className="center items-start gap-4 lg:gap-20">
        <div className="center flex-col">
          <Image
            src={Achievement1}
            alt="achievement"
            className="h-20 lg:h-36"
          />
          <p className="my-2 mt-4 text-xl font-semibold lg:text-3xl">100+</p>
          <p className="text-xs lg:text-lg">Finished Campaigns</p>
        </div>

        <div className="center flex-col">
          <Image
            src={Achievement2}
            alt="achievement"
            className="h-20 lg:h-36"
          />
          <p className="my-2 mt-4 text-xl font-semibold lg:text-3xl">250K+</p>
          <p className="text-xs lg:text-lg">Generated Leads</p>
        </div>

        <div className="center flex-col">
          <Image
            src={Achievement3}
            alt="achievement"
            className="h-20 lg:h-36"
          />
          <p className="my-2 mt-4 text-xl font-semibold lg:text-3xl">1M+</p>
          <p className="text-xs lg:text-lg">Actions Completed</p>
        </div>
      </div>
    </main>
  );
}

export default Achievement;

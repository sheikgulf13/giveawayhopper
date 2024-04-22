"use client"

import React, { useState } from "react";
import Achievement1 from "@/assets/achievement-assets/achievement1.svg";
import Achievement2 from "@/assets/achievement-assets/achievement2.svg";
import Achievement3 from "@/assets/achievement-assets/achievement3.svg";
import Image from "next/image";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function Achievement() {
  const [ counterOn, setCounterOn ] = useState(false)

  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
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
            {
              counterOn && (
                <p className="my-2 mt-4 text-xl font-semibold lg:text-3xl">
                  <CountUp start={0} end={100} duration={2} delay={0} />+
                </p>
              )
            }
              <p className="text-xs lg:text-lg">Finished Campaigns</p>
            </div>
            <div className="center flex-col">
              <Image
                src={Achievement2}
                alt="achievement"
                className="h-20 lg:h-36"
              />
            {
              counterOn && (
                <p className="my-2 mt-4 text-xl font-semibold lg:text-3xl">
                  <CountUp start={0} end={250} duration={2} delay={0} />K+
                </p>
              )
            }
              <p className="text-xs lg:text-lg">Generated Leads</p>
            </div>
            <div className="center flex-col">
              <Image
                src={Achievement3}
                alt="achievement"
                className="h-20 lg:h-36"
              />
            {
              counterOn && (
                <p className="my-2 mt-4 text-xl font-semibold lg:text-3xl">
                  <CountUp start={0} end={1} duration={2} delay={1.8} />M+
                </p>
              )
            }
              <p className="text-xs lg:text-lg">Actions Completed</p>
            </div>
          </div>
      </main>
    </ScrollTrigger>
  );
}

export default Achievement;

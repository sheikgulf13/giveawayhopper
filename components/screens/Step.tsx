"use client";
import React from "react";
import Step1 from "@/assets/step-assets/step1.svg";
import Step2 from "@/assets/step-assets/step2.svg";
import Step3 from "@/assets/step-assets/step3.svg";

import Prize from "@/assets/step-assets/prize.svg";
import Setup from "@/assets/step-assets/setup.svg";
import Launch from "@/assets/step-assets/launch.svg";
import Grass from "@/assets/step-assets/grass.png";
import GreyBottom from "@/assets/step-assets/grey-bottom.png";
import Image from "next/image";

const steps = [
  {
    step: Step1,
    image: Prize,
    title: "Choose Your Prize",
    content:
      "Choose a prize that fits your business and connects with your audience.",
    link: null,
  },
  {
    step: Step2,
    image: Setup,
    title: "Set Up Your Giveaway",
    content:
      "Set up your giveaway in our dashboard and decide how people can enter.",
    link: "#",
  },
  {
    step: Step3,
    image: Launch,
    title: "Launch and Grow",
    content: "Share your giveaway with the world. Watch your success grow!",
    link: null,
  },
];

function Step() {
  return (
    <main className="relative mt-40 bg-zinc-100 pb-10" id="step">
      <img
        src='/grass.png'
        alt="bg"
        className="absolute top-[-70px] h-20 w-full"
      />

      <h1 className="pt-20 text-center text-2xl font-bold lg:text-4xl">
        Launch Your Giveaway in 3 Simple Steps
      </h1>

      <p className="my-6 text-center text-lg lg:text-xl">
        Start professional giveaways within minutes using our user-friendly
        dashboard.
      </p>

      <div className="center mt-20 flex-col gap-20 lg:flex-row lg:items-start">
        {steps.map((s: any) => {
          const { image, step, title, content, link } = s;
          return (
            <StepCard
              image={image}
              step={step}
              title={title}
              content={content}
              link={link}
              key={title}
            />
          );
        })}
      </div>

      <img
        src='/greyBottom.png'
        alt="bg"
        className="absolute bottom-[-70px] h-20 w-full"
      />
    </main>
  );
}

interface StepCardPropType {
  image: any;
  step: any;
  title: string;
  content: string;
  link: string;
}

function StepCard({ image, step, title, content, link }: StepCardPropType) {
  return (
    <div className="w-full max-w-[300px] flex-col">
      <div className="center h-72">
        <Image src={image} alt={title} />
      </div>

      <div className="center my-4 justify-start gap-2 text-2xl font-semibold">
        <Image src={step} alt={title} />

        <p>{title}</p>
      </div>

      <p>{content}</p>

      {link && <a href={link}>Get Started for Free</a>}
    </div>
  );
}

export default Step;

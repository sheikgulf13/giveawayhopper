import React from "react";
import question from "@/assets/example-assets/question.svg";
import discord from "@/assets/example-assets/discord.svg";
import steam from "@/assets/example-assets/steam.svg";
import BgGrass from "@/assets/giveaway-assets/green-grey-grass.png";
import GreenWave from "@/assets/giveaway-assets/green-wave.png";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

function Example() {
  const examples = [
    {
      image: question,
      title: "Survey Giveaway",
      content:
        "Get participant feedback with open or multiple choice questions",
    },
    {
      image: discord,
      title: "Discord Giveaway",
      content: "Boost your discord server! Attract more members to join",
    },
    {
      image: steam,
      title: "Steam Giveaway",
      content: "Enhance Your steam group? Increase members and engagement",
    },
  ];
  return (
    <main className="relative mt-60 bg-[#60bd67] pb-10 pt-20">
      <Image
        src={BgGrass}
        alt="bg"
        className="relative top-[-200px] h-80 w-full"
      />
      <h1 className="mb-20 mt-[-100px] text-center text-2xl font-bold text-white lg:text-4xl">
        Get Inspired by Our Examples
      </h1>

      <div className="center flex-wrap gap-10">
        {examples.map((example, index) => {
          const { image, title, content } = example;
          return <ExampleCard key={index} image={image} title={title} content={content} />;
        })}
      </div>

      <div className="center my-10">
        <button className="rounded-md bg-white px-4 py-2 shadow-md">
          See All Examples
        </button>
      </div>
      <Image src={GreenWave} alt="bg" className="absolute bottom-[-30px]" />
    </main>
  );
}

interface ExampleCardPropType {
  image: any;
  title: string;
  content: string;
}

function ExampleCard({ image, title, content }: ExampleCardPropType) {
  return (
    <div className="center min-h-32 w-full max-w-[500px] justify-start gap-6 rounded-md bg-white p-4 duration-300 hover:scale-105">
      <Image src={image} alt="logo" className="w-10" />
      <div className="">
        <h1 className="center my-2 justify-start text-xl font-semibold">
          {title} <ChevronRight />
        </h1>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Example;

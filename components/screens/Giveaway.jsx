"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Banner from "@/assets/giveaway-assets/banner.webp";
import insta from "@/assets/giveaway-assets/insta.svg";
import pinterest from "@/assets/giveaway-assets/pinterest.svg";
import facebook from "@/assets/giveaway-assets/facebook.svg";
import google from "@/assets/giveaway-assets/google.svg";
import twitter from "@/assets/giveaway-assets/twitter.svg";
import instagram from "@/assets/giveaway-assets/instagram.svg";
import check from "@/assets/giveaway-assets/check.svg";
import Logo from "@/assets/giveaway-assets/logo.svg";
import BgGrass from "@/assets/giveaway-assets/green-grey-grass.png";
import ArrowRight from "@/assets/giveaway-assets/arrow-right.svg";
import ArrowLeft from "@/assets/giveaway-assets/arrow-left.svg";

import { ChevronDown } from "lucide-react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

function Giveaway() {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    AOS.init();
  }, []);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 1024px) and (max-width: 2000px)",
        isTablet: "(min-width: 640px) and (max-width: 1024px)",
        isMobile: "(max-width:640px)",
        noAnimation: "(min-width:2000px)",
      },
      (context) => {
        let { isDesktop, isMobile, noAnimation } = context.conditions;

        gsap.fromTo(
          "#floating-tag-1",
          {
            y: 0,
            opacity: 0,
          },
          {
            y: "-100px",
            opacity: 1,
            scrollTrigger: {
              trigger: "#floating-tag-1",
              markers: false,
              start: "-600px 70%",
              end: "+=60px",
              scrub: true,
            },
          },
        );

        gsap.fromTo(
          "#floating-tag-2",
          {
            y: 0,
            opacity: 0,
          },
          {
            y: "-100px",
            opacity: 1,
            scrollTrigger: {
              trigger: "#floating-tag-2",
              markers: false,
              start: "-600px 70%",
              end: "+=60px",
              scrub: true,
            },
          },
        );

        gsap.fromTo(
          "#floating-tag-3",
          {
            y: 0,
            opacity: 0,
          },
          {
            y: "-100px",
            opacity: 1,
            scrollTrigger: {
              trigger: "#floating-tag-3",
              markers: false,
              start: "-600px 70%",
              end: "+=60px",
              scrub: true,
            },
          },
        );
      },
    );
  });
  return (
    <main className="mb-20 mt-5 pb-20 pt-10 px-[10px] md:px-0">
      <h1 className="pt-20 text-center text-2xl font-bold lg:text-4xl">
        Here&apos;s what a giveaway looks like
      </h1>

      <p className="my-6 text-center text-lg lg:text-xl">
        Explore our widget: an interactive, customizable, and user-friendly tool
        for participants to join your giveaway.
      </p>

      <div className="relative mt-10">
        <GiveawayCard />

        <div className="absolute top-[400px] z-[2] h-[500px] w-full bg-[#60bd67]" />

        <Image
          src={BgGrass}
          alt="bg"
          className="absolute top-[100px] z-[3] h-96 w-full"
        />
      </div>
    </main>
  );
}

function GiveawayCard() {
  const [hide, setHide] = useState(false);

  return (
    <div className="relative z-[10] mx-auto w-full max-w-[500px] rounded-xl bg-green-500 text-sm">
      <p className="mx-2 py-2 text-white">Simple Treasures Jewelry</p>

      <div className="m-[4px] rounded-xl bg-white z-[10] -mb-[10px]">
        <p className="py-6 text-center text-xl font-semibold">
          Giveaway: Win our latest Golden<br></br>and Silver bracelets!
        </p>

        <Image src={Banner} alt="bracelet" className="w-full" />

        <p className="p-4">
          Win the perfect duo of elegance and style! Enter now for a chance to
          win a stunning silver and gold bracelet set worth $285 USD. Elevate
          your accessory game and add a touch of sophistication to any outfit.
          Don&apos;t miss out! Enter today for your shot at this glamorous prize! ✨
        </p>

        <div className="mb-10 flex gap-6 px-4">
          <p className="font-semibold">Prizes:</p>

          <ul>
            <li>1x Gold Ananta Bracelet</li>
            <li>1x Silver Nirvana Bracelet</li>
          </ul>
        </div>

        <div className="bg-zinc-100 p-4">
          <p className="my-2 text-center text-xl">3 Ways to earn tickets</p>

          <p className="inline">Signed in as yourname@example.com </p>

          <a href="#">Sign Out</a>

          <div className="my-2 flex items-center gap-2">
            <Image src={insta} alt="insta" />
            <Image src={twitter} alt="twitter" />
            <Image src={pinterest} alt="pinterest" />
            <Image src={google} alt="google" />
            <a href="#">Edit</a>
          </div>

          <div className="my-10 flex flex-col gap-4">
            <div className="flex items-center gap-4 rounded-md bg-white pr-2 shadow-md">
              <div className="center rounded-l-md bg-pink-500 p-3">
                <Image src={instagram} alt="Instagram" className="w-6" />
              </div>

              <p className="flex-1">Follow on Instagram (+3)</p>

              <ChevronDown />
            </div>

            <div className="flex items-center gap-4 rounded-md bg-white pr-2 shadow-md">
              <div className="center rounded-l-md bg-blue-500 p-3">
                <Image src={facebook} alt="Facebook" className="h-6 w-6" />
              </div>

              <p className="flex-1">Follow on Instagram (+3)</p>

              <ChevronDown />
            </div>

            <p
              className="my-2 cursor-pointer text-center"
              onClick={() => setHide(!hide)}
            >
              {hide ? "Show completed actions" : "Hide completed actions"}
            </p>

            <div
              className={`${hide ? "hidden" : ""} flex items-center gap-4 rounded-md bg-white pr-2 shadow-md`}
            >
              <div className="center rounded-l-md p-3">
                <Image src={check} alt="Check" className="w-6" />
              </div>

              <p className="flex-1">Visit on Pinterest</p>

              <p className="px-1 text-green-600">+2</p>
            </div>
          </div>

          <div className="center mb-6 gap-4">
            <div className="center flex-col">
              <p className="my-4 text-xl lg:text-3xl">2</p>
              <p className="text-center">Your tickets</p>
            </div>

            <div className="center flex-col border-x-2 border-zinc-200 px-4">
              <p className="my-4 text-xl lg:text-3xl">184,823</p>
              <p className="text-center">Total tickets</p>
            </div>

            <div className="center flex-col">
              <p className="my-4 text-xl lg:text-3xl">15</p>
              <p className="text-center">Days left</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between rounded-b-xl bg-black px-4 py-2 text-white">
          <a href="#">Terms & Conditions</a>

          <a className="center gap-2" href="#">
            Powered by <Image src={Logo} alt="logo" className="w-32" />
          </a>
        </div>
      </div>
      <br></br>

      {/* floating tags */}
      <div
        id="floating-tag-1"
        // data-aos="fade-up"
        className="absolute left-[-320px] top-[200px] hidden w-72 rounded-md bg-zinc-100 p-4 lg:block"
      >
        <h1 className="my-2 font-semibold">Details</h1>
        <p>
          The essential info about the giveaway, including the title,
          description, and available prizes.
        </p>
        <Image
          src={ArrowLeft}
          alt="arrow"
          className="absolute bottom-[-50px] right-[-55px]"
        />
      </div>

      <div
        id="floating-tag-2"
        className="absolute left-[-320px] top-[700px] hidden w-72 rounded-md bg-zinc-100 p-4 lg:block"
      >
        <h1 className="my-2 font-semibold">Statistics</h1>
        <p>
          Participants see their earned ticket count here, the total number of
          tickets, and the remaining time.
        </p>

        <Image
          src={ArrowLeft}
          alt="arrow"
          className="absolute bottom-[-50px] right-[-55px]"
        />
      </div>

      <div
        id="floating-tag-3"
        className="absolute right-[-320px] top-[500px] hidden w-72 rounded-md bg-zinc-100 p-4 lg:block"
      >
        <h1 className="my-2 font-semibold">Entry Options</h1>
        <p>These are the actions that participants can take to earn tickets.</p>

        <Image
          src={ArrowRight}
          alt="arrow"
          className="absolute bottom-[-50px] left-[-55px]"
        />
      </div>
    </div>
  );
}

export default Giveaway;

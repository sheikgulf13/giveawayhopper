import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import Discord from "@/assets/feature-assets/discord.svg";
import Steam from "@/assets/feature-assets/steam.svg";

//import gsap from "gsap";
//import { useGSAP } from "@gsap/react";
//import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function Feature() {
  
  {/* 
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 1024px) and (max-width: 2000px)",
        isTablet: "(min-width: 768px) and (max-width: 1024px)",
        isMobile: "(max-width:768px)",
        noAnimation: "(min-width:2000px)",
      },
      (context) => {
        let { isMobile, noAnimation } = context.conditions;

        if (!noAnimation) {
          gsap.to("#features", {
            scrollTrigger: {
              trigger: "#features",
              pin: true,
              start: "top top",
              end: isMobile ? "=+10px" : "=+600px",
              scrub: true,
            },
          });

          gsap.to("#section1", {
            opacity: 100,
            scrollTrigger: {
              trigger: "#section1",
              start: "top top",
              end: "=+10px",
              scrub: true,
            },
          });

          gsap.to("#section2", {
            opacity: 100,
            scrollTrigger: {
              trigger: "#section2",
              start: "top top",
              end: "=+10px",
              scrub: true,
            },
          });

          gsap.to("#section3", {
            opacity: 100,
            scrollTrigger: {
              trigger: "#section3",
              start: "top top",
              end: "=+10px",
              scrub: true,
            },
          });

          gsap.to("#section4", {
            opacity: 100,
            scrollTrigger: {
              trigger: "#section4",
              start: "top top",
              end: "=+10px",
              scrub: true,
            },
          });

          // video
          gsap.to("#section1-content", {
            opacity: 0,
            scrollTrigger: {
              trigger: "#section2",
              start: "top top",
              end: "=+10px",
              scrub: true,
            },
          });

          gsap.to("#section2-content", {
            opacity: 0,
            scrollTrigger: {
              trigger: "#section3",
              start: "top top",
              end: "=+10px",
              scrub: true,
            },
          });

          gsap.to("#section3-content", {
            opacity: 0,
            scrollTrigger: {
              trigger: "#section4",
              start: "top top",
              end: "=+10px",
              scrub: true,
            },
          });
        }
      },
    );
  });
  */}

  const [scrollPercentage, setScrollPercentage] = useState(20)
  const scrollRef = useRef()

  
  const handleScroll = () => {
    if(scrollRef.current) {
      const clientHeight = scrollRef.current.clientHeight;
      const scrollHeight = scrollRef.current.scrollHeight;
      const scrollY = scrollRef.current.scrollTop;
  
      const scrollPercent = (scrollY / (scrollHeight - clientHeight)) * 100;
      setScrollPercentage(Math.floor(scrollPercent))
      console.log(scrollPercentage);
    }
  }

  return (
    <main className="relative mx-auto w-full max-w-[1400px] max-h-[100vh] overflow-hidden p-4 my-[50px]" id="features">
      {/* Desktop View (only visible in desktop view)*/}
        <div className="hidden justify-center items-start gap-10 md:flex">
          {/*Scrollable Container*/}
          <div 
            ref={scrollRef} 
            className=" w-full h-[100vh] overflow-y-scroll z-10 pt-[500px] py-[500px] feature-scrollbar" 
            onScroll={handleScroll}
            >
            <div className="w-full min-h-[400vh]"></div>
            <div className="w-full min-h-[400vh]"></div>
          </div>

          {/*Progress Bar*/}
          <div className="absolute flex h-screen items-center top-0 left-[100px]">
            <div className="h-[500px] w-[3px]">
              <div className={`w-full bg-green-500`} style={{height: `${scrollPercentage}%`}}></div>
            </div>
          </div>

          {/* Title and Description Container*/}
          <div
            id="title-description-container"
            className="flex w-[50%] flex-col gap-[50px] py-[20px] absolute h-screen items-start justify-center top-0 left-[150px] -z-10"
          >
            <div id="section1" className={`${scrollPercentage > 0 && scrollPercentage < 25 ? 'opacity-100' : 'opacity-30'}`}>
              <h1 className="text-2xl font-semibold">
                Customizable Entry Options
              </h1>
              <p className="mb-4 mt-2 text-zinc-500">
                Connect with your audience through our variety of actions as entry
                options.
              </p>
            </div>

            <div id="section2" className={`${scrollPercentage > 25 && scrollPercentage < 51 ? 'opacity-100' : 'opacity-30'}`}>
              <h1 className="text-2xl font-semibold">Verified Actions</h1>

              <p className="mb-4 mt-2 text-zinc-500">
                We verify if participants complete actions fairly.
              </p>
            </div>

            <div id="section3" className={`${scrollPercentage > 50 && scrollPercentage < 76 ? 'opacity-100' : 'opacity-30'}`}>
              <h1 className="text-2xl font-semibold">Fair Winner Selection</h1>

              <p className="mb-4 mt-2 text-zinc-500">
                Send prizes to winners instantly with our automated prize
                delivery.
              </p>
            </div>

            <div id="section4" className={`${scrollPercentage > 75 ? 'opacity-100' : 'opacity-30'}`}>
              <h1 className="text-2xl font-semibold">Automatic Prize Delivery</h1>

              <p className="mb-4 mt-2 text-zinc-500">
                Send prizes to winners instantly with our automated prize
                delivery.
              </p>
            </div>
          </div>

          {/* Video and Content Container*/}
          <div
            id="video-content-container"
            className="md:w-[50%] lg:w-[30%] absolute flex h-screen items-center justify-center top-0 right-[150px] -z-10"
          >
            <div id="section1-content" className={`${scrollPercentage > 0 && scrollPercentage < 25 ? 'z-[50] opacity-100' : 'z-[10] opacity-0'} absolute aspect-square`}>
              <Video path="https://giveawayhopper.com/assets/images/animations/animation-1.mp4" />

              <div>
                <p>
                  Connect with your target audience through our wide range of
                  participation methods. Choose from a variety of actions, such as
                  interacting on social media, subscribing to your newsletter,
                  answering questions, or visiting your website.
                </p>
                <br></br>
                <p>Our platform integrates with social platforms, including:</p>
                <br></br>
                <div className="center gap-6 lg:justify-start">
                  <Image src={Discord} alt="discord" />
                  <Image src={Steam} alt="steam" />
                </div>

                <button className="my-4 rounded-lg border-2 px-6 py-2">
                  Show All Available Actions
                </button>
              </div>
            </div>

            <div id="section2-content" className={`${scrollPercentage > 25 && scrollPercentage < 51 ? 'z-[50] opacity-100' : 'z-[10] opacity-0'} absolute aspect-square`}>
              <Video path="https://giveawayhopper.com/assets/images/animations/animation-2.mp4" />
              <div>
                <p>
                  That’s right! Unlike other platforms, we automatically verify
                  completed actions (where possible) to ensure everyone’s
                  participation is fair and secure, cutting out the time-consuming
                  manual checks.
                  <br></br>
                  We integrate with platforms to detect fraud, verify actions, and
                  enforce rules, ensuring fair giveaways and relieving stress with
                  our automated systems in place.
                </p>

                <button className="my-4 rounded-md bg-gradient-to-b from-green-400 to-green-600 px-6 py-2 text-white shadow-md duration-300 hover:bg-gradient-to-b hover:from-green-600 hover:to-green-400">
                  Start Your First Giveaway - It's free!
                </button>
              </div>
            </div>

            <div id="section3-content" className={`${scrollPercentage > 50 && scrollPercentage < 76 ? 'z-[50] opacity-100' : 'z-[10] opacity-0'} absolute aspect-square`}>
              <Video path="https://giveawayhopper.com/assets/images/animations/animation-3.mp4" />
              <div>
                <p>
                  At Giveawayhopper, choosing winners is quick and automatic. For
                  raffles, our system uses Random.org’s algorithm to select truly
                  random winners—no old-fashioned hat draws are needed. In freebie
                  campaigns, complete the actions and get your prize instantly.
                  Instant rewards, no wait!
                  <br></br>
                  <br></br>
                  At the end of your campaign, you can announce winners in an easy
                  and privacy-friendly way in your widget, so participants are
                  aware of who won.
                </p>
              </div>
            </div>

            <div id="section4-content" className={`${scrollPercentage > 75 ? 'z-[50] opacity-100' : 'z-[10] opacity-0'} absolute aspect-square`}>
              <Video path="https://giveawayhopper.com/assets/images/animations/animation-4.mp4" />
              <div>
                <p>
                  Use our automated prize delivery feature if you want to send
                  prizes to winners instantly. This handy tool ensures a smooth
                  and instant delivery of any digital rewards, including e-books,
                  discount codes and activation keys, simplifying the process and
                  saving you valuable time.
                </p>
              </div>
            </div>
          </div>
        </div>
     

      {/* Mobiile View */}
      <div className="md:hidden">
        <section
          id="feature1"
          className="my-20 flex flex-col-reverse items-center justify-center bg-white lg:flex-row lg:items-start"
        >
          <div className="text-center lg:w-[40%] lg:text-start">
            <h1 className="text-3xl font-semibold">
              <span className="text-green-500">Customizable</span> Entry Options
            </h1>

            <p className="mb-4 mt-2 text-zinc-500">
              Connect with your audience through our variety of actions as entry
              options.
            </p>

            <p>
              Connect with your target audience through our wide range of
              participation methods. Choose from a variety of actions, such as
              interacting on social media, subscribing to your newsletter,
              answering questions, or visiting your website.
            </p>
            <br></br>
            <p>Our platform integrates with social platforms, including:</p>
            <br></br>
            <div className="center gap-6 lg:justify-start">
              <Image src={Discord} alt="discord" />
              <Image src={Steam} alt="steam" />
            </div>

            <button className="my-4 rounded-lg border-2 px-6 py-2">
              Show All Available Actions
            </button>
          </div>

          <div className="mb-10 lg:mb-0 lg:ml-10 lg:w-[40%]">
            <Video path="https://giveawayhopper.com/assets/images/animations/animation-1.mp4" />
          </div>
        </section>

        <section
          id="feature2"
          className="my-20 flex flex-col-reverse items-center justify-center bg-white lg:flex-row lg:items-start"
        >
          <div className="text-center lg:w-[40%] lg:text-start">
            <h1 className="text-3xl font-semibold">
              <span className="text-blue-500"> Verified</span> Actions
            </h1>

            <p className="mb-4 mt-2 text-zinc-500">
              We verify if participants complete actions fairly.
            </p>

            <p>
              That’s right! Unlike other platforms, we automatically verify
              completed actions (where possible) to ensure everyone’s
              participation is fair and secure, cutting out the time-consuming
              manual checks.
              <br></br>
              Behind the scenes, we use smart integrations with various
              platforms to detect and prevent fraud, automatically verifying
              actions and spotting any unusual patterns. With us, you can run
              giveaways stress-free, knowing we’ve got a system in place to
              handle the rules and keep everything fair for everyone.
            </p>

            <button className="my-4 rounded-md bg-gradient-to-b from-green-400 to-green-600 px-6 py-2 text-white shadow-md duration-300 hover:bg-gradient-to-b hover:from-green-600 hover:to-green-400">
              Start Your First Giveaway - It's free!
            </button>
          </div>

          <div className="mb-10 lg:mb-0 lg:ml-10 lg:w-[40%]">
            <Video path="https://giveawayhopper.com/assets/images/animations/animation-2.mp4" />
          </div>
        </section>

        <section
          id="feature3"
          className="my-20 flex flex-col-reverse items-center justify-center bg-white lg:flex-row lg:items-start"
        >
          <div className="text-center lg:w-[40%] lg:text-start">
            <h1 className="text-3xl font-semibold">
              <span className="text-yellow-500">Fair</span> Winner Selection
            </h1>

            <p className="mb-4 mt-2 text-zinc-500">
              Send prizes to winners instantly with our automated prize
              delivery.
            </p>

            <p>
              At Giveawayhopper, choosing winners is quick and automatic. For
              raffles, our system uses Random.org’s algorithm to select truly
              random winners—no old-fashioned hat draws are needed. In freebie
              campaigns, complete the actions and get your prize instantly.
              Instant rewards, no wait!
              <br></br>
              At the end of your campaign, you can announce winners in an easy
              and privacy-friendly way in your widget, so participants are aware
              of who won.
            </p>
          </div>

          <div className="mb-10 lg:mb-0 lg:ml-10 lg:w-[40%]">
            <Video path="https://giveawayhopper.com/assets/images/animations/animation-3.mp4" />
          </div>
        </section>

        <section
          id="feature4"
          className="my-20 flex flex-col-reverse items-center justify-center bg-white lg:flex-row lg:items-start"
        >
          <div className="text-center lg:w-[40%] lg:text-start">
            <h1 className="text-3xl font-semibold">
              <span className="text-green-500">Automatic </span> Prize Delivery
            </h1>

            <p className="mb-4 mt-2 text-zinc-500">
              Send prizes to winners instantly with our automated prize
              delivery.
            </p>

            <p>
              Use our automated prize delivery feature if you want to send
              prizes to winners instantly. This handy tool ensures a smooth and
              instant delivery of any digital rewards, including e-books,
              discount codes and activation keys, simplifying the process and
              saving you valuable time.
            </p>
          </div>

          <div className="mb-10 lg:mb-0 lg:ml-10 lg:w-[40%]">
            <Video path="https://giveawayhopper.com/assets/images/animations/animation-4.mp4" />
          </div>
        </section>
      </div>
    </main>
  );
}

{/*
interface VideoPropType {
  path: string;
}
*/}

export function Video({ path }) {
  return (
    <video
      height="200"
      width="200"
      autoPlay
      muted
      playsInline
      loop={true}
      className="w-full max-w-[400px] py-4"
    >
      <source src={path} />
      Your browser does not support the video tag...
    </video>
  );
}

export default Feature;

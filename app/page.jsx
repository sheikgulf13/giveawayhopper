"use client";
import Achievement from "@/components/screens/Achievement";
import Feature from "@/components/screens/Feature";
import Giveaway from "@/components/screens/Giveaway";
import Hero from "@/components/screens/Hero";
import Last from "@/components/screens/Last";

import More from "@/components/screens/More";
import Step from "@/components/screens/Step";
import Navbar from "@/components/Navbar";
import Example from "@/components/screens/Example";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Footer from "@/components/Footer";
import Widget from "@/components/screens/Widget";

export default function Home() {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

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

        console.log(context.conditions);

        gsap.to("#container", {
          height: noAnimation ? "3000px" : "",
        });

        if (!noAnimation) {
          gsap.to("#step", {
            marginTop: "-300px",
            scrollTrigger: {
              trigger: "#step",
              start: isDesktop ? "20% bottom" : "top bottom",
              end: "top top",
              scrub: true,
            },
          });

          gsap.to("#step", {
            marginTop: "-300px",
            scrollTrigger: {
              trigger: "#step",
              start: isDesktop ? "20% bottom" : "top bottom",
              end: "top top",
              scrub: true,
              markers: false,
            },
          });

          gsap.to("#giveaway", {
            marginTop: "-300px",
            scrollTrigger: {
              trigger: "#step",
              start: isMobile ? "90% bottom" : "80% bottom",
              end: isMobile ? "bottom top" : "bottom center",
              scrub: true,
              markers: false,
            },
          });
        }
      },
    );
  });

  return (
    <div>
      <Navbar />
      <div
        className="relative h-[3900px] mb-[100px] overflow-y-hidden lg:h-[2200px]"
        id="container"
      >
        <Hero />
        <div id="step" className="bg-white">
          <Step />
        </div>
        <div id="giveaway" className="relative z-[20] bg-white">
          <Giveaway />
        </div>
      </div>
      <Feature />
      <Widget />
      <More />
      <Achievement />
      <Example />
      <Last />
      <Footer />
    </div>
  );
}

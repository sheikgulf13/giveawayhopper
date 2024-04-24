import React from "react";
import Logo1 from "@/assets/more-assets/1.svg";
import Logo2 from "@/assets/more-assets/2.svg";
import Logo3 from "@/assets/more-assets/3.svg";
import Logo4 from "@/assets/more-assets/4.svg";
import Logo5 from "@/assets/more-assets/5.svg";
import Logo6 from "@/assets/more-assets/6.svg";
import Logo7 from "@/assets/more-assets/7.svg";
import Logo8 from "@/assets/more-assets/8.svg";
import Logo9 from "@/assets/more-assets/9.svg";
import Logo10 from "@/assets/more-assets/10.svg";
import Image from "next/image";

const MoreData = [
  {
    logo: Logo1,
    title: "Incredible Support",
    content:
      "We’re here for you every step of the way. If you have questions, you can find answers in our knowledge base, FAQs, and blog. And when you need assistance, our support team is just a message away, ready to help!",
  },
  {
    logo: Logo2,
    title: "Data Privacy & Security",
    content:
      "Your privacy is our priority. At Giveawayhopper, we protect your data with the highest General Data Protection Regulation (GDPR) standards. Run (and participate in) giveaways worry-free, knowing your data is safe and always with your rights in focus.",
  },
  {
    logo: Logo3,
    title: "Raffles & Freebies",
    content:
      "Want to pick a single winner or reward everyone who joins? The choice is yours! Giveawayhopper lets you effortlessly set up both raffle and freebie campaigns. Find out more about the different types of campaign in our FAQ.",
  },
  {
    logo: Logo4,
    title: "Multi-Platform Compatibility",
    content:
      "Giveawayhopper integrates your favorite social media platforms like Facebook, Twitter (or X), Youtube, Instagram and TikTok. Easily set up social media actions as entry options to boost your followers, likes, reactions and visitors.",
  },
  {
    logo: Logo5,
    title: "Embed Anywhere",
    content:
      "Put your giveaway widget on your website, Facebook, Shopify, or Wordpress page. Let the world know and watch your audience grow!",
  },
  {
    logo: Logo6,
    title: "Real-time Insights",
    content:
      "Collect data from your giveaway campaign and view it in real-time with our handy insights, or save it as a .CSV file to work on or share with others. Stay informed and make smart, data-based decisions.",
  },
  {
    logo: Logo7,
    title: "Mobile Friendly",
    content:
      "Giveawayhopper works on any device – be it your phone, tablet, or computer. Our platform (including dashboard) is always available, and our giveaway widget adjusts to screens as small as 300px, so you can reach your audience no matter where they are!",
  },
  {
    logo: Logo8,
    title: "Showcase the Winners",
    content:
      "After your campaign is over, you can proudly display the winners in your giveaway widget. This is a great way to show who won and build trust with the other participants.",
  },
  {
    logo: Logo9,
    title: "Hosted Landing Pages",
    content:
      "Each campaign includes its own auto-generated landing page – no server or technical skills required. Just create and launch – it’s that easy! Perfect even if you don’t have your own website yet.",
  },
  {
    logo: Logo10,
    title: "Top-Notch Reliability",
    content:
      "We use cutting-edge cloud technology that never takes a day off! Rest assured, no matter if your giveaway attracts 100 or 100,000 participants, we promise stability and reliability.",
  },
];
function More() {
  return (
    <main className="mx-auto my-10 w-full max-w-[1400px] p-4">
      <h1 className="py-10 text-center text-2xl font-bold lg:text-4xl">
        And Many More...
      </h1>

      <div className="center flex-wrap items-start gap-10">
        {MoreData.map((data) => {
          const { logo, title, content } = data;
          return (
            <MoreCard logo={logo} title={title} content={content} key={title} />
          );
        })}
      </div>
    </main>
  );
}

function MoreCard({ logo, title, content }) {
  return (
    <div className="w-full max-w-[500px]">
      <div className="center my-2 justify-start gap-2">
        <div className="center h-10 w-10 rounded-md bg-green-500">
          <Image src={logo} alt="logo" className="" />
        </div>
        <p className="text-xl font-semibold">{title}</p>
      </div>
      <p>{content}</p>
    </div>
  );
}

export default More;

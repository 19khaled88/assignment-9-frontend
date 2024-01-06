import React from "react";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import { MyMap } from "@/components/ui/Map";
import Link from "next/link";
import AccordionItem from "@/components/ui/AccordianItem";

const About = () => {
  return (
    <div className="p-5 flex flex-col gap-10">
      <span className="grid grid-cols-2 gap-5 ">
        <div>
          <h1 className="text-2xl text-gray-600 py-3">About Us</h1>
          <p>
            Turf Business is the industry U+2019 s number one hub for turf news,
            product information, profiles and interviews in printed and digital
            formats. The place where the big names share their knowledge,
            experience and opinions across our magazine, website, email and
            social media platforms alongside the industry U+2019 s first
            dedicated TV channel, Turf Business TV. Turf Business offers an
            unrivalled package of multi-platform advertising and promotional
            opportunities within the turfcare industry, reaching a massive
            audience of over 29,000 fully opted in professionals.
          </p>
        </div>
        <div>
          <h1 className="text-2xl text-gray-600 py-3">Map Location</h1>
          <MyMap />
        </div>
      </span>
      <span className="grid grid-cols-2 gap-5">
        <div>
          <h1 className="text-2xl text-gray-600 py-3">Contact Details</h1>
          <div className="flex flex-col gap-2">
            <span className="flex flex-row gap-4">
              <p className="text-blue-400">General Information : </p>{" "}
              Info@turfclub.com
            </span>
            <span className="flex flex-row gap-4">
              <p className="text-blue-400">Media/Marketing/Press : </p>{" "}
              sales@turfclub.com
            </span>
            <span className="flex flex-row gap-4">
              {" "}
              <p className="text-blue-400">Special Events : </p>{" "}
              Events@turfclub.com
            </span>
            <p className="text-blue-400">
              Or, fill out the <Link href="#">Special Events Form</Link>{" "}
            </p>
            <span className="flex flex-row gap-4">
              <p className="text-blue-400">Phone : </p> (012) 345-6789
            </span>
          </div>
        </div>
        <div>
          <h1 className="text-2xl text-gray-600 py-3">Working Hours</h1>
          <div>
            <span className="flex flex-row gap-4">
              <p className="text-blue-400">Monday - Wednesday : </p> 3pm to 11pm
            </span>
            <span className="flex flex-row gap-4">
              <p className="text-blue-400">Thursday : </p> 4pm to MidNight
            </span>
            <span className="flex flex-row gap-4">
              <p className="text-blue-400">Friday : </p> 3pm to MidNight
            </span>
            <span className="flex flex-row gap-4">
              <p className="text-blue-400">Saturday : </p> 11pm to MidNight (
              21+ after 7 pm)
            </span>
            <span className="flex flex-row gap-4">
              <p className="text-blue-400">Sunday : </p> 11pm to 11pm ( 21+
              after 7 pm)
            </span>
          </div>
        </div>
      </span>
      <span>
        <section className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
          <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
                  <span className="mb-2 block text-lg font-semibold text-primary">
                    FAQ
                  </span>
                  <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                    Any Questions? Look Here
                  </h2>
                  <p className="text-base text-body-color dark:text-dark-6">
                    There are many variations of passages of Lorem Ipsum
                    available but the majority have suffered alteration in some
                    form.
                  </p>
                </div>
              </div>
            </div>

            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4 lg:w-1/2">
                <AccordionItem
                  header="How long we deliver your first blog post?"
                  text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
                />
                <AccordionItem
                  header="How long we deliver your first blog post?"
                  text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
                />
                <AccordionItem
                  header="How long we deliver your first blog post?"
                  text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
                />
              </div>
              <div className="w-full px-4 lg:w-1/2">
                <AccordionItem
                  header="How long we deliver your first blog post?"
                  text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
                />
                <AccordionItem
                  header="How long we deliver your first blog post?"
                  text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
                />
                <AccordionItem
                  header="How long we deliver your first blog post?"
                  text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
                />
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 right-0 z-[-1]">
            <svg
              width="1440"
              height="886"
              viewBox="0 0 1440 886"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
                fill="url(#paint0_linear)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="1308.65"
                  y1="1142.58"
                  x2="602.827"
                  y2="-418.681"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#3056D3" stop-opacity="0.36" />
                  <stop offset="1" stop-color="#F5F2FD" stop-opacity="0" />
                  <stop
                    offset="1"
                    stop-color="#F5F2FD"
                    stop-opacity="0.096144"
                  />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </section>
      </span>
    </div>
  );
};

export default About;

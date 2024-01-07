import React from "react";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import { MyMap } from "@/components/ui/Map";
import Link from "next/link";
import AccordionItem from "@/components/ui/AccordianItem";

const About = () => {
  return (
    <div className="p-5 flex flex-col gap-10">
      <span className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
        <div>
          <h1 className="text-2xl text-gray-600 py-3">About Us</h1>
          <p className="text-justify">
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
      <span className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
        <section className="relative z-20 overflow-hidden bg-white pb-12 pt-10 dark:bg-dark lg:pb-[90px] lg:pt-[50px]">
          <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="mx-auto mb-[20px] max-w-[520px] text-center lg:mb-8">
                  <span className="mb-2 block text-lg font-semibold text-primary">
                    FAQ
                  </span>
                  <h2 className="mb-2 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                    Any Questions? Look Here
                  </h2>
                </div>
              </div>
            </div>

            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4 lg:w-1/2">
                <AccordionItem
                  header="What is the purpose of the Healthy Sport Index?"
                  text="It U+2019 s a web-based tool to help athletes, parents and other stakeholders make better informed decisions about which sports will best meet their goals. The Healthy Sport Index combines the best available data and expert analysis to identify the relative benefits and risks of participating in the 10 most popular high school sports played by boys and girls."
                />
                <AccordionItem
                  header="What health impacts are being evaluated?"
                  text="The Healthy Sport Index looks at physical activity, safety and psychosocial benefits. One of the chief contributions of sport participation is physical activity, given the documented physiological and cognitive benefits that flow to youth whose bodies are in motion. We also recognize that psychological and social aspects of sports play an important role in youth having a healthy and positive sports experience. At the same time, the benefits of playing sports can be limited by short- and long-term injuries.."
                />
                <AccordionItem
                  header="Should only parents of high school athletes use the Healthy Sport Index?"
                  text="Not necessarily. The tool is limited to high school sports, given that is where the best data exist. Parents of children of all ages may find value in the tool, as well as school administrators, city managers and other stakeholders interested in using sport to develop healthy kids and communities."
                />
              </div>
              <div className="w-full px-4 lg:w-1/2">
                <AccordionItem
                  header="Which sports are being evaluated?"
                  text="Boys sports: Baseball, basketball, cross country, football, lacrosse, soccer, swimming, tennis, track and field, wrestling.

                  Girls sports: Basketball, cheerleading, cross country, lacrosse, soccer, softball, swimming, tennis, track and field, volleyball."
                />
                <AccordionItem
                  header="When the Healthy Sport Index rates a sport low, does that mean youth should not play that sport?"
                  text="No, not at all. Project Play and a large body of existing research support the concept that playing sports is good for youth. Any sport, when served well, can produce myriad benefits for participants. The Healthy Sport Index is not intended to tell parents which sports their kids should or shouldn U+2019 t play. Rather, this website makes it easy for parents and other users to customize their assessment to the needs of the youth population in question."
                />
                <AccordionItem
                  header="Is the Healthy Sport Index only about rankings?"
                  text="No. The actual index produces rankings. But the Healthy Sport Index is more than just numbers; it U+2019 s also about offering ideas, solutions and context for high school sports health. Companion content on the website includes:"
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

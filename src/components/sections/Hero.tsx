import React from "react";
import Image from "next/image";
import { HTMLMotionProps, motion } from "framer-motion";

import { ITEM_VARIANTS } from "@/utils/anims";
import Section from "@/components/section";
import CTAButton from "@/components/CTAButton";

const LOGOS = [
  {
    url: "/assets/images/hero/diaspora-ventures.webp",
    altText: "diaspora ventures logo",
    width: 104,
  },
  {
    url: "/assets/images/hero/kima-ventures.webp",
    altText: "kima ventures logo",
    width: 88,
  },
  {
    url: "/assets/images/hero/lyrik-ventures.webp",
    altText: "lyrik ventures logo",
    width: 88,
  },
  {
    url: "/assets/images/hero/ubisoft.webp",
    altText: "ubisoft entrepreneurs labs logo",
    width: 104,
  },
  {
    url: "/assets/images/hero/builder-capital.webp",
    altText: "builder capital logo",
    width: 104,
  },
  {
    url: "/assets/images/hero/atka.webp",
    altText: "atka logo",
    width: 104,
  },
  {
    url: "/assets/images/hero/station-f.webp",
    altText: "station F logo",
    width: 104,
  },
];

export default function HeroSection(props: HTMLMotionProps<"section">) {
  return (
    <Section {...props} className="relative -translate-y-[88px]">
      <div className="absolute w-full overflow-hidden -left-8 -right-8 lg:-left-10 lg:-right-10 xl:-left-14 xl:-right-14 2xl:-left-0 2xl:-right-0">
        <div className="relative">
          <motion.video
            variants={ITEM_VARIANTS}
            autoPlay
            loop
            muted
            className="w-full blur-[1px]"
            poster="/assets/images/hero-poster.webp"
          >
            <source src="/assets/video/hero.mp4" type="video/mp4" />
          </motion.video>
          <div
            style={{
              background:
                "linear-gradient(90deg, #110A31 0%, rgba(17, 10, 49, 0) 16.86%, rgba(17, 10, 49, 0) 83.85%, #110A31 100%), linear-gradient(0deg, #110A31 0%, rgba(17, 10, 49, 0) 47.8%)",
            }}
            className="absolute inset-0 z-10 w-full h-full"
          ></div>
          <div
            style={{
              background:
                "radial-gradient(78.6% 91.01% at 0% 0%, #780096 0%, #110A31 100%)",
            }}
            className="absolute inset-0 w-full h-full opacity-80"
          ></div>
        </div>
      </div>
      <div className="px-2 m-auto grid18 max-w-8xl md:px-0">
        <span className="z-50 mt-32 col-span-full md:col-start-3">
          <motion.h1
            variants={ITEM_VARIANTS}
            style={{
              background:
                "linear-gradient(158.89deg, #FFFFFF 11.54%, #E88FB2 45.00%, #5730F3 65.07%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0px 0px 40px rgba(243, 130, 48, 0.2)",
            }}
            className="text-[15vw] leading-[12vw] lg:text-[160px] lg:leading-[132px] font-extrabold font-aktiv uppercase tracking-[-.06em]"
          >
            Play <br />
            Collect <br />
            Own
          </motion.h1>
          <motion.p
            variants={ITEM_VARIANTS}
            className="py-6 md:py-10 text-lg leading-6 md:text-[21px]"
          >
            Building entertaining games for everyone, everywhere.
          </motion.p>
          <motion.div variants={ITEM_VARIANTS}>
            <CTAButton href="#games">Discover our new game</CTAButton>
          </motion.div>
        </span>
        <div className="z-50 mt-20 col-span-full md:col-start-3 md:col-end-17 md:mt-24">
          <motion.div
            variants={ITEM_VARIANTS}
            className="uppercase font-normal text-sm leading-[21px] tracking-widest"
          >
            Our Partners
          </motion.div>
          <ul className="grid grid-cols-4 gap-4 mt-2 md:grid-cols-14">
            {LOGOS.map(({ url, altText, width }) => (
              <motion.li
                variants={ITEM_VARIANTS}
                key={url}
                className="flex items-center justify-start h-12 col-span-1 md:col-span-3 lg:col-span-2 md:h-24 lg:justify-center"
              >
                <Image
                  src={url}
                  alt={altText}
                  width={width}
                  height={24}
                  className="mx-1"
                />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

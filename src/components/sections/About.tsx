import React from "react";
import Image from "next/image";
import { HTMLMotionProps, motion } from "framer-motion";

import { ITEM_VARIANTS } from "@/utils/anims";
import Section from "@/components/section/Section";

type ItemProps = {
  title: string;
  paragraph: string;
  imageUrl: string;
  imageDescription: string;
};

const ITEMS: ItemProps[] = [
  {
    title: "Our Vision",
    paragraph:
      "Uniting passionate gamers around the world in a blockchain gaming hub.",
    imageUrl: "/assets/images/about/telescope.webp",
    imageDescription: "Telescope icon",
  },
  {
    title: "Our Mission",
    paragraph:
      "Building the most user-centric Web3 game studio in the world, creating powerful gaming experiences.",
    imageUrl: "/assets/images/about/target.webp",
    imageDescription: "Target icon",
  },
];

function Item({ title, paragraph, imageUrl, imageDescription }: ItemProps) {
  return (
    <div className="flex">
      <motion.div
        variants={ITEM_VARIANTS}
        className="w-20 h-20 flex-auto min-w-[80px] mr-6"
      >
        <Image
          src={imageUrl}
          alt={imageDescription}
          width={80}
          height={80}
          className="object-contain"
        />
      </motion.div>
      <motion.div
        variants={ITEM_VARIANTS}
        className="flex flex-col space-y-2 md:space-y-4"
      >
        <div className="text-[21px] leading-8 font-bold text-purple-200">
          {title}
        </div>
        <p className="text-base leading-6">{paragraph}</p>
      </motion.div>
    </div>
  );
}

export default function AboutSection(props: HTMLMotionProps<"section">) {
  return (
    <Section
      {...props}
      className="px-2 py-10 m-auto space-y-12 grid18 max-w-8xl md:px-0 lg:py-40 md:space-y-0"
    >
      <div className="z-50 space-y-4 md:space-y-8 col-span-full md:col-span-7 md:col-start-3">
        <motion.h2 variants={ITEM_VARIANTS} className="section-title">
          About our journey
        </motion.h2>
        <motion.p
          variants={ITEM_VARIANTS}
          className="text-base md:text-[21px] leading-8 font-normal"
        >
          Specialized in the creation of top down perspective view Web3 games. A
          single backend architecture built as a “Game As A Service” to ship
          multiple games cost-efficiency.
        </motion.p>
      </div>
      <div className="flex flex-col space-y-10 col-span-full md:col-start-11 md:col-span-6">
        {ITEMS.map(({ title, imageDescription, imageUrl, paragraph }) => (
          <Item
            key={title}
            {...{ title, imageDescription, imageUrl, paragraph }}
          />
        ))}
      </div>
    </Section>
  );
}

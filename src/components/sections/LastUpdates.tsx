import React from "react";
import Image from "next/image";
import { HTMLMotionProps, motion } from "framer-motion";

import { ITEM_VARIANTS } from "@/utils/anims";
import { useRefScrollVisibilityRatio, Parallax } from "@/hooks/scroll";
import Section from "@/components/section";
import Accordion from "@/components/Accordion";
import clsx from "clsx";

type RSSItem = {
  title: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  description: string;
  content: string;
  enclosure: {
    link: string;
  };
  categories: string[];
};

export type RSSFeed = {
  items: RSSItem[];
  status: string;
};

type Props = {
  rssFeed: RSSFeed;
} & HTMLMotionProps<"section">;

export default function LastUpdatesSection({ rssFeed, ...props }: Props) {
  return (
    <Section
      {...props}
      className="mobile-bg grid18 max-w-8xl m-auto px-2 md:px-0 py-10 lg:py-[120px] space-y-8 md:space-y-0"
    >
      <div className="z-50 space-y-8 lg:space-y-16 md:col-start-3 md:col-end-17 col-span-full">
        <motion.h2
          variants={ITEM_VARIANTS}
          className="text-center lg:text-left section-title"
        >
          Our Last Updates
        </motion.h2>
        <div className="space-y-2 lg:space-y-0 lg:grid lg:grid-cols-14 lg:gap-4">
          {rssFeed.items.slice(0, 2).map((item, index) => (
            <motion.a
              variants={ITEM_VARIANTS}
              key={item.title}
              target="_blank"
              rel="noreferrer"
              href={item.link}
              className="relative h-[240px] lg:h-[420px] w-full rounded overflow-hidden block hover:!opacity-80 transition-opacity lg:col-span-7"
            >
              <Image
                fill
                src={item.thumbnail}
                alt={`${item.title}'s thumbnail`}
                className="object-cover opacity-80"
              />
              <div
                className="absolute inset-0 flex items-end"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(17,10,49,0) 5%, rgba(17,10,49,1) 100%)",
                }}
              >
                <div className="w-full p-4 font-bold md:px-8 font-poppins h-1/3">
                  <div className="mb-2 text-purple-900 md:mb-5">
                    <span className="from-[#BCACFA] to-white bg-gradient-to-l uppercase py-1 px-2 rounded-sm">
                      {new Intl.DateTimeFormat("en-US", {
                        dateStyle: "medium",
                      }).format(new Date(item.pubDate))}
                    </span>
                  </div>
                  <span className="text-lg md:text-[21px]">{item.title}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </Section>
  );
}

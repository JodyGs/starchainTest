import React from "react";
import Image from "next/image";
import { HTMLMotionProps, motion, AnimatePresence } from "framer-motion";
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import clsx from "clsx";
import { HiChevronRight } from "react-icons/hi2";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";

import { ITEM_VARIANTS } from "@/utils/anims";
import Section from "@/components/section/Section";
import ToggleGroup from "@/components/ToggleGroup";

enum Type {
  ALL = "all",
  CORE = "core team",
  ADVISORS = "advisors",
  INVESTORS = "investors",
}

type CardProps = {
  id: string;
  name: string;
  title: string;
  linkedIn?: string;
  twitter?: string;
  imgName?: string;
  type: Type;
  renderIndex?: number;
} & HTMLMotionProps<"div">;

const TEAM = [
  {
    id: "1",
    name: "Dan Biton",
    title: "CEO & Founder",
    linkedIn: "https://www.linkedin.com/in/bitondan/",
    imgName: "dan.webp",
    type: Type.CORE,
  },
  {
    id: "2",
    name: "Jennifer Cacheux-Girling",
    title: "Producer",
    linkedIn: "https://www.linkedin.com/in/jennifer-cacheux-girling/",
    imgName: "jennifer.webp",
    type: Type.CORE,
  },
  {
    id: "3",
    name: "Dimitri le Roch",
    title: "Lead UI/UX Designer",
    linkedIn: "https://www.linkedin.com/in/dimitrileroch/",
    imgName: "dimz.webp",
    type: Type.ADVISORS,
  },
  {
    id: "4",
    name: "Eve Isus",
    title: "Community Manager",
    linkedIn: "https://www.linkedin.com/in/eve-isus-797312125/",
    imgName: "eve.webp",
    type: Type.CORE,
  },
  {
    id: "5",
    name: "Emilien Barthélémy",
    title: "2D Game Artist",
    linkedIn:
      "https://www.linkedin.com/in/emilien-barth%C3%A9l%C3%A9my-94067b167/",
    imgName: "emilien.webp",
    type: Type.CORE,
  },
  {
    id: "6",
    name: "Lucie Pottier",
    title: "3D Game Artist",
    linkedIn: "https://www.linkedin.com/in/lucie-pottier-b29668214/",
    imgName: "lucie.webp",
    type: Type.CORE,
  },
  {
    id: "7",
    name: "Julien Lacroix",
    title: "CTO & Co-Founder",
    type: Type.CORE,
  },
  {
    id: "8",
    name: "Benoît Laurent",
    title: "Unity Developer",
    linkedIn: "https://www.linkedin.com/in/benoitlaurent97/",
    imgName: "benoit.webp",
    type: Type.CORE,
  },
  {
    id: "9",
    name: "Benjamin Serouya",
    title: "Lead Unity",
    linkedIn: "https://www.linkedin.com/in/bserouya/",
    imgName: "benjamin.webp",
    type: Type.CORE,
  },
  {
    id: "10",
    name: "Maxime Godet",
    title: "Unity Developer",
    linkedIn: "https://www.linkedin.com/in/maximegodet/",
    imgName: "maxime.webp",
    type: Type.CORE,
  },
  {
    id: "11",
    name: "Sacha Duc",
    title: "Creative & Game Design Director",
    linkedIn: "https://www.linkedin.com/in/sacha-duc/",
    imgName: "sacha.webp",
    type: Type.CORE,
  },
  {
    id: "12",
    name: "Karl Lalonnier",
    title: "Game Designer",
    linkedIn: "https://www.linkedin.com/in/karl-lalonnier-83279851/",
    imgName: "karl.webp",
    type: Type.CORE,
  },
  {
    id: "13",
    name: "Alexandre Brabant",
    title: "Game Designer",
    linkedIn: "https://www.linkedin.com/in/alex-brabant-1839051a8/",
    imgName: "alex-brabant.webp",
    type: Type.CORE,
  },
  {
    id: "14",
    name: "Zi Cheng Kok",
    title: "Game & Token Economist",
    linkedIn: "https://www.linkedin.com/in/zi-cheng-kok/",
    imgName: "cheng.webp",
    type: Type.CORE,
  },
];

const INVESTORS = [
  {
    id: "15",
    name: "Julien Romanetto",
    title: "Experienced Entrepreneur",
    linkedIn: "https://www.linkedin.com/in/romanetto/",
    imgName: "julien.webp",
    type: Type.INVESTORS,
  },
  {
    id: "16",
    name: "Frederic Montagnon",
    title: "Experienced Entrepreneur",
    linkedIn: "https://www.linkedin.com/in/fredericmontagnon/",
    imgName: "frederic-montagnon.webp",
    type: Type.INVESTORS,
  },
  {
    id: "17",
    name: "Sebastien Lalevée",
    title: "General Manager",
    linkedIn: "https://www.linkedin.com/in/sebastien-lalevee-7813599/",
    type: Type.INVESTORS,
  },
  {
    id: "18",
    name: "Thibaud Elziere",
    title: "Experienced Entrepreneur",
    linkedIn: "https://www.linkedin.com/in/thibaud-elziere-a787913/",
    imgName: "thibaud-elziere.webp",
    type: Type.INVESTORS,
  },
  {
    id: "19",
    name: "Gabriel Rebido",
    title: "Blockchain expert & Entrepreneur",
    linkedIn: "https://www.linkedin.com/in/gabriel-rebibo-8b009234/",
    imgName: "gabriel.webp",
    type: Type.INVESTORS,
  },
  {
    id: "20",
    name: "William Piquard",
    title: "Blockchain expert & Entrepreneur",
    linkedIn: "https://www.linkedin.com/in/williampiquard/",
    imgName: "william-piquart.webp",
    type: Type.INVESTORS,
  },
  {
    id: "21",
    name: "Pierre Laurent",
    title: "Blockchain expert & Entrepreneur",
    linkedIn: "https://www.linkedin.com/in/pierrelaurent789/",
    imgName: "pierre-laurent.webp",
    type: Type.INVESTORS,
  },
];

const ADVISORS = [
  {
    id: "22",
    name: "Vincent Danos",
    title: "Research Director at CNRS",
    linkedIn: "https://www.linkedin.com/in/vdanos/",
    imgName: "vincent-danos.webp",
    type: Type.ADVISORS,
  },
  {
    id: "23",
    name: "Sébastien Borget",
    title: "CO-Founder of The Sandbox",
    linkedIn: "https://www.linkedin.com/in/borgetsebastien/",
    imgName: "sebastien-borget.webp",
    type: Type.ADVISORS,
  },
  {
    id: "24",
    name: "Jean Kirvine",
    title: "Top Ethereum & DeFi Engineer",
    linkedIn: "https://www.linkedin.com/in/jean-krivine-a762085/",
    imgName: "jean.webp",
    type: Type.ADVISORS,
  },
  {
    id: "25",
    name: "Adrien Husson",
    title: "Top Ethereum & DeFi Engineer",
    linkedIn: "https://www.linkedin.com/in/adrien-husson-07a6139/",
    imgName: "adrien.webp",
    type: Type.ADVISORS,
  },
  {
    id: "26",
    name: "Alexis Direr",
    title: "Professor of Economics at Orléans University",
    linkedIn: "https://www.linkedin.com/in/alexis-direr-00521886/",
    imgName: "alexis-direr.webp",
    type: Type.ADVISORS,
  },
  {
    id: "26",
    name: "Wael Hadj Mouldi",
    title: "Game Design Professor",
    linkedIn: "https://www.linkedin.com/in/wael-hadj-mouldi-9594434/",
    imgName: "wael.webp",
    type: Type.ADVISORS,
  },
  {
    id: "27",
    name: "Gaetan Cazalet",
    title: "Lead Game ¨Programmer Professor at ARTFX",
    linkedIn: "https://www.linkedin.com/in/gaetanblaise/",
    imgName: "gaetan.webp",
    type: Type.ADVISORS,
  },
  {
    id: "28",
    name: "Emmanuel Foissy",
    title: "+10 Years at Blizzard Communication Expert",
    linkedIn: "https://www.linkedin.com/in/emmanuelfoissy/",
    imgName: "emmanuel.webp",
    type: Type.ADVISORS,
  },
  {
    id: "29",
    name: "Johan le Roch",
    title: "Front-end Engineer",
    linkedIn: "https://www.linkedin.com/in/johanleroch/",
    imgName: "johan.webp",
    type: Type.ADVISORS,
  },
];

const WHOLE_TEAM = [...TEAM, ...INVESTORS, ...ADVISORS];

function Card({
  id,
  name,
  title,
  linkedIn,
  twitter,
  imgName,
  type,
  className,
  renderIndex,
  ...props
}: CardProps) {
  const url = imgName
    ? `/assets/images/team/${imgName}`
    : "/assets/images/team/avatar.webp";
  const placeholderUrl = imgName
    ? `/assets/images/team/placeholder/${imgName}`
    : "/assets/images/team/avatar.webp";
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
        y: 10,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          type: "tween",
          delay: 0.05 + 0.05 * Number(renderIndex || 0),
        },
      }}
      exit={{ opacity: 0 }}
      className={clsx(
        "relative w-full h-[280px] md:h-[320px] rounded overflow-hidden",
        className
      )}
      {...props}
    >
      <Image
        src={url}
        placeholder="blur"
        blurDataURL={placeholderUrl}
        fill
        sizes="(max-width: 640px) 100vw, 50vw"
        className="object-cover pointer-events-none"
        alt={`${name}'s avatar`}
      />
      <div
        className="absolute inset-0 flex items-end"
        style={{
          background:
            "linear-gradient(180deg, rgba(17,10,49,0) 50%, rgba(17,10,49,1) 108%)",
        }}
      >
        <div className="flex items-end justify-between w-full p-8">
          <div>
            <div className="text-lg font-bold">{name}</div>
            <div className="font-normal">{title}</div>
          </div>
          <div className="space-y-2">
            {linkedIn ? (
              <a
                href={linkedIn}
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 bg-[#9A83F8] flex justify-center items-center rounded-full text-purple-900 hover:opacity-80 transition-all"
              >
                <FaLinkedinIn className="w-6 h-4" />
              </a>
            ) : null}
            {twitter ? (
              <a
                href={twitter}
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 bg-[#9A83F8] flex justify-center items-center rounded-full text-purple-900 hover:opacity-80 transition-all"
              >
                <FaTwitter className="w-6 h-4" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const CustomArrow = ({ left = false, ...rest }: any) => {
  return (
    <button
      className={clsx(
        "absolute shadow-lg h-16 w-16 bg-[#110a31] bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-70 cursor-pointer hover:scale-105 active:scale-105 transition-all",
        {
          "left-4": left,
          "right-4": !left,
        }
      )}
      {...rest}
    >
      <HiChevronRight className={clsx("w-6 h-6", { "rotate-180": left })} />
    </button>
  );
};

type CarouselProps = {
  items: CardProps[];
  filter: Type;
};

function Carousel({ items, filter }: CarouselProps) {
  const ref = React.useRef<MultiCarousel | null>(null);

  React.useEffect(() => {
    if (ref && ref.current) {
      ref.current.goToSlide(0);
    }
  }, [filter]);
  return (
    <motion.div
      variants={ITEM_VARIANTS}
      className="relative !mt-8 col-span-full grid18 select-none"
    >
      <AnimatePresence>
        <MultiCarousel
          ref={ref}
          className="col-span-full md:col-start-3 md:col-end-17"
          itemClass="px-2"
          ssr={true}
          swipeable={true}
          customLeftArrow={<CustomArrow left />}
          customRightArrow={<CustomArrow />}
          responsive={{
            xl: {
              breakpoint: { max: 9000, min: 1280 },
              items: 3.4,
            },
            lg: {
              breakpoint: { max: 1280, min: 1024 },
              items: 2.4,
            },
            sm: {
              breakpoint: { max: 1024, min: 768 },
              items: 2.1,
            },
            xs: {
              breakpoint: { max: 768, min: 640 },
              items: 2.1,
            },
            xxs: {
              breakpoint: { max: 640, min: 0 },
              items: 1.4,
            },
          }}
        >
          {items.map((member, index) => (
            <Card key={member.id} {...member} renderIndex={index} />
          ))}
        </MultiCarousel>
      </AnimatePresence>
    </motion.div>
  );
}

export default function TeamSection(props: HTMLMotionProps<"section">) {
  const [filter, setFilter] = React.useState(Type.ALL);
  const membersByType = WHOLE_TEAM.filter(
    (member) => filter === Type.ALL || member.type === filter
  );

  return (
    <Section
      {...props}
      className="px-2 py-10 m-auto mt-20 space-y-12 md:mt-0 grid18 max-w-8xl md:px-0 md:py-40 md:space-y-0"
    >
      <div className="z-50 space-y-2 text-center col-span-full md:col-start-3 md:text-left">
        <motion.h2 variants={ITEM_VARIANTS} className="section-title">
          Our stellar team
        </motion.h2>
        <motion.p
          variants={ITEM_VARIANTS}
          className="text-base md:text-[21px] leading-8 font-normal !mb-8 md:!mb-16"
        >
          skillfully armed to create mainstream Web3 games.
        </motion.p>
        <motion.div variants={ITEM_VARIANTS}>
          <ToggleGroup
            id="team_filter"
            values={[Type.ALL, Type.CORE, Type.ADVISORS, Type.INVESTORS]}
            value={filter}
            onChange={(v) => {
              setFilter(v);
            }}
          />
        </motion.div>
      </div>
      <Carousel items={membersByType} filter={filter} />
    </Section>
  );
}

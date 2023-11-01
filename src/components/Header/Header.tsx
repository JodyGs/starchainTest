import { motion } from "framer-motion";
import Link from "react-anchor-link-smooth-scroll-v2";
import Image from "next/image";

import Button from "@/components/Button";
import { CONTAINER_VARIANTS, ITEM_VARIANTS } from "@/utils/anims";
import { NAVIGATION } from "@/utils/constants";

interface ILink {
  href: string;
  name: string;
}

function HeaderLink({ name, href }: ILink) {
  return (
    <motion.div variants={ITEM_VARIANTS} transition={{ type: "tween" }}>
      <Link
        className="transition-opacity hover:opacity-80"
        href={href}
        passHref
      >
        {name}
      </Link>
    </motion.div>
  );
}

export default function Header() {
  return (
    <div className="px-4 m-auto grid18 max-w-8xl md:px-0">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={CONTAINER_VARIANTS}
        viewport={{ once: true }}
        className="static z-50 flex items-center justify-between my-6 col-span-full md:col-start-2 md:col-end-18"
      >
        <motion.div variants={ITEM_VARIANTS}>
          <span className="sr-only">Starchain Gazer</span>
          <Image
            src="/assets/images/logo.svg"
            alt="Starchain gazer logo"
            width={132}
            height={40}
          />
        </motion.div>
        <ul className="text-sm leading-6 tracking-[0.1em] font-medium uppercase md:space-x-3 lg:space-x-8 font-poppins hidden md:flex">
          {NAVIGATION.sitemap.map((link) => (
            <li key={link.name}>
              <HeaderLink key={link.href} {...link} />
            </li>
          ))}
        </ul>
        <motion.span variants={ITEM_VARIANTS}>
          <Button href="mailto:contact@starchaingazer.io">JOIN US</Button>
        </motion.span>
      </motion.div>
    </div>
  );
}

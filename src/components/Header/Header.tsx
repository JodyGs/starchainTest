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
		<div className="px-4 m-auto grid18 md:px-0">
			<motion.nav
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
						alt="Starchain gazer"
						width={132}
						height={40}
					/>
				</motion.div>
				<ul className="leading-6 capitalize md:space-x-3 lg:space-x-8 font-satoshi hidden md:flex font-bold">
					{NAVIGATION.sitemap.map((link) => (
						<li key={link.name}>
							<HeaderLink key={link.href} {...link} />
						</li>
					))}
				</ul>
				<motion.span variants={ITEM_VARIANTS}>
					<button className="border border-white/40 px-6 py-3 rounded-xl font-bold">
						Get in Touch
					</button>
				</motion.span>
			</motion.nav>
		</div>
	);
}

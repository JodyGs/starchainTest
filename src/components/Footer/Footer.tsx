import React from "react";
import { CONTAINER_VARIANTS, ITEM_VARIANTS } from "@/utils/anims";
import { motion } from "framer-motion";
import Link from "next/link";
import { Logo } from "@/svgs";
import { NAVIGATION } from "@/utils/constants";

export default function Footer() {
	return (
		<motion.footer
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ once: true }}
			variants={CONTAINER_VARIANTS}
			className="m-auto grid18 md:p-10 bg-purple-900 px-4 pb-4"
		>
			<div className="bg-purple-1000 col-span-full rounded-3xl">
				<div className="p-8 lg:px-[72px] lg:py-12 flex flex-col lg:flex-row w-full justify-between md:items-center space-y-20 lg:space-y-0 items-start">
					<Logo className="h-10 w-[132px] text-purple-500" />
					<div>
						<nav className="w-full">
							<ul className="flex space-y-10 md:space-y-0 md:space-x-8 flex-col md:flex-row">
								{NAVIGATION.footer.map(({ name, href }) => (
									<motion.li
										variants={ITEM_VARIANTS}
										className="hover:opacity-80 transition-opacity text-lg font-bold leading-6"
										key={href}
									>
										<Link href={href}>{name}</Link>
									</motion.li>
								))}
							</ul>
						</nav>
					</div>
					<div className="flex space-x-2">
						{NAVIGATION.social.map(({ name, href, icon: Icon }) => (
							<motion.a
								variants={ITEM_VARIANTS}
								key={name}
								href={href}
								className="h-10 w-10 bg-purple-900 hover:bg-purple-800 transition-colors border border-purple-800 rounded-lg flex justify-center items-center"
							>
								<Icon className="h-6 w-6" />
							</motion.a>
						))}
					</div>
				</div>
			</div>
		</motion.footer>
	);
}

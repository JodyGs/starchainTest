import React from "react";
import Section from "../section/Section";
import { HTMLMotionProps, motion, Variants } from "framer-motion";
import { Parallax } from "@/hooks/scroll";
import Image from "next/image";
import keyZ from "../../../public/assets/images/whoAreWe/KeyZ.webp";
import keyD from "../../../public/assets/images/whoAreWe/KeyD.webp";
import tetris from "../../../public/assets/images/whoAreWe/Tetris.webp";
import planet from "../../../public/assets/images/whoAreWe/planet.webp";
import { CONTAINER_VARIANTS, ITEM_VARIANTS } from "@/utils/anims";
import Button from "../Button";

export default function WhoAreWe(props: HTMLMotionProps<"section">) {
	return (
		<Section
			variants={CONTAINER_VARIANTS}
			{...props}
			className="px-2 py-10 m-auto grid18 md:px-0 relative"
		>
			<motion.div
				variants={ITEM_VARIANTS}
				className="hidden md:block absolute w-[16.8%] h-[21.5%] left-[8%] top-[5.51%]"
			>
				<Parallax offset={30}>
					<Image src={keyZ} alt="Key Z" className="hidden md:block" />
				</Parallax>
			</motion.div>
			<motion.div
				variants={ITEM_VARIANTS}
				className="hidden md:block absolute w-[13.04%] h-[8.4%] right-[26%] top-[17.1%]"
			>
				<Parallax offset={80}>
					<Image src={planet} alt="planet" className="hidden md:block" />
				</Parallax>
			</motion.div>
			<motion.div
				variants={ITEM_VARIANTS}
				className="hidden md:block absolute w-[28.9%] h-[40.6%] left-[20.1%] -bottom-[10.8%]"
			>
				<Parallax offset={100}>
					<Image src={tetris} alt="Tetris" className="hidden md:block" />
				</Parallax>
			</motion.div>
			<motion.div
				variants={ITEM_VARIANTS}
				className="hidden md:block absolute w-[6.7%] h-[12.05%] right-[7.4%] bottom-[17.6%]"
			>
				<Parallax offset={50}>
					<Image src={keyD} alt="Key D" className="hidden md:block" />
				</Parallax>
			</motion.div>

			<motion.div
				variants={ITEM_VARIANTS}
				className="col-span-full md:col-start-3 md:col-end-17 my-20 px-4 md:px-0 md:my-[200px]"
			>
				<motion.div
					variants={ITEM_VARIANTS}
					className="text-center font-bold space-y-4 whitespace-pre-wrap"
				>
					<h3 className="gradient-text md:text-[40px] leading-8 md:leading-10 tracking-[-0.48px] md:tracking-[-0.8px] text-2xl">
						Who are we?
					</h3>
					<p className="text-[40px] lg:text-[68px] leading-[44px] md:leading-[68px] tracking-[-0.8px] md:tracking-[-1.36px]">
						Our team is passionate about gaming and dedicated to delivering
						exceptional experiences to players.
					</p>
				</motion.div>
				<Button className="mx-auto mt-16">Work with us</Button>
			</motion.div>
		</Section>
	);
}

import React from "react";
import Section from "../section/Section";
import Button from "../Button";
import Image from "next/image";
import { HTMLMotionProps, motion } from "framer-motion";
import { ITEM_VARIANTS } from "@/utils/anims";

export default function DNAStatement(props: HTMLMotionProps<"section">) {
	return (
		<Section className="pt-[200px] grid18 xl:mb-[-120px]">
			<div className="col-span-full grid16 xl:col-start-3 xl:col-end-19 bg-white xl:rounded-l-[40px]">
				<motion.div
					variants={ITEM_VARIANTS}
					className="col-span-full col-start-1 col-end-18 lg:col-span-7 lg:col-start-1 lg:col-end-8"
				>
					<motion.div
						variants={ITEM_VARIANTS}
						className="lg:hidden col-span-full relative min-h-[240px]"
					>
						<Image
							src="/assets/images/DNAStatement/visuel.webp"
							alt="DNA Statement"
							placeholder="blur"
							blurDataURL="/assets/images/DNAStatement/visuel-placeholder.webp"
							fill
							className="object-cover"
						/>
					</motion.div>
					<div className="space-y-10 p-20">
						<h3 className="gradient-text text-[40px] font-bold leading-10 tracking-[-0.8px]">
							DNA Statement
						</h3>
						<p className="font-inter text-xl leading-[30px] text-purple-900">
							At Starchain Gazer, we challenge the norm with creativity and
							innovation, delivering exceptional gaming experiences that exceed
							our clients&apos; expectations. As a reliable and dedicated
							partner, we provide unparalleled quality and value to meet our
							clients&apos; needs.
						</p>
						<Button variant="secondary">Work with us</Button>
					</div>
				</motion.div>
				<motion.div
					variants={ITEM_VARIANTS}
					className="col-span-7 col-start-8 col-end-17 xl:col-end-15 relative"
				>
					<Image
						src="/assets/images/DNAStatement/visuel.webp"
						alt="DNA Statement"
						placeholder="blur"
						blurDataURL="/assets/images/DNAStatement/visuel-placeholder.webp"
						fill
						className="hidden lg:block object-cover 2xl:rounded-[40px] h-[640px] 2xl:min-h-[640px] 2xl:-translate-y-[10%]"
					/>
				</motion.div>
			</div>
		</Section>
	);
}

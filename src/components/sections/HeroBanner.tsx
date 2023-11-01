import React from "react";
import Section from "../section/Section";
import Spline from "@splinetool/react-spline";
import Button from "../Button";
import { HTMLMotionProps } from "framer-motion";
import Image from "next/image";

export default function HeroBanner(props: HTMLMotionProps<"section">) {
	return (
		<Section
			{...props}
			className="m-auto space-y-12 grid18 md:px-0 lg:py-40 md:space-y-0 relative"
		>
			<Spline
				className="absolute col-span-11 col-start-8 col-end-19 hidden lg:block"
				scene="https://prod.spline.design/ssJAqVGLpeegt7ih/scene.splinecode"
			/>
			<Image
				src="/assets/images/heroBanner/Spline.webp"
				alt="Starchain Gazer video games"
				width={1500}
				height={1200}
				className="col-span-full col-start-1 col-end-18 lg:hidden"
			/>

			<div className="col-span-full grid16 lg:col-start-2 col-end-18 mt-[112px] px-4 lg:px-0">
				<div className="col-span-full lg:col-start-2 lg:col-end-9 font-bold tracking-[-1.28px] z-10">
					<h2 className="text-[64px] leading-[68px] font-satoshi">
						Your <span className="gradient-text">dream games</span> deserves
						world class execution
					</h2>
					<p className="font-inter mt-8 lg:max-w-[335px] text-xl font-normal leading-[30px]">
						Discover our Game Dev Studio — <br /> With a dash of Unity magic,
						we&apos;re turning dreams into playtime on Android, iOS, and PC.
					</p>
					<Button className="mt-16">Get in touch now</Button>
				</div>
			</div>
		</Section>
	);
}

import React from "react";
import Section from "../section/Section";
import Image from "next/image";
import { HTMLMotionProps, motion } from "framer-motion";
import clsx from "clsx";
import Button from "../Button";
import { Chevron } from "@/svgs";
import { CONTAINER_VARIANTS, ITEM_VARIANTS } from "@/utils/anims";

type CardShell = {
	gradient: string;
} & React.PropsWithChildren;

type PrimaryCard = {
	title: string;
	label?: string;
	imgUrl: string;
	placeHolderUrl: string;
	items: {
		name: string;
		imgUrl: string;
	}[];
	isPrimary: true;
};

type SecondaryCard = {
	title: string;
	bullets: string[];
	isPrimary: false;
};

type Card = (PrimaryCard | SecondaryCard) & Pick<CardShell, "gradient">;

const FIRST_LINE: Card[] = [
	{
		gradient: "gradient-card1",
		isPrimary: true,
		title: "Mobile Games",
		imgUrl: "/assets/images/ourServices/mobileGames.webp",
		placeHolderUrl: "/assets/images/ourServices/mobileGames-placeholder.webp",
		items: [
			{
				name: "Android",
				imgUrl: "/assets/images/ourServices/android.webp",
			},
			{
				name: "iOS",
				imgUrl: "/assets/images/ourServices/iOs.webp",
			},
		],
	},
	{
		gradient: "gradient-card2",
		isPrimary: true,
		title: "Web Games",
		imgUrl: "/assets/images/ourServices/webGames.webp",
		placeHolderUrl: "/assets/images/ourServices/webGames-placeholder.webp",
		items: [
			{
				name: "WebGL",
				imgUrl: "/assets/images/ourServices/webGL.webp",
			},
			{
				name: "HTML5",
				imgUrl: "/assets/images/ourServices/html5.webp",
			},
		],
	},
];

const SECOND_LINE: Card[] = [
	{
		gradient: "gradient-card3",
		isPrimary: true,
		title: "Desktop Games",
		label: "Launcher",
		imgUrl: "/assets/images/ourServices/desktopGames.webp",
		placeHolderUrl: "/assets/images/ourServices/desktopGames-placeholder.webp",
		items: [
			{
				name: "Windows",
				imgUrl: "/assets/images/ourServices/windows.webp",
			},
			{
				name: "MacOS",
				imgUrl: "/assets/images/ourServices/apple.webp",
			},
		],
	},
	{
		gradient: "gradient-card4",
		isPrimary: false,
		title: "QA Testing",
		bullets: [
			"Precision testing ensures unparalleled, smooth gaming moments.",
			"Catching potential issues long before your players ever notice.",
			"Every bug we find and fix enhances a player's experience.",
		],
	},
	{
		gradient: "gradient-card5",
		isPrimary: false,
		title: "Blockchain",
		bullets: [
			"Tokenomics",
			"Smart Contracts",
			"Interface Layer (Fast & Cost efficient)",
		],
	},
	{
		gradient: "gradient-card6",
		isPrimary: false,
		title: "Art",
		bullets: [
			"2D character & environment",
			"3D Modelization",
			"Rigging & animation",
			"VFX",
		],
	},
];

const PARNTERS_AND_CLIENTS = [
	{
		name: "Ubisoft",
		imgUrl: "/assets/images/ourServices/ubisoft.webp",
		placeholderUrl: "/assets/images/ourServices/ubisoft-placeholder.webp",
	},
	{
		name: "TimeBreachers",
		imgUrl: "/assets/images/ourServices/timeBreachers.webp",
		placeholderUrl: "/assets/images/ourServices/timeBreachers-placeholder.webp",
	},
	{
		name: "Cometh",
		imgUrl: "/assets/images/ourServices/cometh.webp",
		placeholderUrl: "/assets/images/ourServices/cometh-placeholder.webp",
	},
];

function CardShell({ gradient, children }: CardShell) {
	return (
		<div
			key={gradient}
			className={clsx("rounded-3xl pb-6 leading-6", gradient)}
		>
			{children}
		</div>
	);
}

function PrimaryCard(props: PrimaryCard & Pick<CardShell, "gradient">) {
	const { title, gradient, imgUrl, items, placeHolderUrl, label } = props;
	return (
		<CardShell gradient={gradient}>
			<Image
				src={imgUrl}
				placeholder="blur"
				blurDataURL={placeHolderUrl}
				width={264}
				height={144}
				alt={title}
				className="-translate-y-[16px] mx-auto"
			/>
			<h4 className="text-purple-1000 text-lg font-bold text-center leading-6">
				{title}
			</h4>
			{label && (
				<p className="font-inter text-center text-purple-400 leading-4">
					{" "}
					{label}{" "}
				</p>
			)}
			<div className="flex px-6 space-x-2 justify-center mt-4">
				{items.map(({ name, imgUrl }) => (
					<div key={name} className="rounded-lg border border-purple-100 p-4">
						<Image src={imgUrl} width={64} height={48} alt={name} />
					</div>
				))}
			</div>
		</CardShell>
	);
}

function SecondaryCard(props: SecondaryCard & Pick<CardShell, "gradient">) {
	const { gradient, bullets, title } = props;
	return (
		<CardShell gradient={gradient}>
			<h4 className="text-purple-1000 text-lg font-bold text-center pt-8 mb-4">
				{title}
			</h4>
			<div>
				{bullets.map((bullet) => (
					<div
						key={bullet}
						className="flex justify-items-center w-full space-x-2 p-4 items-start border-b-[1px] border-purple-50 last:border-none"
					>
						<Chevron className="h-3 w-3 text-orange-400" />
						<p className="text-xs text-purple-1000">{bullet}</p>
					</div>
				))}
			</div>
		</CardShell>
	);
}

export default function OurServices(props: HTMLMotionProps<"section">) {
	return (
		<Section {...props} className="m-auto grid18 md:px-0 relative">
			<div className="radial-gradient-background col-span-full md:col-span-15 md:col-start-1 md:col-end-16 h-full md:h-[85%] w-full md:rounded-r-[40px] absolute"></div>
			<div className="col-span-full grid18 space-y-22 mt-[120px] z-10 ">
				<div className="col-span-full grid16 col-start-1 lg:col-start-2 col-end-18 lg:gap-y-8 px-4 lg:px-0">
					<motion.div
						variants={ITEM_VARIANTS}
						className="col-span-full col-start-1 col-end-18 md:col-span-7 md:col-start-2 md:col-end-9 space-y-8 mb-16 lg:mb-0"
					>
						<h3 className="font-bold text-7xl lg:text-[112px] leading-[64px] lg:leading-[96px]">
							Our services
						</h3>
						<p className="font-inter text-lg leading-6">
							We pride ourselves on our ability to develop games across a
							variety of platforms, including desktop, mobile, and web.
						</p>
					</motion.div>
					{/* First Line */}
					<motion.div
						variants={ITEM_VARIANTS}
						className="col-span-full col-end-18 lg:col-span-7 lg:col-start-9 lg:col-end-16 sm:grid sm:grid-cols-2 sm:gap-4 space-y-6 sm:space-y-0 mb-6 lg:mb-0"
					>
						{FIRST_LINE.map((props) =>
							props.isPrimary ? (
								<PrimaryCard {...props} />
							) : (
								<SecondaryCard {...props} />
							)
						)}
					</motion.div>
					{/* Second Line */}
					<motion.div
						variants={ITEM_VARIANTS}
						className="col-span-full col-start-1 sm:grid sm:grid-cols-2 col-end-18 lg:col-start-2 lg:col-end-16 lg:grid lg:grid-cols-4 sm:gap-4 space-y-6 sm:space-y-0"
					>
						{SECOND_LINE.map((props) =>
							props.isPrimary ? (
								<PrimaryCard {...props} />
							) : (
								<SecondaryCard {...props} />
							)
						)}
					</motion.div>
				</div>
				<motion.div
					variants={ITEM_VARIANTS}
					className="col-span-full col-start-1 col-end-18 md:col-start-3 md:col-end-15 gradient-background text-purple-900 py-4 pl-10 pr-5 md:rounded-[32px] justify-between items-center mt-14 mb-[120px] flex flex-col xl:flex-row space-y-10 xl:space-y-0"
				>
					<h4 className="text-2xl font-bold leading-10 tracking-[-0.48px]">
						Partners & clients
					</h4>
					<div className="flex space-x-8 items-center">
						{PARNTERS_AND_CLIENTS.map(({ name, imgUrl, placeholderUrl }) => (
							<Image
								key={name}
								alt={name}
								src={imgUrl}
								placeholder="blur"
								blurDataURL={placeholderUrl}
								width={104}
								height={64}
							/>
						))}
					</div>
					<Button>Work with us</Button>
				</motion.div>
			</div>
		</Section>
	);
}

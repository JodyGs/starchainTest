import React from "react";
import clsx from "clsx";
import { Arrow } from "@/svgs";
import Link from "next/link";

type Props = React.ComponentProps<"button"> & {
	variant?: "primary" | "secondary";
	children?: React.ReactNode;
	size?: "small" | "default";
	arrow?: boolean;
	href?: string;
};

export default function Button({
	className,
	href = "/",
	variant = "primary",
	children = "Button",
	size = "default",
	arrow = true,
	...rest
}: Props) {
	return (
		<Link href={href}>
			<button
				className={clsx(
					className,
					"rounded-xl font-satoshi font-bold leading-6 flex ring-[8px] ring-transparent",
					"hover:ring-[#F25C8F]/30 hover:gradient-button transition-all duration-200 hover:text-white",
					{
						"bg-white text-purple-800": variant === "primary",
						"bg-purple-500 text-white": variant === "secondary",
					},
					{
						"py-4 px-6": size === "small",
						"py-4 pl-6 pr-5": size === "default",
					}
				)}
				{...rest}
			>
				{children}
				{arrow && <Arrow className="ml-2 h-6 w-6" />}
			</button>
		</Link>
	);
}

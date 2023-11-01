import React from "react";
import Section from "../section/Section";
import { HTMLMotionProps, motion } from "framer-motion";
import type { PutBlobResult } from "@vercel/blob";
import Button from "../Button";
import { Chevron, Clip } from "@/svgs";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import { ITEM_VARIANTS } from "@/utils/anims";
import classNames from "clsx";

const ROLE_OPTIONS = [
	{
		id: 1,
		value: "Tobi",
		label: "Obito Uchiwa",
	},
	{
		id: 2,
		value: "Kakashi",
		label: "Kakashi Hatake",
	},
];

function DropdownMenuDemo() {
	const [role, setRole] = React.useState("Choose a role");

	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild>
				<button
					className="flex items-center p-2 pl-4 bg-[#8B8CEE]/20 border border-purple-400 rounded-xl font-inter leading-6 text-lg flex-1 justify-between text-purple-200 w-full"
					aria-label="Customise options"
				>
					{role}
					<span className="p-2 bg-purple-900 rounded-[4px]">
						<Chevron className="h-6 w-6 rotate-90" />
					</span>
				</button>
			</DropdownMenu.Trigger>

			<DropdownMenu.Portal>
				<DropdownMenu.Content className=" bg-purple-200" sideOffset={5}>
					<DropdownMenu.Label className="DropdownMenuLabel">
						Your role
					</DropdownMenu.Label>
					<DropdownMenu.RadioGroup value={role} onValueChange={setRole}>
						{ROLE_OPTIONS.map(({ label, value, id }) => (
							<DropdownMenu.RadioItem
								className="DropdownMenuRadioItem"
								value={value}
								key={id}
							>
								<DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator"></DropdownMenu.ItemIndicator>
								{label}
							</DropdownMenu.RadioItem>
						))}
					</DropdownMenu.RadioGroup>

					<DropdownMenu.Arrow className="DropdownMenuArrow" />
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	);
}

export default function JoinOurTeam(props: HTMLMotionProps<"section">) {
	const inputFileRef = React.useRef<HTMLInputElement>(null);
	const [blob, setBlob] = React.useState<PutBlobResult | null>(null);

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		if (!inputFileRef.current?.files) {
			throw new Error("No file selected");
		}

		const file = inputFileRef.current.files[0];

		const response = await fetch(`/api/resume/upload?filename=${file.name}`, {
			method: "POST",
			body: file,
		});

		const newBlob = (await response.json()) as PutBlobResult;

		setBlob(newBlob);
	}

	return (
		<Section className="py-20 px-4 lg:pt-80 lg:pb-40 gradient-dark grid18">
			<motion.div
				variants={ITEM_VARIANTS}
				className="col-span-full md:col-span-7 md:col-start-3 md:col-end-10"
			>
				<h3 className="text-[112px] font-bold leading-[96px] tracking-[-2.24px]">
					Join our team
				</h3>
			</motion.div>
			<div className="col-span-full md:col-span-7 md:col-start-10 md:col-end-17 space-y-10 pt-8">
				<motion.p
					variants={ITEM_VARIANTS}
					className="font-inter text-xl leading-[30px]"
				>
					Take the first step towards becoming a pivotal part of our innovative
					game development family. Your quest begins here — Apply now and let’s
					create unparalleled gaming experiences together!
				</motion.p>
				<div>
					<form onSubmit={handleSubmit} className="space-y-4 relative">
						<DropdownMenuDemo />
						<div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 space-x-4 col-span-full items-center">
							<label
								htmlFor="file"
								className="flex w-full items-center p-2 pl-4 bg-[#8B8CEE]/20 border border-purple-400 rounded-xl font-inter leading-6 text-lg flex-1 justify-between text-purple-200 whitespace-pre"
							>
								Upload your CV
								<span className="p-2 bg-purple-900 rounded-[4px]">
									<Clip className="h-6 w-6" />
								</span>
							</label>
							<input
								name="file"
								ref={inputFileRef}
								type="file"
								required
								className="hidden"
							/>
							<Button
								type="submit"
								className="border border-white/40 px-6 py-3 rounded-xl font-bold"
							>
								Apply for a job
							</Button>
						</div>
					</form>
					{blob && (
						<div>
							Blob url: <a href={blob.url}>{blob.url}</a>
						</div>
					)}
				</div>
			</div>
		</Section>
	);
}

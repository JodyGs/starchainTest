import React from "react";
import Section from "../section/Section";
import { HTMLMotionProps, motion } from "framer-motion";
import type { PutBlobResult } from "@vercel/blob";
import Button from "../Button";
import { Chevron, Clip } from "@/svgs";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Select from "@radix-ui/react-select";

import { ITEM_VARIANTS } from "@/utils/anims";

const ROLE_OPTIONS = [
	{
		id: 1,
		value: "role_01",
		label: "Role 01",
	},
	{
		id: 2,
		value: "role_02",
		label: "Role 02",
	},
];

const SelectDemo = (props: {
	onValueChange?: ((value: string) => void) | undefined;
	value?: string;
}) => {
	return (
		<Select.Root onValueChange={props.onValueChange} value={props.value}>
			<Select.Trigger
				className="flex items-center p-4 pl-4 bg-[#8B8CEE]/20 border border-purple-400 rounded-xl font-inter leading-6 text-lg flex-1 justify-between text-purple-200 w-full"
				aria-label="Role"
			>
				<Select.Value placeholder="Choose a role" />
				<Select.Icon className="SelectIcon">
					<Chevron className="h-6 w-6 rotate-90" />
				</Select.Icon>
			</Select.Trigger>
			<Select.Portal>
				<Select.Content className="bg-[#0f1145] p-4 space-y-2 rounded-xl border">
					<Select.Viewport>
						<Select.Group>
							<Select.Label className="border-b border-white/50 mb-4">
								Roles
							</Select.Label>
							{ROLE_OPTIONS.map(({ label, value, id }) => (
								<Select.Item value={value} key={id}>
									<Select.ItemText>{label}</Select.ItemText>
								</Select.Item>
							))}
						</Select.Group>
					</Select.Viewport>
					<Select.ScrollDownButton className="SelectScrollButton"></Select.ScrollDownButton>
				</Select.Content>
			</Select.Portal>
		</Select.Root>
	);
};

// const DropdownMenuDemo = (props: {
// 	onValueChange?: ((value: string) => void) | undefined;
// 	role?: string;
// }) => {
// 	const [role, setRole] = React.useState("Choose a role");

// 	return (
// 		<DropdownMenu.Root>
// 			<DropdownMenu.Trigger name="role" asChild className="relative">
// 				<button
// 					className="flex items-center p-2 pl-4 bg-[#8B8CEE]/20 border border-purple-400 rounded-xl font-inter leading-6 text-lg flex-1 justify-between text-purple-200 w-full"
// 					aria-label="Customise options"
// 				>
// 					{role}
// 					<span className="p-2 bg-purple-900 rounded-[4px]">
// 						<Chevron className="h-6 w-6 rotate-90" />
// 					</span>
// 				</button>
// 			</DropdownMenu.Trigger>

// 			<DropdownMenu.Portal>
// 				<DropdownMenu.Content
// 					className=" bg-[#0f1145] p-4 space-y-2 rounded-xl shadow-xl"
// 					sideOffset={5}
// 				>
// 					<DropdownMenu.Label className="border-b-[1px] border-white/60">
// 						Your role
// 					</DropdownMenu.Label>
// 					<DropdownMenu.RadioGroup
// 						value={props.role}
// 						onValueChange={props.onValueChange}
// 					>
// 						{ROLE_OPTIONS.map(({ label, value, id }) => (
// 							<DropdownMenu.RadioItem
// 								className="DropdownMenuRadioItem"
// 								value={value}
// 								key={id}
// 							>
// 								<DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator"></DropdownMenu.ItemIndicator>
// 								{label}
// 							</DropdownMenu.RadioItem>
// 						))}
// 					</DropdownMenu.RadioGroup>

// 					<DropdownMenu.Arrow className="DropdownMenuArrow" />
// 				</DropdownMenu.Content>
// 			</DropdownMenu.Portal>
// 		</DropdownMenu.Root>
// 	);
// };

export default function JoinOurTeam(props: HTMLMotionProps<"section">) {
	const inputFileRef = React.useRef<HTMLInputElement>(null);
	const [fileName, setFileName] = React.useState("Upload your CV");
	const [role, setRole] = React.useState("Choose a role");
	const [loading, setLoading] = React.useState(false);
	const [base64, setBase64] = React.useState(null);

	async function handleSubmit(e: any) {
		e.preventDefault();
		const file = inputFileRef.current?.files?.[0];
		if (!file) return;
		const formData = new FormData();

		// Append the PNG file to the FormData object
		formData.append("file", file);

		// Append metadata as key-value pairs
		formData.append("name", file.name);
		formData.append("role", role);

		const response = await fetch("/api/send-resume", {
			method: "POST",
			body: formData,
		});

		return false;
	}

	return (
		<Section
			id="joinOurTeam"
			className="py-20 px-4 lg:pt-80 lg:pb-40 gradient-dark grid18"
		>
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
					<form className="space-y-4 relative">
						<SelectDemo onValueChange={setRole} value={role} />
						<div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 space-x-4 col-span-full items-center">
							<label
								onClick={() =>
									document.querySelector<HTMLInputElement>("#file")?.click()
								}
								htmlFor="file"
								className="flex w-full items-center p-2 pl-4 bg-[#8B8CEE]/20 border border-purple-400 rounded-xl font-inter leading-6 text-lg flex-1 justify-between text-purple-200 whitespace-pre"
							>
								{fileName}
								<span className="p-2 bg-purple-900 rounded-[4px]">
									<Clip className="h-6 w-6" />
								</span>
							</label>
							<input
								name="file"
								id="file"
								ref={inputFileRef}
								type="file"
								required
								className="hidden"
								// onChange={handleFileChange}
							/>
							<Button
								onClick={handleSubmit}
								className="border border-white/40 px-6 py-3 rounded-xl font-bold shrink-0"
							>
								Apply for a job
							</Button>
						</div>
					</form>
				</div>
			</div>
		</Section>
	);
}

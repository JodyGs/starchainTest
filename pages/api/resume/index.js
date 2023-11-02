import { put, get } from "@vercel/blob";
import { NextResponse } from "next/server";

export const config = { runtime: "edge" };

export default async function POST(request) {
	const form = await request.formData();
	const file = form.get("file");
	console.log(form);
	console.log(file);

	if (!file) {
		return NextResponse.json(
			{ message: "No file to upload." },
			{ status: 400 }
		);
	}

	const blob = await put(file.name, file, { access: "public" });

	return NextResponse.json({ url: blob.url });
}



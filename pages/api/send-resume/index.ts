import { Resend } from "resend";
import { NextResponse, NextRequest } from "next/server";

export const runtime = "edge";
const resend = new Resend(process.env.RESEND_API_KEY);

export const getBufferFromBlob = async (file: Blob) => {
	const arrayBuffer = await file.arrayBuffer();
	return Buffer.from(arrayBuffer);
};

export default async function POST(request: NextRequest) {
	try {
		const data = await request.formData();
		const blobFile = data.get("file") as Blob;
		if (!blobFile) return;
		const buffer = await getBufferFromBlob(blobFile);
		await resend.emails.send({
			from: "onboarding@resend.dev",
			to: "jodygonzales.pro@gmail.com",
			subject: `Applying for ${data.get("role")}`,
			text: "it works!",
			attachments: [
				{
					filename: data.get("name")?.toString(),
					content: buffer,
				},
			],
			headers: {
				"X-Entity-Ref-ID": "123456789",
			},
			tags: [
				{
					name: "category",
					value: "confirm_email",
				},
			],
		});

		return NextResponse.json({
			message: "Successfully sent",
		});
	} catch (e) {
		return NextResponse.error();
	}
}

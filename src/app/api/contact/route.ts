import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

type ContactPayload = {
	name?: string;
	email?: string;
	message?: string;
	company?: string;
	phone?: string;
	// Honeypot anti-bot field
	website?: string;
};

function json(status: number, data: unknown) {
	return NextResponse.json(data, { status });
}

export async function POST(request: Request) {
	try {
		const body = (await request.json()) as ContactPayload;

		// Honeypot: if filled, treat as spam
		if (body.website) {
			return json(200, { ok: true });
		}

		const name = body.name?.trim();
		const email = body.email?.trim();
		const message = body.message?.trim();

		if (!name || !email || !message) {
			return json(400, { ok: false, error: 'Missing required fields' });
		}

		const from = process.env.EMAIL_FROM || process.env.SMTP_USER;
		const to = process.env.EMAIL_TO || process.env.EMAIL_FROM || process.env.SMTP_USER;
		const host = process.env.SMTP_HOST;
		const port = parseInt(process.env.SMTP_PORT || '587', 10);
		const user = process.env.SMTP_USER;
		const pass = process.env.SMTP_PASS;

		if (!from || !to || !host || !user || !pass) {
			return json(500, { ok: false, error: 'Email env not configured' });
		}

		const secure = port === 465; // true for 465, false for 587/25
		const transport = nodemailer.createTransport({ host, port, secure, auth: { user, pass } });

		const subject = `New contact message from ${name}`;
		const html = `
			<div style="font-family:Segoe UI,Roboto,Arial,Helvetica,sans-serif;line-height:1.6;color:#0f172a">
				<h2 style="margin:0 0 12px 0">New Contact Message</h2>
				<p><strong>Name:</strong> ${name}</p>
				<p><strong>Email:</strong> ${email}</p>
				${body.phone ? `<p><strong>Phone:</strong> ${body.phone}</p>` : ''}
				${body.company ? `<p><strong>Company:</strong> ${body.company}</p>` : ''}
				<p style="white-space:pre-wrap"><strong>Message:</strong><br/>${message}</p>
			</div>
		`;

		await transport.sendMail({ from, to, subject, html, replyTo: email });
		return json(200, { ok: true });
	} catch (err) {
		console.error('Contact POST error', err);
		return json(500, { ok: false, error: 'Server error' });
	}
}

export async function GET() {
	// Basic health check endpoint
	return json(200, { ok: true });
}

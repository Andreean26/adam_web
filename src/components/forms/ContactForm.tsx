"use client";

import React, { useState } from 'react';

type Status = { state: 'idle' | 'submitting' | 'success' | 'error'; message?: string };

export default function ContactForm() {
	const [status, setStatus] = useState<Status>({ state: 'idle' });
	const [form, setForm] = useState({
		name: '',
		email: '',
		message: '',
		company: '',
		phone: '',
		website: '', // honeypot
	});

	const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setForm((f) => ({ ...f, [name]: value }));
	};

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (status.state === 'submitting') return;
		setStatus({ state: 'submitting' });
		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(form),
			});
			const data = await res.json();
			if (!res.ok || !data.ok) throw new Error(data.error || 'Failed');
			setStatus({ state: 'success', message: 'Message sent successfully!' });
			setForm({ name: '', email: '', message: '', company: '', phone: '', website: '' });
		} catch (err) {
			setStatus({ state: 'error', message: 'Failed to send. Please try again.' });
		}
	};

	return (
		<form onSubmit={onSubmit} className="space-y-5">
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
				<div>
					<label className="block text-sm font-medium mb-1 text-[var(--foreground)]">Name *</label>
					<input
						name="name"
						required
						value={form.name}
						onChange={onChange}
						className="w-full rounded-lg px-4 py-2.5 bg-[var(--surface)] border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/40"
						placeholder="Your name"
					/>
				</div>
				<div>
					<label className="block text-sm font-medium mb-1 text-[var(--foreground)]">Email *</label>
					<input
						name="email"
						type="email"
						required
						value={form.email}
						onChange={onChange}
						className="w-full rounded-lg px-4 py-2.5 bg-[var(--surface)] border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/40"
						placeholder="you@example.com"
					/>
				</div>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
				<div>
					<label className="block text-sm font-medium mb-1 text-[var(--foreground)]">Company</label>
					<input
						name="company"
						value={form.company}
						onChange={onChange}
						className="w-full rounded-lg px-4 py-2.5 bg-[var(--surface)] border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/40"
						placeholder="Optional"
					/>
				</div>
				<div>
					<label className="block text-sm font-medium mb-1 text-[var(--foreground)]">Phone</label>
					<input
						name="phone"
						value={form.phone}
						onChange={onChange}
						className="w-full rounded-lg px-4 py-2.5 bg-[var(--surface)] border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/40"
						placeholder="Optional"
					/>
				</div>
			</div>
			<div className="hidden">
				<label>Website</label>
				<input name="website" value={form.website} onChange={onChange} />
			</div>
			<div>
				<label className="block text-sm font-medium mb-1 text-[var(--foreground)]">Message *</label>
				<textarea
					name="message"
					required
					rows={5}
					value={form.message}
					onChange={onChange}
					className="w-full rounded-lg px-4 py-2.5 bg-[var(--surface)] border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/40 resize-none"
					placeholder="Tell me a bit about your project..."
				/>
			</div>
			<div className="flex items-center gap-4">
				<button
					type="submit"
					disabled={status.state === 'submitting'}
					className="relative inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-[0_0_0_1px_var(--border),0_2px_8px_-2px_rgba(0,0,0,0.4)]"
				>
					{status.state === 'submitting' ? 'Sending...' : 'Send Message'}
				</button>
				{status.state === 'success' && (
					<span className="text-sm text-green-500">{status.message}</span>
				)}
				{status.state === 'error' && (
					<span className="text-sm text-red-500">{status.message}</span>
				)}
			</div>
		</form>
	);
}

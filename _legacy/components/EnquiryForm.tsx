"use client";

import { useId, useState } from "react";
import { Button } from "./Button";

export function EnquiryForm({ heading = "Book an appointment" }: { heading?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const nameId = useId();
  const phoneId = useId();
  const emailId = useId();
  const messageId = useId();

  if (submitted) {
    return (
      <div role="status" className="rounded-[14px] border border-hairline-gray bg-linen p-[28px] text-center">
        <p className="text-[20px] font-normal text-forest-ink">Thank you — we&apos;ve received your request.</p>
        <p className="mt-[9px] text-[15px] text-charcoal">
          A staff member will get back to you shortly. For anything urgent, please call us directly.
        </p>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-[18px] rounded-[14px] border border-hairline-gray bg-linen-white p-[28px]"
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const name = (form.elements.namedItem("name") as HTMLInputElement)?.value.trim();
        const contact =
          (form.elements.namedItem("phone") as HTMLInputElement)?.value.trim() ||
          (form.elements.namedItem("email") as HTMLInputElement)?.value.trim();
        if (!name || !contact) {
          setError("Please share your name and either a phone number or email so we can reach you.");
          return;
        }
        setError(null);
        setSubmitted(true);
      }}
    >
      <h2 className="text-[22px] font-normal text-forest-ink">{heading}</h2>
      <p className="text-[15px] leading-[1.5] text-charcoal">
        Fill out the form below and one of our staff members will answer your question as soon as
        possible.
      </p>

      <div>
        <label htmlFor={nameId} className="block text-[13px] font-normal text-charcoal">
          Full Name
        </label>
        <input
          id={nameId}
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-[7px] w-full rounded-[7px] border border-hairline-gray px-[14px] py-[11px] text-[15px] focus-visible:outline-2 focus-visible:outline-forest-ink"
        />
      </div>

      <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2">
        <div>
          <label htmlFor={phoneId} className="block text-[13px] font-normal text-charcoal">
            Phone Number
          </label>
          <input
            id={phoneId}
            name="phone"
            type="tel"
            autoComplete="tel"
            className="mt-[7px] w-full rounded-[7px] border border-hairline-gray px-[14px] py-[11px] text-[15px] focus-visible:outline-2 focus-visible:outline-forest-ink"
          />
        </div>
        <div>
          <label htmlFor={emailId} className="block text-[13px] font-normal text-charcoal">
            Email
          </label>
          <input
            id={emailId}
            name="email"
            type="email"
            autoComplete="email"
            className="mt-[7px] w-full rounded-[7px] border border-hairline-gray px-[14px] py-[11px] text-[15px] focus-visible:outline-2 focus-visible:outline-forest-ink"
          />
        </div>
      </div>

      <div>
        <label htmlFor={messageId} className="block text-[13px] font-normal text-charcoal">
          How can we help? (optional)
        </label>
        <textarea
          id={messageId}
          name="message"
          rows={4}
          className="mt-[7px] w-full rounded-[7px] border border-hairline-gray px-[14px] py-[11px] text-[15px] focus-visible:outline-2 focus-visible:outline-forest-ink"
        />
      </div>

      {error && (
        <p role="alert" className="text-[14px] text-red-700">
          {error}
        </p>
      )}

      <Button type="submit" withArrow className="justify-center">
        Send Request
      </Button>
    </form>
  );
}

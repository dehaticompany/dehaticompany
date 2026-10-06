"use client";

import { useState } from "react";
import { services, contact } from "@/lib/content";
import { whatsappHref } from "@/lib/utils";
import type { EnquiryPayload } from "@/types";
import Button from "./Button";

const emptyForm: EnquiryPayload = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "w-full rounded-[var(--radius-md)] border border-hairline bg-background px-3.5 py-2.5 text-[0.95rem] " +
  "placeholder:text-muted/70 focus:border-primary focus:outline-none focus-visible:outline-none " +
  "focus:ring-2 focus:ring-accent/40";

const labelClass = "mb-1.5 block text-sm font-medium text-ink";

export default function ContactForm() {
  const [form, setForm] = useState<EnquiryPayload>(emptyForm);
  const [status, setStatus] = useState<Status>("idle");

  function update(field: keyof EnquiryPayload, value: string) {
    setForm((previous) => ({ ...previous, [field]: value }));
    if (status !== "idle") setStatus("idle");
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    try {
      // No backend yet. When the API route exists, replace this block with:
      //
      // const response = await fetch("/api/enquiry", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(form),
      // });
      // if (!response.ok) throw new Error("Request failed");
      //
      // The form already posts the EnquiryPayload shape the route will expect.
      await new Promise((resolve) => setTimeout(resolve, 400));
      setStatus("sent");
      setForm(emptyForm);
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-[var(--radius-lg)] border border-hairline bg-surface p-8">
        <h3>Enquiry noted</h3>
        <p className="mt-3 text-muted">
          A supervisor will call you back within four working hours. For anything urgent, ring{" "}
          <a className="font-medium text-primary underline underline-offset-4" href={`tel:${contact.phoneRaw}`}>
            {contact.phone}
          </a>{" "}
          or message us on WhatsApp.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href={whatsappHref(contact.whatsapp, contact.whatsappMessage + "a property job.")} external variant="accent">
            Open WhatsApp
          </Button>
          <Button variant="outline" onClick={() => setStatus("idle")}>
            Send another enquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2" noValidate={false}>
      <div>
        <label className={labelClass} htmlFor="name">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          className={fieldClass}
          placeholder="Your full name"
          value={form.name}
          onChange={(event) => update("name", event.target.value)}
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="phone">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          inputMode="tel"
          autoComplete="tel"
          pattern="[0-9+\s-]{8,15}"
          className={fieldClass}
          placeholder="10-digit mobile number"
          value={form.phone}
          onChange={(event) => update("phone", event.target.value)}
        />
      </div>

      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className={fieldClass}
          placeholder="For the written quote"
          value={form.email}
          onChange={(event) => update("email", event.target.value)}
        />
      </div>

      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="service">
          Service required
        </label>
        <select
          id="service"
          name="service"
          required
          className={fieldClass}
          value={form.service}
          onChange={(event) => update("service", event.target.value)}
        >
          <option value="">Choose the closest trade</option>
          {services.map((service) => (
            <option key={service.slug} value={service.title}>
              {service.title}
            </option>
          ))}
          <option value="Multiple trades">More than one trade</option>
          <option value="Not sure">Not sure yet</option>
        </select>
      </div>

      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={fieldClass}
          placeholder="What needs doing, where the property is, and when you want it started."
          value={form.message}
          onChange={(event) => update("message", event.target.value)}
        />
      </div>

      {status === "error" && (
        <p className="sm:col-span-2 text-sm text-danger" role="alert">
          The enquiry did not go through. Call {contact.phone} and we will take the details over the phone.
        </p>
      )}

      <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
        <Button type="submit" variant="accent" size="lg" disabled={status === "sending"}>
          {status === "sending" ? "Sending" : "Send enquiry"}
        </Button>
        <p className="text-sm text-muted">Site visits and quotes are free within our service areas.</p>
      </div>
    </form>
  );
}

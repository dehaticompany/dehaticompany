import { MessageCircle } from "lucide-react";
import { contact } from "@/lib/content";
import { cn, whatsappHref } from "@/lib/utils";

interface WhatsAppButtonProps {
  /** Appended to the standard opening line, e.g. "electrical work in Mohali". */
  context?: string;
  /** `floating` pins it above the thumb on mobile; `inline` sits in content. */
  variant?: "floating" | "inline";
  label?: string;
  className?: string;
}

export default function WhatsAppButton({
  context,
  variant = "inline",
  label = "WhatsApp us",
  className,
}: WhatsAppButtonProps) {
  const message = `${contact.whatsappMessage}${context ?? "a property job"}.`;
  const href = whatsappHref(contact.whatsapp, message);

  if (variant === "floating") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${label} on ${contact.phone}`}
        className={cn(
          "fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-[var(--radius-pill)]",
          "bg-[#128C7E] px-4 py-3 text-sm font-semibold text-white shadow-[var(--shadow-lifted)]",
          "transition-colors hover:bg-[#0e6f64]",
          className,
        )}
      >
        <MessageCircle size={20} strokeWidth={2} aria-hidden="true" />
        <span className="hidden sm:inline">{label}</span>
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-hairline-strong",
        "px-5 py-2.5 text-[0.95rem] font-medium transition-colors hover:border-[#128C7E] hover:text-[#0e6f64]",
        className,
      )}
    >
      <MessageCircle size={18} strokeWidth={1.9} aria-hidden="true" />
      {label}
    </a>
  );
}

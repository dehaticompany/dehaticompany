/** Join class names, dropping falsy values. Keeps conditional classes readable. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** `tel:` href from a display or raw phone number. */
export function telHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

/** wa.me link with an optional pre-filled message. */
export function whatsappHref(number: string, message?: string): string {
  const digits = number.replace(/\D/g, "");
  return message
    ? `https://wa.me/${digits}?text=${encodeURIComponent(message)}`
    : `https://wa.me/${digits}`;
}

export function mailtoHref(email: string, subject?: string): string {
  return subject
    ? `mailto:${email}?subject=${encodeURIComponent(subject)}`
    : `mailto:${email}`;
}

export function formatAddress(address: {
  line1: string;
  line2: string;
  city: string;
  state: string;
  postalCode: string;
}): string {
  return [address.line1, address.line2, `${address.city} ${address.postalCode}`].join(", ");
}

/** Unique, sorted list of values for a key — used by the portfolio filter. */
export function uniqueBy<T, K extends keyof T>(items: T[], key: K): Array<T[K]> {
  return Array.from(new Set(items.map((item) => item[key]))).sort();
}

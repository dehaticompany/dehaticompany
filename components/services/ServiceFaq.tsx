import { Plus } from "lucide-react";
import type { Faq } from "@/types";

/**
 * Native disclosure widgets — keyboard accessible and zero JavaScript, so the
 * answers are in the HTML for search engines to read.
 */
export default function ServiceFaq({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-hairline border-y border-hairline">
      {faqs.map((faq) => (
        <details key={faq.question} className="group">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-[1.05rem] font-medium marker:hidden hover:text-primary">
            {faq.question}
            <Plus
              size={18}
              strokeWidth={2}
              aria-hidden="true"
              className="mt-1 shrink-0 text-accent transition-transform duration-200 group-open:rotate-45"
            />
          </summary>
          <p className="prose-measure pb-6 text-muted">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}

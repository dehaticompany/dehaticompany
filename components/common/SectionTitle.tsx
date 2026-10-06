import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  intro?: string;
  /** Renders as h2 by default; use h1 on page headers. */
  as?: "h1" | "h2";
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}

export default function SectionTitle({
  title,
  intro,
  as: Heading = "h2",
  align = "left",
  tone = "light",
  className,
}: SectionTitleProps) {
  return (
    <div className={cn(align === "center" && "mx-auto text-center", "max-w-2xl", className)}>
      <div className={cn("rule-accent mb-5", align === "center" && "mx-auto")} />
      <Heading className={cn(tone === "dark" && "text-invert")}>{title}</Heading>
      {intro && (
        <p
          className={cn(
            "mt-4 text-[1.05rem] leading-relaxed",
            tone === "dark" ? "text-invert/75" : "text-muted",
            align === "center" && "mx-auto",
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  /** Narrower measure for text-led pages. */
  size?: "default" | "narrow";
}

export default function Container({ children, className, size = "default" }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-6 lg:px-8",
        size === "narrow" ? "max-w-[820px]" : "max-w-[var(--container-max)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

import { Star } from "lucide-react";

export default function StarRating({ rating, className }: { rating: number; className?: string }) {
  return (
    <div className={className} aria-label={`${rating} out of 5`}>
      <span className="flex gap-0.5" aria-hidden="true">
        {Array.from({ length: 5 }, (_, index) => (
          <Star
            key={index}
            size={15}
            className={index < rating ? "fill-accent text-accent" : "text-hairline-strong"}
            strokeWidth={1.5}
          />
        ))}
      </span>
    </div>
  );
}

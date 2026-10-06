import {
  ArrowRight,
  BadgeCheck,
  CalendarClock,
  ClipboardList,
  Droplet,
  Facebook,
  Hammer,
  HardHat,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Paintbrush,
  Phone,
  Ruler,
  ShieldCheck,
  Sofa,
  Star,
  Users,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

/**
 * Icon names live in JSON, so they are resolved through this registry rather
 * than by dynamic import. Add an icon here before using its name in data.
 */
const registry: Record<string, LucideIcon> = {
  ArrowRight,
  BadgeCheck,
  CalendarClock,
  ClipboardList,
  Droplet,
  Facebook,
  Hammer,
  HardHat,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Paintbrush,
  Phone,
  Ruler,
  ShieldCheck,
  Sofa,
  Star,
  Users,
  Wrench,
  Zap,
};

interface IconProps {
  name: string;
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export default function Icon({ name, className, size = 22, strokeWidth = 1.75 }: IconProps) {
  const Component = registry[name] ?? Wrench;
  return <Component className={className} size={size} strokeWidth={strokeWidth} aria-hidden="true" />;
}

import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function AccentLink({ to, title }: { to: string; title: string }) {
  return (
    <Link to={to}>
      <div className="transition-all duration-300 hover:border-accent/0 flex gap-2 font-light border-b-2 border-accent">
        <span>{title}</span>
        <ArrowRight size={24} className="text-accent" />
      </div>
    </Link>
  );
}

export function AccentLinkA({ to, title }: { to: string; title: string }) {
  return (
    <a href={to}>
      <div className="transition-all duration-300 hover:border-accent/0 flex gap-2 font-light border-b-2 border-accent">
        <span>{title}</span>
        <ArrowRight size={24} className="text-accent" />
      </div>
    </a>
  );
}

import type { ReactNode } from "react";
import Reveal from "./Reveal";

export default function SectionHeading({
  number,
  label,
  title,
  description,
  action,
}: {
  number: string;
  label: string;
  title: ReactNode;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <Reveal className="section-heading">
      <div>
        <p className="eyebrow">
          <span>{number}</span>
          {label}
        </p>
        <h2>{title}</h2>
        {description && <p className="section-description">{description}</p>}
      </div>
      {action}
    </Reveal>
  );
}

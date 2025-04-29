import { ReactNode } from 'react';

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export default function SectionHeading({ title, subtitle, className = '' }: SectionHeadingProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="section-heading text-center inline-block">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-lg text-metallic-grey dark:text-metallic-light max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
} 
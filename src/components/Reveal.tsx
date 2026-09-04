import { type ReactNode } from 'react';

/**
 * Simple mount-based fade. No scroll observers — content
 * animates in once when the component mounts.
 */
export function Reveal({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'li' | 'span' | 'article' | 'header';
}) {
  return (
    <Tag className={`animate-fade-in ${className}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}

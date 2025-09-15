import React from 'react';
import { cn } from '@/lib/utils';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ level, children, className, ...props }, ref) => {
    const Component = `h${level}` as keyof React.JSX.IntrinsicElements;
    
    return React.createElement(
      Component,
      {
        ref,
        className: cn(
          'font-bold text-gray-900',
          {
            'text-4xl md:text-5xl lg:text-6xl': level === 1,
            'text-3xl md:text-4xl lg:text-5xl': level === 2,
            'text-2xl md:text-3xl lg:text-4xl': level === 3,
            'text-xl md:text-2xl lg:text-3xl': level === 4,
            'text-lg md:text-xl lg:text-2xl': level === 5,
            'text-base md:text-lg lg:text-xl': level === 6,
          },
          className
        ),
        ...props
      },
      children
    );
  }
);

Heading.displayName = 'Heading';

export { Heading };

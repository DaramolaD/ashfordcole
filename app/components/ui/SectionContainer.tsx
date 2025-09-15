import React from 'react';
import { cn } from '@/lib/utils';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'dark' | 'accent';
}

const SectionContainer = React.forwardRef<HTMLElement, SectionContainerProps>(
  ({ children, className, background = 'white', ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          'w-full',
          {
            'bg-white': background === 'white',
            'bg-gray-900': background === 'dark',
            'bg-green-900': background === 'accent',
          },
          className
        )}
        {...props}
      >
        {children}
      </section>
    );
  }
);

SectionContainer.displayName = 'SectionContainer';

export { SectionContainer };

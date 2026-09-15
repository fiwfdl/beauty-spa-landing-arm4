import * as React from 'react';

type ButtonVariant = 'primary' | 'accent' | 'outline';
type ButtonSize = 'default' | 'lg';

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-primary-foreground hover:opacity-90 shadow-soft',
  accent: 'bg-accent text-accent-foreground hover:opacity-90 shadow-soft',
  outline: 'border border-primary text-foreground hover:bg-secondary/60',
};

const sizes: Record<ButtonSize, string> = {
  default: 'h-11 px-5 text-sm',
  lg: 'h-12 px-7 text-base',
};

export interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = React.forwardRef<HTMLAnchorElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'default', ...props }, ref) => (
    <a
      ref={ref}
      className={`inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl font-sans font-semibold tracking-wide transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  )
);
Button.displayName = 'Button';

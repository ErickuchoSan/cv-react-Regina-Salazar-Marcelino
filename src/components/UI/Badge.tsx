import React from 'react';

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    size?: 'sm' | 'md';
    className?: string;
}

const variantStyles = {
    primary: 'bg-teal-100 text-teal-800 dark:bg-teal-900/50 dark:text-teal-300',
    secondary: 'bg-rose-100 text-rose-800 dark:bg-rose-900/50 dark:text-rose-300',
};

const sizeStyles = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-xs sm:text-sm',
};

export const Badge: React.FC<BadgeProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
}) => (
    <span
        className={`inline-block rounded-full font-semibold tracking-wide uppercase shadow-sm whitespace-nowrap ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
        {children}
    </span>
);

import React from "react";
import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";
import classNames from "classnames";

const buttonClasses = cva("rounded-full inline-flex items-center", {
    variants: {
        variant: {
            primary: "bg-primary-gradiant hover:text-shadow hover:shadow-primary transition-all ease-in",
            secondary: "text-offWhite bg-textWhite bg-opacity-10 border border-white-a08 backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in",
        },
        size: {
            small: "text-xs px-3 h-7",
            medium: "text-sm px-4 h-8",
            large: "text-lg px-6 h-12"
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "medium"
    }
});

interface ButtonProps extends VariantProps<typeof buttonClasses> {
    children: React.ReactNode;
    href?: string;
    className?: string;
}

interface HeroElementProps {
    children: React.ReactNode;
}

export const IconContainer = ({ children }: HeroElementProps) => {
    return <span className="bg-white-a08 px-2 rounded-full ml-2 -mr-2 py-[0.3rem]">{children}</span>;
}

export const Button = ({ children, href, variant, size, className }: ButtonProps) => {
    if (href) {
        return <Link className={classNames(buttonClasses({ variant, size }), className)} href={href}>{children}</Link>;
    }
    return <button type="button" className={classNames(buttonClasses({ variant, size }), className)}>{children}</button>;
};
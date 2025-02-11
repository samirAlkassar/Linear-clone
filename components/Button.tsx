import React from "react";
import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";

const buttonClasses = cva("rounded-full inline-flex items-center", {
    variants: {
        variant: {
            primary: "bg-primary-gradiant hover:text-shadow hover:shadow-primary",
            secondary: "",
            tertiary: ""
        },
        size:{
            small:"text-xs px-3 h-7",
            medium:"text-sm px-4 h-8",
            large:"text-md px-6 h-12"
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "medium"
    }
});

interface ButtonProps extends VariantProps<typeof buttonClasses> {
    children: React.ReactNode;
    href: string;
}

export const Button = ({ children, href ,variant}: ButtonProps) => {
    return (
        <Link className={buttonClasses({variant})} href={href}>{children}</Link>
    );
};
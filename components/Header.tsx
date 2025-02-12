"use client";

import Link from "next/link";
import { Logo } from "./icon/logo";
import { Container } from "../components/Container"
import { Button } from "../components/Button"
import { HamburgerIcon } from "../components/icon/HamburgerIcon";
import { useState, useEffect } from "react";
import classNames from "classnames";

export const Header = () => {
    const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);
    return (
        <header className={classNames("fixed top-0 left-0 w-full border-b md:bg-transparent border-white-a08 backdrop-blur-[12px]",
            isClient && hamburgerMenuOpen? "bg-background":"bg-transparent"
        )}>
            <Container className="flex items-center h-[var(--navigation-hieght)]">
                <Link className="flex items-center text-lg" href={""}>
                    <Logo className="w-[1.8rem] h-[1.8rem] mr-4" />
                    linear
                </Link>
                <div className={classNames("transition-[visibility] md:visible",
                    isClient &&hamburgerMenuOpen? "visible":"invisible delay-500"
                )}>
                    <nav className={classNames("h-[calc(100vh-var(--navigation-hieght))] overflow-auto fixed top-[var(--navigation-hieght)] left-0 w-full bg-background",
                        "md:relative md:top-0 md:transition-none md:translate-x-0 md:h-auto md:w-auto md:bg-transparent md:block md:opacity-100 transition-opacity duration-500",
                        isClient && hamburgerMenuOpen? "opacity-100 translate-x-0":"opacity-0 translate-x-[-100vh]")}>
                        <ul className={classNames("flex flex-col items-start h-full [&_li]:w-full [&_li]:border-b [&_li]:border-gray-dark",
                            "[&_a]:translate-y-8 [&_a]:md:transition-colors [&_a]:duration-300 md:[&_a]:translate-y-0 [&_a]:transition-[transform, colors] [&_a]:duration-500 [&_a]:text-lg [&_a]:h-[var(--navigation-hieght)] md:[&_a]:h-auto md:[&_a]:w-auto md:flex-row [&_a]:w-full [&_a]:flex [&_a]:items-center [&_li]:ml-6 [&_a:hover]:text-gray md:[&_a]:text-sm [&_li]:border-none ",
                            isClient &&hamburgerMenuOpen && "[&_a]:translate-y-0"
                        )}>
                            <li>
                                <Link href={"#"}>Features</Link>
                            </li>
                            <li>
                                <Link href={"#"}>Method</Link>
                            </li>
                            <li className="md:hidden lg:inline-flex">
                                <Link href={"#"}>Customers</Link>
                            </li>
                            <li className="md:hidden lg:inline-flex">
                                <Link href={"#"}>Changelog</Link>
                            </li>
                            <li className="md:hidden lg:inline-flex">
                                <Link href={"#"}>Integrations</Link>
                            </li>
                            <li>
                                <Link href={"#"}>Pricing</Link>
                            </li>
                            <li>
                                <Link href={"#"}>Company</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="ml-auto h-full flex items-center">
                    <Link href="#" className="text-lg mr-6">Log in</Link>
                    <Button size="medium" href="#" variant="primary">sign up</Button>
                </div>

                <button className="ml-6 md:hidden" onClick={() => setHamburgerMenuOpen(!hamburgerMenuOpen)}>
                    <span className="sr-only">menu toggle</span>
                    <HamburgerIcon />
                </button>
            </Container>
        </header>
    )
}

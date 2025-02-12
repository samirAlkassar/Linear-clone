import Link from "next/link";
import { Container } from "./Container"
import { Logo } from "./icon/logo";
import { TwitterIcon } from "./icon/TwitterIcon";
import { GithubIcon } from "./icon/GithubIcon";
import { SlackIcon } from "./icon/SlackIcon";

const footerLinks = [
    {
      title: "Product",
      links: [
        { title: "Features", href: "#" },
        { title: "Integrations", href: "#" },
        { title: "Pricing", href: "#" },
        { title: "Changelog", href: "#" },
        { title: "Docs", href: "#" },
        { title: "Linear Method", href: "#" },
        { title: "Download", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { title: "About us", href: "#" },
        { title: "Blog", href: "#" },
        { title: "Careers", href: "#" },
        { title: "Customers", href: "#" },
        { title: "Brand", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { title: "Community", href: "#" },
        { title: "Contact", href: "#" },
        { title: "DPA", href: "#" },
        { title: "Terms of service", href: "#" },
      ],
    },
    {
      title: "Developers",
      links: [
        { title: "API", href: "#" },
        { title: "Status", href: "#" },
        { title: "GitHub", href: "#" },
      ],
    },
  ];

export const Footer = () => {
    return (
        <footer className="border-t border-white-a08 py-[5.6rem] mt-12 text-sm">
        <Container className="flex justify-between flex-col md:flex-row">
            <div>
                <div className="flex flex-row md:flex-col h-full justify-between">
                    <div className="flex text-gray items-center">
                        <Logo className="mr-4 h-4 w-4" /> Linear - Desgined worldwide
                    </div>
                    
                    <h3 className="mt-auto flex space-x-4 text-gray" >
                        <TwitterIcon />
                        <GithubIcon />
                        <SlackIcon />
                    </h3>
                </div>
            </div>
            <div className="flex flex-wrap">
                {footerLinks.map((column)=>(
                    <div key={column.title} className="mt-10 lg:mt-0 min-w-[50%] lg:min-w-[18rem]">
                        <h3 className="font-medium mb-3">{column.title}</h3>
                        <ul className="flex flex-col">
                            <li className="[&_a]:last:mb-0">
                                {column.links.map((link)=>(
                                    <Link key={link.title} 
                                    className="text-gray mb-3 block last:mb-0 hover:text-offWhite transition-colors duration-200" 
                                    href={link.href}>{link.title}</Link>
                                ))}
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
        </Container>
    </footer>
    )
}
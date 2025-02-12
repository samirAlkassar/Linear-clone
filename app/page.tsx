import { Geist, Geist_Mono } from "next/font/google";
import {Container} from "../components/Container";
import Hero, { HeroSubtitle, HeroTitle } from "@/components/Hero";
import { Button, IconContainer } from "@/components/Button";
import { ChevronIcon } from "@/components/icon/chevronIcon";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
        <Container className="pt-[6.4rem]">
          <Hero>
            <Button className="animate-fade-in opacity-0 translate-y-[-1rem]" size="small" variant="secondary" href={"#"}>Linear 2022 Release - Build for scale 
              <IconContainer> → </IconContainer>
              </Button>
            <HeroTitle className="animate-fade-in [--animation-delay:200ms] opacity-0 translate-y-[-1rem]">Linear is a better way<br className="hidden md:block"/>
                to build projects.</HeroTitle>
            <HeroSubtitle className="animate-fade-in [--animation-delay:400ms] opacity-0 translate-y-[-1rem]">Meet the new standard for modern software developements,<br/>
                streamline issues, sprints and products roadmaps.</HeroSubtitle>
            <Button className="animate-fade-in [--animation-delay:600ms] opacity-0 translate-y-[-1rem]" size="large" variant="primary" href={"#"}>Get Started 
              <IconContainer> <ChevronIcon /> </IconContainer>
            </Button>
            <img className="mt-[12.8rem]" src="img/hero.webp" alt="hero image" />
          </Hero>
        </Container>
  );
}

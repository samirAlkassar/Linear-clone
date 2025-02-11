import { Geist, Geist_Mono } from "next/font/google";
import {Container} from "../components/Container";
import Hero, { HeroSubtitle, HeroTitle } from "@/components/Hero";


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
        <Container>
          <Hero>
            <HeroTitle>Linear is a better way<br/>
                to build projects.</HeroTitle>
            <HeroSubtitle>Meet the new standard for modern software developements,<br/>
                streamline issues, sprints and products roadmaps.</HeroSubtitle>
            <img src="img/hero.webp" alt="hero image" />
          </Hero>
        </Container>
  );
}

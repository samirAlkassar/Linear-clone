import classNames from "classnames";

interface HeroProps {
    children: React.ReactNode;
    className?: string;
}
interface HeroElementProps {
    children: React.ReactNode;
    className?: string;
}

export const HeroTitle = ({children, className}: HeroElementProps) => {
    return <h1 className={classNames("text-6xl md:text-8xl my-6 text-gradient", className)}>{children}</h1>;
}


export const HeroSubtitle= ({children, className}: HeroElementProps) => {
return <p className={classNames("text-sm md:text-xl mb-12 text-primary-text", className)}>{children}</p>;
}


const Hero = ({children}:HeroProps) => {
  return (
    <div className="text-center">
        {children}
    </div>
  )
}

export default Hero


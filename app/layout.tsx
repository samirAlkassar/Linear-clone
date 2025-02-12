import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "../styles/globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
      </head>
      <body>
        <div>
            <Header />
            <main className="pt-[var(--navigation-hieght)] bg-page-gradiant">
                {children}
            </main>
            <Footer />
        </div>
      </body>
    </html>
  );
}
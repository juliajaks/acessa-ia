import Header from "./components/Header";
import Hero from "./components/Hero";
import Modules from "./components/Modules";
import ForWho from "./components/ForWho";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Modules />
      <ForWho />
      <CTA />
      <Footer />
    </main>
  );
}

import Career from "./components/Career";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Works from "./components/Works";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Profile />
        <Works />
        <Career />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

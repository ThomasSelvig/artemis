import { useEffect } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { PageTeaser } from "../components/PageTeaser";

export function Home() {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 md:px-10 pt-24">
          <h1 className="max-w-sm md:max-w-md lg:max-w-2xl font-serif text-3xl md:text-4xl lg:text-6xl text-fg-heading font-light leading-tight">
            Artemis Brokers: Exquisite Paintings, Elegant Decor, Distinguished
            Prestige
          </h1>
          <a href="#main" className="block pt-14">
            <img src="/images/vector/arrow.svg" alt="Scroll further" />
          </a>
        </div>
      </div>

      <main id="main" className="mb-16 container mx-auto px-4 md:px-10 text-fg">
        <PageTeaser
          link="ART COLLECTION"
          description="An exclusive collection of rare and antique artworks, sourced from genuine museums across the globe."
          image="/images/content/ai-vectorpainting-1.webp"
          alt="Art Collection"
          linkTo="/art"
          flipped={false}
        />

        <PageTeaser
          link="INTERIOR DECOR"
          description="Inquisitively designed interior decor and layouts for houses, cabins, and hotels."
          image="/images/content/ai-vectordecor-1.webp"
          alt="Interior Decor"
          linkTo="/decor"
          flipped={true}
        />
      </main>

      <Footer />
    </>
  );
}

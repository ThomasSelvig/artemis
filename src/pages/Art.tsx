import { ChevronsRight } from "lucide-react";

import { Header } from "../components/Header";
import { ProjectGallery } from "../components/ProjectGallery";
import { WorkTogetherBanner } from "../components/WorkTogetherBanner";
import { Footer } from "../components/Footer";
import { useEffect } from "react";

export function Art() {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 pt-24">
        <p className="font-sans text-accent pb-8 flex items-center gap-2">
          <ChevronsRight /> ART COLLECTION
        </p>
        <h1 className="max-w-sm md:max-w-md lg:max-w-4xl font-serif text-3xl md:text-4xl lg:text-6xl text-fg-heading font-light leading-tight">
          Discover Rare Masterpieces: Exclusive Paintings for the Discerning
          Collector
        </h1>
      </div>

      <main className="container mx-auto px-4 pt-16 text-fg">
        <div className="lg:flex gap-8 justify-start">
          <p className="lg:w-5/12">
            Welcome to a world of unparalleled artistry and timeless beauty. Our
            collection features rare paintings by history’s most distinguished
            and legendary painters. These masterpieces, curated for the
            discerning collector, embody the pinnacle of artistic excellence and
            heritage. From intricate Renaissance brushstrokes to bold modern
            expressions, each piece tells a unique story, reflecting the
            creative genius and cultural richness of its era.
          </p>
          <p className="pt-4 lg:p-0 lg:w-5/12">
            Immerse yourself in a visual journey through time, where each
            painting testifies to the enduring legacy of its artist. These rare
            treasures are not just artworks; they are investments in history,
            culture, and aesthetic brilliance. Whether you're an art enthusiast
            or a connoisseur, our gallery offers a unique chance to own a piece
            of artistic history. Experience the elegance and sophistication that
            only the most exceptional works can provide.
          </p>
        </div>

        <ProjectGallery
          title="Leonardo da Vinci"
          projects={[
            {
              title: "Mona Lisa",
              image: "/images/content/ai-monalisa-1.webp",
            },
            {
              title: "The Last Supper",
              image: "/images/content/ai-thelastsupper-1.webp",
            },
            {
              // title: "Homo Vitruvianus",
              title: "Vitruvianus",
              image: "/images/content/ai-homo vitruvianus-1.webp",
            },
            {
              title: "Starry Afternoon",
              image: "/images/content/ai-starry-2.webp",
            },
          ]}
        />

        <ProjectGallery
          title="Pablo Picasso"
          projects={[
            {
              title: "Abstract I",
              image: "/images/content/ai-picasso-1.webp",
            },
            {
              title: "Abstract II",
              image: "/images/content/ai-picasso-2.webp",
            },
            {
              title: "Abstract III",
              image: "/images/content/ai-picasso-3.webp",
            },
          ]}
        />

        {/* <ProjectGallery
          title="Vincent Van Gogh"
          projects={[
            {
              title: "Starry Night",
              image: "/images/content/ai-starryframed-2.webp",
            },
            {
              title: "The Self",
              image: "/images/content/ai-vangogh-1.webp",
            },
          ]}
        /> */}

        <ProjectGallery
          title="Edvard Munch"
          projects={[
            {
              title: "The Scream",
              image: "/images/content/ai-screamframed-1.webp",
            },
            {
              title: "Vampyr",
              image: "/images/content/ai-vampyrskrikframed-1.webp",
            },
          ]}
        />
      </main>

      <WorkTogetherBanner />
      <Footer />
    </>
  );
}

import { ChevronsRight } from "lucide-react";

import { Header } from "../components/Header";
import { ProjectGallery } from "../components/ProjectGallery";
import { WorkTogetherBanner } from "../components/WorkTogetherBanner";
import { Footer } from "../components/Footer";
import { useEffect } from "react";

export function Decor() {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 pt-24">
        <p className="font-sans text-accent pb-8 flex items-center gap-2">
          <ChevronsRight /> INTERIOR DECOR
        </p>
        <h1 className="max-w-sm md:max-w-md lg:max-w-4xl font-serif text-3xl md:text-4xl lg:text-6xl text-fg-heading font-light leading-tight">
          Discover Unique Decor: Elegant Designs for Your Home, Cabin, or Hotel
        </h1>
      </div>

      <main className="container mx-auto px-4 pt-16 text-fg">
        <div className="lg:flex gap-8 justify-start">
          <p className="lg:w-5/12">
            Welcome to a world of exquisite design and sophisticated elegance.
            Our interior decor collection features unique pieces that are
            thoughtfully designed to elevate your living space. From classic
            styles to contemporary aesthetics, each item is crafted with
            precision and care, ensuring a perfect blend of form and function.
          </p>
          <p className="pt-4 lg:p-0 lg:w-5/12">
            Our decor pieces are more than just objects; they are statements of
            style and taste. Whether you're looking to create a cozy home
            atmosphere, a rustic cabin retreat, or a luxurious hotel ambiance,
            our collection offers a diverse range of options to suit your
            preferences. Explore our selection and discover the perfect decor
            pieces to enhance your space.
          </p>
        </div>

        <ProjectGallery
          title="House and Mansion Concepts"
          projects={[
            {
              title: "Regal Estates",
              image: "/images/content/ai-houseconcept-1.webp",
            },
            {
              title: "Serenity Manor",
              image: "/images/content/ai-houseconcept-2.webp",
            },
            {
              title: "Grand Villa",
              image: "/images/content/ai-mansionconcept.webp",
            },
          ]}
        />

        <ProjectGallery
          title="Cabins and Retreats"
          projects={[
            {
              title: "Twin Peaks",
              image: "/images/content/ai-cabin-1.webp",
            },
            {
              title: "Opulence Retreat",
              image: "/images/content/ai-cabin-2.webp",
            },
          ]}
        />

        <ProjectGallery
          title="Hotels and Resorts"
          projects={[
            {
              title: "Beachfront Resort",
              image: "/images/content/ai-hotel-1.webp",
            },
            {
              title: "Luxury Suites",
              image: "/images/content/ai-hotel-2.webp",
            },
          ]}
        />
      </main>

      <WorkTogetherBanner />
      <Footer />
    </>
  );
}

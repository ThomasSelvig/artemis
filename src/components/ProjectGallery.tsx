import { AccentLink, AccentLinkA } from "./AccentLink";
import { useEffect, useRef, useState } from "react";

export function ProjectGallery({
  title,
  projects,
}: {
  title: string;
  projects: { title: string; image: string }[];
}) {
  const galleryRef = useRef<HTMLDivElement>(null);
  // the x amount scrolled horizontally in the project gallery
  const [scrolled, setScrolled] = useState(0);
  const [viewedIndex, setViewedIndex] = useState(0);

  function scrollToIndex(index: number): void {
    // galleryRef.current?.scrollBy({
    //   left:
    //     galleryRef.current?.children[index].getBoundingClientRect().left -
    //     galleryRef.current?.getBoundingClientRect().x,
    //   behavior: "smooth",
    // });
    galleryRef.current?.children[index].scrollIntoView({
      behavior: "smooth",
      // inline: "start",
      inline: "center",
      // inline: "end",
      block: "nearest",
    });
  }

  function handleScrollPrevious() {
    setViewedIndex((prev) => {
      let newViewedIndex = viewedIndex > 0 ? viewedIndex - 1 : 0;
      scrollToIndex(newViewedIndex);
      return newViewedIndex;
    });
  }

  function handleScrollNext() {
    setViewedIndex((prev) => {
      let newViewedIndex =
        viewedIndex < projects.length - 1 ? viewedIndex + 1 : 0;
      scrollToIndex(newViewedIndex);
      return newViewedIndex;
    });
  }

  useEffect(() => {
    function scrollHandler() {
      const scrollLeft = galleryRef.current?.scrollLeft!;
      setScrolled(scrollLeft);
    }
    // scroll to the beginning of the gallery on init
    // scrollToIndex(viewedIndex);
    // trigger the scroll handler on init to disable buttons
    scrollHandler();
    // sub and unsub the scroll event listener
    galleryRef.current?.addEventListener("scroll", scrollHandler);
    galleryRef.current?.addEventListener("resize", scrollHandler);
    return () => {
      galleryRef.current?.removeEventListener("scroll", () => {});
      galleryRef.current?.removeEventListener("resize", () => {});
    };
  }, []);

  return (
    <>
      <p className="pt-16 pb-8 font-serif text-2xl md:text-3xl lg:text-4xl">
        {title}
      </p>

      <div
        ref={galleryRef}
        className={`overflow-x-hidden flex w-full gap-8 pb-8`}
        style={{ scrollbarWidth: "none" }}
      >
        {projects.map((project, index) => (
          <div key={index} className="flex-shrink-0 max-w-full md:max-w-80">
            <img src={project.image} alt={project.title} />
            <p className="py-8 font-serif font-light text-2xl md:text-3xl lg:text-4xl">
              {project.title}
            </p>
            <div className="flex">
              <AccentLinkA to="#footer" title="CONTACT SALES" />
            </div>
          </div>
        ))}
      </div>

      <div className="ml-auto flex gap-8 justify-around w-52">
        <button disabled={scrolled <= 0} onClick={handleScrollPrevious}>
          <img
            className={`transition-opacity rotate-90 ${
              scrolled <= 0 ? "opacity-25" : ""
            }`}
            src="/images/vector/arrow.svg"
            alt="View previous image"
          />
        </button>
        <button onClick={handleScrollNext}>
          <img
            className={`transition-opacity -rotate-90`}
            src="/images/vector/arrow.svg"
            alt="View previous image"
          />
        </button>
      </div>
    </>
  );
}

import { AccentLinkA } from "./AccentLink";

export function WorkTogetherBanner() {
  return (
    <>
      <div className="w-full bg-bg-secondary text-bg mt-8">
        <div className="container flex justify-center py-32">
          <div>
            <p className="font-serif text-3xl md:text-4xl">
              Let's work together.
            </p>
            <div className="flex justify-end pt-3">
              <AccentLinkA to="#footer" title="REACH OUT" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

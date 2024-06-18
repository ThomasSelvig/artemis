import { Link } from "react-router-dom";
import { AccentLink } from "./AccentLink";

export function PageTeaser({
  link,
  description,
  image,
  alt,
  linkTo,
  flipped,
}: {
  link: string;
  description: string;
  image: string;
  alt: string;
  linkTo: string;
  flipped: boolean;
}) {
  return (
    <>
      <div
        className={`flex justify-center flex-col md:flex-row items-center py-16 ${
          flipped ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="max-w-96">
          <Link to={linkTo}>
            <img className="inline-block" src={image} alt={alt} />
          </Link>
        </div>
        <div
          className={`max-w-96 pt-3 md:pt-0 ${
            flipped ? "md:mr-4 lg:mr-8" : "md:ml-4 lg:ml-8"
          }`}
        >
          <span>{description}</span>
          <div className="flex justify-end md:justify-normal pt-6">
            <AccentLink to={linkTo} title={link} />
          </div>
        </div>
      </div>
    </>
  );
}

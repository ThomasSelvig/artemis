import { Link } from "react-router-dom";

export function Footer() {
  return (
    <>
      <footer
        id="footer"
        className="pt-32 pb-16 bg-bg-secondary text-fg-heading-light"
      >
        <div className="flex flex-col justify-between items-center h-48">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <img
              src="/images/vector/artemis-logo-inverse.svg"
              alt="Artemis Logo"
              className="w-20"
            />
          </Link>
          <div>
            <p>This is a mock brand for my webdev portfolio.</p>
            <p>
              Contact me at{" "}
              <a href="mailto:thomas.selvig.02@gmail.com" className="underline">
                thomas.selvig.02@gmail.com
              </a>
            </p>
            <p>
              View my portfolio at{" "}
              <a
                className="underline"
                href="https://thomass.no"
                target="_blank"
                rel="noopener noreferrer"
              >
                thomass.no
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

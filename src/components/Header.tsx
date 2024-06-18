import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="container mx-auto grid grid-cols-3 mt-16 self-center px-4">
      <Link to="/" className="col-start-2 mx-auto">
        <img src="/images/vector/artemis-logo.svg" alt="Artemis Logo" />
      </Link>
      {/* <div className="w-10 h-10 flex flex-col justify-evenly col-start-3 ml-auto self-center">
        <div className="w-full h-1 bg-accent"></div>
        <div className="ml-auto w-3/4 h-1 bg-accent"></div>
      </div> */}
    </header>
  );
}

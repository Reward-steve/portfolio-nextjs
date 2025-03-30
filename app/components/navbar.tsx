import Button from "./buttons";
import Link from "next/link";

const mapNavigation = [
  { path: "#about", linkName: "About Me" },
  { path: "#", linkName: "Projects I've Done" },
  { path: "#contact", linkName: "Contact Me" },
];

export default function Navigation() {
  return (
    <nav className="flex justify-between items-center">
      <Link
        href="/"
        className="rounded-full border-1 p-3 border-cyan-400 text-cyan-400 font-bold text-2xl"
      >
        RS
      </Link>
      <ul className="flex h-full justify-between items-center w-1/2">
        {mapNavigation.map((nav, key) => {
          return (
            <li key={key}>
              <Link className="navlink-effect flex flex-col" href={nav.path}>
                {nav.linkName}
                <span className="w-0 h-[1px] bg-cyan-400"></span>
              </Link>
            </li>
          );
        })}
        <Button text="Resume" />
      </ul>
    </nav>
  );
}

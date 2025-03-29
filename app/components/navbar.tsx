import Button from "./buttons";
import Link from "next/link";

const mapNavigation = [
  { path: "#about", linkName: "About Me" },
  { path: "#", linkName: "Projects I've Done" },
  { path: "/", linkName: "Contact Me" },
];

export default function Navigation() {
  return (
    <nav className="p-5 flex justify-between items-center">
      <Link
        href="/"
        className="rounded-full border-1 p-3 border-cyan-400 text-cyan-400 font-bold text-2xl"
      >
        RS
      </Link>
      <ul className="flex h-full justify-evenly items-center w-1/2">
        {mapNavigation.map((nav, key) => {
          return (
            <li
              key={key}
              className="hover:text-cyan-400 hover:underline underline-offset-6 transition duration-300 ease-in-out"
            >
              <Link href={nav.path}>{nav.linkName}</Link>
            </li>
          );
        })}
        <Button text="Resume" />
      </ul>
    </nav>
  );
}

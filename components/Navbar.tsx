import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const NavIcons = [
    { src: "/assets/icons/search.svg", alt: "Search" },
    { src: "/assets/icons/black-heart.svg", alt: "Heart" },
    { src: "/assets/icons/user.svg", alt: "User" },
  ];
  return (
    <header className="w-full">
      <nav className="nav">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/icons/logo.svg"
            width="27"
            height="27"
            alt="Logo"
          />
          <p className="nav-logo">
            Price<span className="text-primary">Wise</span>
          </p>
        </Link>
        <div className="flex items-center gap-5">
          {NavIcons.map((icons) => (
            <Image
              className="object-container"
              width="28"
              height="28"
              key={icons.alt}
              src={icons.src}
              alt={icons.alt}
            />
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";

type Page = {
  title: string;
  path: `/${string}`;
  subpages?: Page[];
};

const pages: Page[] = [
  { title: "Home", path: "/" },
  { title: "NewsAndBlog", path: "/newsAndBlog" },
  {
    title: "Store",
    path: "/store",
    subpages: [
      { title: "Clothing", path: "/store/clothing" },
      { title: "Electronics", path: "/store/electronics" },
      { title: "Books", path: "/store/books" }
    ]
  },
  { title: "Community", path: "/community" },
  { title: "AccountAndOrders", path: "/accountAndOrders" }
];

// Convert `processPage` into a functional component
function ProcessPage({ page, pathname }: { page: Page; pathname: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current); // Clear any previous timeout
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 300); // Add a 300ms delay before closing
  };

  return (
    <li
      className="relative group"
      onMouseEnter={handleMouseEnter} // Trigger open on hover
      onMouseLeave={handleMouseLeave} // Trigger close after delay
    >
      <Link
        href={page.path}
        className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
          pathname.startsWith(page.path)
            ? "bg-yellow-400 text-gray-900"
            : "text-white hover:bg-yellow-400 hover:text-gray-900"
        }`}
      >
        {page.title}
      </Link>
      {page.subpages && isOpen && (
        <ul className="absolute left-0 mt-2 w-48 bg-white text-gray-900 shadow-lg rounded-md">
          {page.subpages.map((subpage, subIndex) => (
            <li
              key={subIndex}
              className="p-2 hover:bg-gray-100 hover:text-blue-600 rounded-md"
            >
              <Link href={subpage.path}>{subpage.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-blue-600 sticky top-0 z-50 shadow-md">
      <ul className="flex justify-center space-x-6 py-4 px-6 max-w-7xl mx-auto">
        {pages.map((page, index) => (
          <ProcessPage key={index} page={page} pathname={pathname} />
        ))}
      </ul>
    </nav>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter, usePathname } from "next/navigation";

const basePath = "/personalwebsite";

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className = "" }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Define navigation items with IDs and labels. Use a path (leading slash) to indicate a route.
  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "/experience", label: "Experience" },
    { id: "/projects", label: "Projects" },
  ];

  // Handle scroll events to update navbar appearance and active section for in-page sections
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 20);

      // Only consider nav items that are in-page IDs (not routes)
      const sections = navItems.filter((it) => !it.id.startsWith("/")).map((it) => it.id);
      const sectionElements = sections.map((id) => document.getElementById(id));

      sectionElements.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop - 120;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sections[index]);
          }
        }
      });
    };

    // If current pathname is a route (e.g., /projects), set activeSection accordingly and skip scroll listener
    if (pathname && pathname.startsWith("/")) {
      // If we are on the projects page, highlight /projects
      if (pathname === "/projects") {
        setActiveSection("/projects");
      }
      // still attach scroll for when user navigates back to home
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [pathname]);

  // Navigate or scroll to section
  const scrollOrNavigate = (sectionId: string) => {
    setIsOpen(false);
    if (sectionId.startsWith("/")) {
      const target = sectionId.startsWith(basePath) ? sectionId : basePath + sectionId;
      router.push(target);
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      return;
    }

    // If element not found, navigate to home and then attempt to scroll after navigation completes
    // Use a small delay to allow the page to render the section on the home route.
    router.push(basePath + "/");
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 bg-background",
        scrolled ? "shadow-md py-2" : "py-4",
        className,
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo/Name */}
        <Link
          href="/"
          className="text-xl font-bold text-navy hover:text-light-blue transition-colors"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-500">Abhiraam Aremanda</span>
        </Link>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex flex-1 justify-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollOrNavigate(item.id)}
              className={cn(
                "relative group capitalize text-gray-600 transition-colors duration-100",
                activeSection === item.id && "text-[#98d6ff] font-medium"
              )}
            >
              {item.label}
              <span
                className={
                  "absolute bottom-0 left-0 h-0.5 w-full origin-center scale-x-0 transform bg-[#98d6ff] group-hover:animate-underline-hover duration-400"
                }
              />
            </button>
          ))}
        </div>

        {/* Right side: PDF icon */}
        {/* Right side: PDF icon removed */}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 hover:text-light-blue"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-card border-t border-gray-700 py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollOrNavigate(item.id)}
                className={cn(
                  "capitalize text-left py-2 px-4 rounded-md hover:bg-gray-50",
                  activeSection === item.id
                    ? "text-light-blue font-medium"
                    : "text-gray-600",
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

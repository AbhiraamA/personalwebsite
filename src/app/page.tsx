"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaJsSquare, FaSwift, FaHtml5, FaCss3, FaAngular, FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt, FaFigma } from 'react-icons/fa';
import { SiTypescript, SiR, SiPostgresql, SiMysql, SiSpringboot, SiNextdotjs, SiTailwindcss, SiPandas, SiNumpy, SiScikitlearn, SiPytorch, SiJunit5, SiKubernetes, SiXcode, SiVim } from 'react-icons/si';
import { Braces, ExternalLink } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import workTimelineStyles from './WorkTimeline.module.css';
import { VscVscode } from 'react-icons/vsc';

// basePath used to resolve static assets when deployed to a subpath (matches Navbar.tsx)
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import ImageCarousel, { GalleryItem } from "@/components/ImageCarousel";
import { ProjectCarousel, Project } from "@/components/ProjectCarousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
function getRandomPositionAndColor(safeZone: { top: number; left: number; bottom: number; right: number }, iconSize = 48) {
  const colors = [
    '#b1dd53', // green
    '#7ec4cf', // blue
    '#f59e42', // orange
    '#a259ff', // purple
    '#34d399', // teal
    '#f43f5e', // red
    '#593bc6', // indigo
    '#FFD700', // yellow
  ];
  let top, left, attempts = 0;
  do {
  

    top = Math.random() * 80 + 5; // 5% to 85%
    left = Math.random() * 80 + 5; // 5% to 85%
    attempts++;
  } while (
    top > safeZone.top && top < safeZone.bottom &&
    left > safeZone.left && left < safeZone.right &&
    attempts < 20
  );
  const color = colors[Math.floor(Math.random() * colors.length)];
  return { top: `${top}%`, left: `${left}%`, color };
}

function TypewriterWords({ words, color = "#98d6ff", typingSpeed = 100, pause = 1200 }: { words: string[]; color?: string; typingSpeed?: number; pause?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const currentWord = words[wordIndex];

    if (!isDeleting && charIndex < currentWord.length) {
      timeout = setTimeout(() => {
        setDisplayed(currentWord.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(currentWord.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, typingSpeed / 2);
    } else if (!isDeleting && charIndex === currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, words, typingSpeed, pause]);

  return (
    <span style={{ color, fontWeight: "bold" }}>
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

function FloatingIcons() {
  // Minimal placeholder to avoid heavy animation code; return null to keep layout stable
  return null;
}

// function RotatingWords({ words, color = 'white' }: { words: string[]; color?: string }) {
//   const [index, setIndex] = useState(0);
//   const [prevIndex, setPrevIndex] = useState(0);
//   const [animating, setAnimating] = useState(false);

//   useEffect(() => {

// =================================================
// ----TECH STACK LANGUAGES PART----

export default function Home() {
  const ref1 = useRef(null);
  const inView1 = useInView(ref1, { once: false, amount: 0.9 });
  const ref2 = useRef(null);
  const inView2 = useInView(ref2, { once: false, amount: 0.9 });
  const ref3 = useRef(null);
  const inView3 = useInView(ref3, { once: false, amount: 0.95 });
  const ref4 = useRef(null);
  const inView4 = useInView(ref4, { once: false, amount: 0.9 });
  const nameRef = useRef(null);
  const nameInView = useInView(nameRef, { once: false, amount: 0.5 });
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { amount: 0, once: false });

  // Variants for text animation (sliding in from left, standard out)
  const textVariants = {
    hidden: { x: -100, opacity: 0, transition: { duration: 0.5 } },
    visible: { x: 0, opacity: 1, transition: { duration: 1.5 } },
  };

  // Variants for the 3rd paragraph (faster hidden transition)
  const textVariantsP3 = {
    hidden: { x: -100, opacity: 0, transition: { duration: 0.4 } },
    visible: { x: 0, opacity: 1, transition: { duration: 1.5 } },
  };

  // Variants for image animation (sliding in from right, faster out)
  const imageVariants = {
    hidden: { x: 100, opacity: 0, transition: { duration: 0.6 } },
    visible: { x: 0, opacity: 1, transition: { duration: 1.2 } },
  };

  // Mock data for the portfolio
  

  // =========EXPERIENCES=======================================

  const experiences = [
    {
      type: "education",
      institution: "University of North Carolina at Chapel Hill",
      role: "B.S. Computer Science, B.S. Statistics & Analytics",
      period: "Aug 2023 - May 2027",
      description:
        "Rising Junior at UNC Chapel Hill.",
    },
    {
      type: "work",
      institution: "Pearson",
      role: "AI Software Engineering Intern",
      period: "June 2025 - Aug 2025",
      description: "Developed AI Agent Workflows to automate test script generation, reducing manual effort by 40%",
      logo: `${basePath}/company-logos/fidelity.png`,
    },
    {
  type: "work",
  institution: "Epic Hire",
  role: "Machine Learning Engineer Intern",
  period: "Sept 2024 - Dec 2024",
  description: "Created a resume-matching algorithm with Python by fine-tuning Hugging Face's JobBERT NLP Transformer on candidate data to provide data-driven job recommendations in Epic Hire's hiring platform",
  logo: `${basePath}/company-logos/epichire.png`,
    },
    {
      type: "work",
      institution: "App Team Carolina",
      role: "IOS Apprentice Programmer",
      period: "Aug 2024 - Dec 2024",
      description: "Applying mobile development practices in Swift/SwiftUI for user design, debugging, and code optimization",
      logo: `${basePath}/company-logos/appteam.jpeg`,
    },
    {
      type: "work",
      institution: "UNC Chapel Hill Department of Biostatistics",
      role: "Undergraduate Research Assistant",
      period: "June 2024 - Aug 2024",
      description: "Examined genetic sequencing data and performed statistical regression tests to identify significant genetic patterns and trends in infected cells under Dr. Fei Zou",
      logo: `${basePath}/company-logos/unc.png`,
    },
    // {
    //   type: "work",
    //   institution: "Empty",
    //   role: "Undergraduate",
    //   period: "2022 - 2023",
    //   description: "Conducted data analysis and machine learning research",
    // },
    // {
    //   type: "work",
    //   institution: "Empty",
    //   role: "Undergraduate",
    //   period: "2022 - 2023",
    //   description: "Conducted data analysis and machine learning research",
    // },
  ];
  
  // Split experiences
  const educationExperiences = experiences.filter(exp => exp.type === "education");
  const workExperiences = experiences.filter(exp => exp.type === "work");

  // =========================================
  // ==================CLUBS==================

  const clubs = [
    {
      name: "App Team Carolina",
      role: "IOS Apprentice Developer",
      description: "Applying and learning advanced IOS skills for App Development and Production",
      image: `${basePath}/clubs/appteamlogo.jpeg`,
      link: "https://appteamcarolina.com/",
    },
    {
      name: "Kappa Theta Pi",
      role: "Community Service Director",
      description: "Professional Co-Ed Technology and Computer Science Organization at UNC",
      image: `${basePath}/clubs/ktp_unc_logo.jpeg`,
      roleColor: "text-blue-600",
      link: "https://www.ktpunc.com/",
    },
    {
      name: "AI@UNC",
      role: "",
      description: "Gaining hands-on practice working with AI libraries and frameworks & understanding the of uses of AI",
      image: `${basePath}/clubs/aiclubunc.jpeg`,
      link: "https://heellife.unc.edu/organization/aiunc",
    },
    {
      name: "UNC Club Tennis",
      role: "",
      description: "Among the Top 15 Players on the UNC Club Tennis team, traveling to numerous tournaments across different states",
      image: `${basePath}/clubs/Club_Tennis.JPG`,
      link: "https://heellife.unc.edu/organization/club-tennis",
    },
    {
      name: "Asian American Students Association",
      role: "",
      description: "Engaging with students to help promote Asian culture & traditions while fostering community with students of Asian descent",
      image: `${basePath}/clubs/AASA_UNC.jpeg`,
      link: "https://heellife.unc.edu/organization/aasa",
    },
  ];
  
  // --- Small sample data used by the new carousel/tech sections ---

  const aboutGallery: GalleryItem[] = [
  { src: `${basePath}/landingpage/headshot.jpeg`, title: "Headshot", blurb: "A professional headshot." },
  { src: `${basePath}/landingpage/baseball.jpg`, title: "Baseball Film Crew", blurb: "Me on the job capturing film at a baseball game." },
  { src: `${basePath}/landingpage/Dog.jpg`, title: "My Dog", blurb: "My dog, always up for an adventure." },
  { src: `${basePath}/landingpage/food.jpg`, title: "Good Food", blurb: "Some good eats." },
  { src: `${basePath}/landingpage/hurricanes.jpg`, title: "Hurricanes Game", blurb: "Me at a Hurricanes hockey game." },
  { src: `${basePath}/landingpage/IMG_6744.jpg`, title: "Mountain Views", blurb: "Me at the mountains." },
  ];
  // ------------------------------------------------------------------------------

  const isMobile = useIsMobile();

  const fadeInVariants = {
    hidden: { opacity: 0, transition: { duration: 0.3 } },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      {/* LANDING SECTION (new) ================================================================ */}
      <section id="landing" className="relative min-h-[100vh] flex items-center py-32 mb-32">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-8 px-4">
          {/* LEFT: Intro text */}
          <div className="flex-1 text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-3">Hello! <span className="inline-block align-middle">👋</span></h1>
            <h2 className="text-4xl md:text-5xl font-bold text-sky-400 mb-5">I'm <span className="text-[#2EA0FF]">Abhi Aremanda</span></h2>
            <p className="text-3xl md:text-4xl text-[#98d6ff] font-semibold">
              <TypewriterWords words={["Software Engineer", "Machine Learning Engineer", "Data Scientist", "Data Analyst", "Researcher", "Eagle Scout", "Athlete", "Writer", "Developer", "six seven"]} />
            </p>
          </div>

          {/* RIGHT: Illustration */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              <img src="/landingpage/lander.png" alt="landing image" className="rounded-2xl shadow-2xl w-full object-cover max-h-[520px]" />
              <img src={`${basePath}/landingpage/lander.png`} alt="landing image" className="rounded-2xl shadow-2xl w-full object-cover max-h-[520px]" />
            </div>
          </div>
        </div>
        {/* Optional: Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <span className="text-white text-lg animate-bounce">Scroll down</span>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white animate-bounce mt-2" viewBox="0 0 24 24"><path d="M12 5v14m7-7-7 7-7-7"/></svg>
        </div>
      </section>
      {/* ABOUT ME SECTION================================================ */}

{/* ABOUT ME (same layout, carousel on the right) */}
<section id="about" className="relative py-16 px-4 md:px-8 bg-card min-h-[80vh]">
  {/* overlay behind all the content */}
  <div className="absolute inset-0 bg-card/80 -z-10" />
  <div className="container mx-auto max-w-6xl">
  <div className="flex flex-col items-center mb-8">
  <h2 className="text-3xl font-bold text-white text-center">About Me</h2>
        <div className="flex justify-center items-center w-3/4 max-w-[240px] mx-auto mt-2">
          <div className="h-0.5 w-full bg-blue-400 rounded" />
        </div>
    </div>

    <div className="flex flex-col md:flex-row gap-8 items-start">
      {/* LEFT: your text (unchanged) */}
      <div className="flex-1">
        {isMobile ? (
          <>
            <p className="text-base sm:text-lg mb-6">
              Hi! My name is Abhi Aremanda and I am currently a student at UNC Chapel Hill 
              studying Computer Science and Statistics.
            </p>
            <p className="text-base sm:text-lg mb-6">
              I love solving problems, exploring how technology can help us see and understand more, and turning raw information into something clear, useful, and actionable.
              I first got into data through sports analytics, where I saw how numbers could reveal hidden patterns in performance and strategy.
              I developed a strong interest in data engineering, realizing how powerful analytics and models can become when supported by robust infrastructure. I’m also deeply interested in machine learning and computer vision, and excited by their potential to drive innovation and practical solutions across a wide range of fields and industries.
            </p>
            <p className="text-base sm:text-lg mb-6">
              I’m a big sports fan who loves everything North Carolina sports, and a proud Arsenal supporter. I also enjoy the outdoors, cooking, and film.
            </p>
          </>
        ) : (
          <>
            <motion.p
              ref={ref1}
              variants={textVariants}
              initial="hidden"
              animate={inView1 ? "visible" : "hidden"}
              transition={{ delay: 0.1 }}
              className="text-lg mb-6"
            >
              Hi! My name is Abhiraam Aremanda and I am currently a student at UNC Chapel Hill 
              studying Computer Science and Statistics.
            </motion.p>
            <motion.p
              ref={ref2}
              variants={textVariants}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
              transition={{ delay: 0.2 }}
              className="text-lg mb-6"
            >
              I love solving problems, exploring how technology can help us see and understand more, and turning raw information into something clear, useful, and actionable.
              I first got into data through sports analytics, where I saw how numbers could reveal hidden patterns in performance and strategy.
              I developed a strong interest in data engineering, realizing how powerful analytics and models can become when supported by robust infrastructure. I’m also deeply interested in machine learning and computer vision, and excited by their potential to drive innovation and practical solutions across a wide range of fields and industries.
            </motion.p>
            <motion.p
              ref={ref3}
              variants={textVariantsP3}
              initial="hidden"
              animate={inView3 ? "visible" : "hidden"}
              transition={{ delay: 0.2 }}
              className="text-lg mb-6"
            >
              I am interested in internships and research opportunities in software engineering,data science, machine learning, data infrastructure, and related fields. I’m eager to apply my skills and learn from experienced professionals in real-world settings.
            </motion.p>
            <motion.p
              ref={ref3}
              variants={textVariantsP3}
              initial="hidden"
              animate={inView3 ? "visible" : "hidden"}
              transition={{ delay: 0.2 }}
              className="text-lg mb-6"
            >
              Feel free to reach out to me via email at <a href="mailto:aremanda.abhi@gmail.com" className="text-blue-500 underline">aremanda.abhi@gmail.com</a>.
            </motion.p>
          </>
        )}
      </div>

      {/* RIGHT: replace headshot with the sliding carousel */}
      <div className="w-full md:w-[22rem] md:self-start md:mt-[-2rem] md:ml-8">
        {/* square carousel roughly the size of your old headshot */}
        <ImageCarousel
          items={aboutGallery}
          aspect="aspect-square"
          className="rounded-2xl"
        />
      </div>
    </div>
  </div>
</section>


      {/* Experience moved to its own route: /experience */}

  

      

      {/* Projects moved to their own route: /projects */}

      {/* TECH STACK SECTION================================================ */}

      {/* Tech section removed from homepage per request */}


      {/* Footer */}
  <footer className="bg-card text-white py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-lg font-semibold">Abhiraam Aremanda</p>
              <p className="text-sm opacity-75">
                Computer Science & Statistics @ UNC Chapel Hill
              </p>
            </div>
            <div className="flex gap-4">
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 rounded-full"
              >
                <Link
                  href="https://github.com/AbhiraamA"
                  target="_blank"
                  aria-label="GitHub"
                >
                  <FontAwesomeIcon icon={faGithub} className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 rounded-full"
              >
                <Link
                  href="https://www.linkedin.com/in/abhiraam-aremanda/"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 rounded-full"
              >
                <Link href="mailto:aremanda.abhi@gmail.com" target="_blank" aria-label="Email">
                  <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <Separator className="my-6 bg-card/20" />
          <p className="text-center text-sm opacity-75">
            © {new Date().getFullYear()} Abhiraam Aremanda. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [breakpoint]);
  return isMobile;
}

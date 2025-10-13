
"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { GalleryItem } from "@/components/ImageCarousel";

// We'll reuse arrays from the main page by importing them would be ideal but to keep this simple
// we'll recreate minimal sample data here. If you want to reuse the exact arrays, we can
// export them from a shared module.

const projects = [
    {
      title: "Coach Success Modeling – San Francisco 49ers",
      description: "Collaborated with the San Francisco 49ers to model how past experience can predict future coaching success.",
  image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logos/coach-success.png`,
      tech: ["Python", "Pandas", "scikit-learn", "Excel"],
      github: "https://github.com/AbhiraamA"
    },
    {
  title: "Milwaukee Bucks Business Analytics Hackathon",
  description: "Placed 2nd for developing a model that predicted purchase likelihood for new partial ticket plans.",
  image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logos/buckshack.png`,
  tech: ["Python", "scikit-learn", "Pandas", "Matplotlib"],
  github: "https://github.com/AbhiraamA"
},
    {
      title: "Pearson",
      description: "Built dynamic agent generation workflows using CrewAI to automate test script generation",
  image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logos/pearsonlog.png`,
      tech: ["Python", "CrewAI"],
      github: "https://github.com/AbhiraamA"
    },
    {
      title: "EpicHire Recommendation Engine",
      description: "Developed a club–employer recommendation engine using jobBERT embeddings.",
  image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logos/epichire_logo.jpeg`,
      tech: ["Python", "Pandas", "scikit-learn", "jobBERT"],
      github: "https://github.com/AbhiraamA"
    },
    {
      title: "AI Study Buddy",
      description: "Created an intelligent study assistant that leverages structured knowledge bases to generate adaptive questions.",
  image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logos/study-buddy.png`,
      tech: ["Python", "FastAPI", "PostgreSQL", "PyTest", "OpenAI 04-mini"],
      github: "https://github.com/AbhiraamA"
    },
    {
      title: "The Traveling Tourist Problem",
      description: "Hackathon-winning web app using Tour-Pedia API to recommend hidden attractions and build itineraries for lesser-known destinations.",
  image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logos/tourist.gif`,
      tech: ["JavaScript", "HTML", "CSS", "Python", "Tour-Pedia API"],
      github: "https://github.com/AbhiraamA"
    }
];

export default function ProjectsPage() {
  // Use the single projects array

  return (
    <div className="min-h-screen">
      <Navbar />
      <section id="projects" className="py-24 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-3xl font-bold text-white text-center">Projects and Work</h2>
            <div className="flex justify-center items-center w-3/4 max-w-[240px] mx-auto mt-2">
              <div className="h-0.5 w-full bg-blue-400 rounded" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-4">
            {projects.map((project: any, idx: number) => (
              <a
                key={idx}
                href={project.github || project.link || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative w-full h-96 overflow-hidden transition-shadow flex flex-col items-center justify-start px-6 py-4 rounded-2xl bg-white text-[#13294B] hover:shadow-[0_0_32px_8px_#38bdf8,0_0_0_4px_#0ea5e9] hover:border-[#0ea5e9] border border-border">
                  <div className="w-full h-48 flex items-center justify-center mb-2 z-0">
                    <img src={project.image} alt={project.title} className="object-contain rounded-lg max-h-44 max-w-full" />
                  </div>
                  <div className="flex flex-col items-center justify-center flex-1 w-full text-center z-0">
                    <h4 className="text-lg font-bold mb-1 text-[#13294B]">{project.title}</h4>
                    <p className="text-sm mb-2 text-[#13294B]">{project.description}</p>
                    {project.tech && (
                      <div className="flex flex-wrap gap-2 justify-center mt-2">
                        {project.tech.map((tech: string, i: number) => (
                          <span key={i} className="px-3 py-1 rounded bg-[#e3e9f4] text-[#13294B] text-xs font-semibold">{tech}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <Separator className="my-6" />
    </div>
  );
}

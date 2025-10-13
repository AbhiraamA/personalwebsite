"use client";
import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from "@/components/Navbar";
import workTimelineStyles from "@/app/WorkTimeline.module.css";

// Experience data: only title, company, and dates
const experiences = [
  { role: "Data Science Intern", institution: "New York Red Bulls", startDate: "2025-09-01", endDate: "Present", image: "/logos/New_York_Red_Bulls_logo.svg.png" },
  { role: "Data Analyst", institution: "Carolina Baseball", startDate: "2024-09-01", endDate: "Present", image: "/logos/baseball log.jpeg" },
  { role: "Software Engineer Intern", institution: "Pearson", startDate: "2025-06-01", endDate: "2025-08-31", image: "/logos/pearsonlog.png" },
  { role: "Research Assistant", institution: "UNC School of Medicine", startDate: "2024-07-01", endDate: "2025-03-31", image: "/logos/fmri-log.png" },
  { role: "Machine Learning Intern", institution: "Epic Hire, Inc.", startDate: "2024-09-01", endDate: "2024-11-30", image: "/logos/epichire_logo.jpeg" },
  { role: "Project Team Member", institution: "CS+Social Good", startDate: "2024-01-01", endDate: "2024-05-31", image: "/logos/unc-cs-sg.jpeg" },
];

// Helper to format dates from YYYY-MM-DD or show Present
function formatDate(d?: string): string {
  if (!d) return "";
  if (/present/i.test(d)) return "Present";
  try {
    return new Date(d).toLocaleString('en-US', { month: 'short', year: 'numeric' });
  } catch {
    return String(d);
  }
}

const clubs = [
  {
    name: "UNC CS Ambassadors",
    role: "Ambassador",
    description: "Representing and supporting the UNC Computer Science Department at outreach, recruitment events, and mental health initiatives.",
    image: "/logos/UNC-Computer-Science.png",
    link: "https://cs.unc.edu/student-life/unc-cs-student-ambassador-program/#:~:text=Student%20Ambassadors%20(SAs)%20are%20a,UNC%20alumni%2C%20and%20business%20professionals.",
  },
  {
    name: "Kappa Theta Pi",
    role: "Treasurer",
    description: "Professional Co-Ed Technology and Computer Science Organization at UNC",
    image: "/clubs/ktp_unc_logo.jpeg",
    roleColor: "text-blue-600",
    link: "https://www.ktpunc.com/",
  },
  {
    name: "Carolina AR/VR Club",
    role: "Member/Developer",
    description: "Exploring and building augmented and virtual reality projects with UNC's AR/VR community.",
    image: "/logos/CARVR-logo-white.avif",
    link: "https://arvr.web.unc.edu/",
  },
  {
    name: "HackNC",
    role: "Logistics Board",
    description: "Organizing and participating in UNC's largest hackathon and tech community.",
    image: "/logos/hacknc-2024.avif",
    link: "https://hacknc.com/",
  },
  {
    name: "Special Olympics Club",
    role: "Volunteer",
    description: "Supporting and volunteering for Special Olympics events and athletes at UNC.",
    image: "/logos/UNC-SO.jpeg",
    link: "https://www.instagram.com/unc_so/",
  },
];

export default function ExperiencePage() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const el = timelineRef.current;
    if (!el) return;
    const check = () => {
      setCanScrollLeft(el.scrollLeft > 10);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
    };
    check();
    el.addEventListener('scroll', check);
    window.addEventListener('resize', check);
    return () => {
      el.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <section id="experience" className="py-24 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-3xl font-bold text-white text-center">Experience</h2>
            <div className="flex justify-center items-center w-3/4 max-w-[240px] mx-auto mt-2">
              <div className="h-0.5 w-full bg-blue-400 rounded" />
            </div>
          </div>
          <div className="overflow-x-auto">
            <div className="relative">
              <button
                onClick={() => {
                  const c = timelineRef.current;
                  if (c) c.scrollBy({ left: -Math.round(c.clientWidth * 0.85), behavior: 'smooth' });
                }}
                disabled={!canScrollLeft}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-card/80 hover:bg-card p-2 rounded-full shadow-md ml-2"
              >
                <ChevronLeft size={20} />
              </button>
              <div ref={timelineRef} className={workTimelineStyles['horizontal-timeline-container']}>
                <div className={workTimelineStyles['horizontal-timeline-line']} />
                {experiences
                  .sort((a, b) => {
                    // Sort by startDate descending (most recent leftmost)
                    const startVal = (x: any) => {
                      if (!x.startDate) return 0;
                      if (/present/i.test(x.startDate)) return 999999;
                      const d = new Date(x.startDate);
                      return d.getTime();
                    };
                    return startVal(b) - startVal(a);
                  })
                  .map((exp, idx) => (
                    <div key={idx} className={workTimelineStyles['horizontal-timeline-item']} style={{ position: 'relative' }}>
                      <div className={`${workTimelineStyles['horizontal-timeline-card']} group flex items-center justify-between`}>
                        <div className="flex flex-col items-start flex-1 pr-4">
                          <div className="text-sm text-[#38bdf8] font-medium">{formatDate(exp.startDate)} - {formatDate(exp.endDate)}</div>
                          <div className="font-bold text-lg" style={{ color: '#13294B' }}>{exp.role}</div>
                          <div className="text-sm text-gray-300">{exp.institution}</div>
                        </div>
                        {exp.image && (
                          <img src={exp.image} alt={exp.institution + ' logo'} className="ml-2 w-14 h-14 object-contain rounded" style={{ background: '#fff' }} />
                        )}
                      </div>
                    </div>
                ))}
              </div>
              <button
                onClick={() => {
                  const c = timelineRef.current;
                  if (c) c.scrollBy({ left: Math.round(c.clientWidth * 0.85), behavior: 'smooth' });
                }}
                disabled={!canScrollRight}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-card/80 hover:bg-card p-2 rounded-full shadow-md mr-2"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* CLUBS SECTION: included on Experience page */}
      <section id="interests" className="py-8 px-4 md:px-8 bg-card">
        <div className="w-full max-w-screen-xl mx-auto">
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-3xl font-bold text-white text-center">Clubs</h2>
            <div className="flex justify-center items-center w-3/4 max-w-[240px] mx-auto mt-2">
              <div className="h-0.5 w-full bg-blue-400 rounded" />
            </div>
          </div>
          <div className="mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-4">
              {clubs.map((club) => {
                const roleColor = club.roleColor ? club.roleColor : "text-[#a855f7]";
                return (
                  <a
                    key={club.name}
                    href={club.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div
                      className="relative w-full h-64 overflow-hidden transition-shadow flex flex-col items-center justify-start px-6 py-4 rounded-1xl bg-white text-black hover:shadow-[0_0_32px_8px_#38bdf8,0_0_0_4px_#0ea5e9] hover:border-[#0ea5e9] border border-border"
                    >
                      <div className="w-full h-20 flex items-center justify-center mb-0 z-0">
                        <img src={club.image} alt={club.name} className="w-16 h-16 object-contain rounded-full" style={{ maxWidth: '80%' }} />
                      </div>
                      <div className="flex flex-col items-center justify-center flex-1 w-full text-center z-0">
                        <h4 className="text-base font-bold mb-1 text-black">{club.name}</h4>
                        {club.role && (
                          <div className={`text-xs italic mb-1 ${roleColor}`}>{club.role}</div>
                        )}
                        <p className="text-xs text-gray-600">{club.description}</p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

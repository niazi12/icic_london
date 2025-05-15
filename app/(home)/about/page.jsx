"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AboutHero from "./AboutHero";
import CompanyOverview from "./CompanyOverview";
import ExpertiseGrid from "./ExpertiseGrid";
import ProjectsShowcase from "./ProjectsShowcase";
import ValuesGrid from "./ValuesGrid";
import AboutCTA from "./AboutCTA";

const About = () => {
  return (
    <main>
      <AboutHero />
      <CompanyOverview />
      <ExpertiseGrid />
      <ProjectsShowcase />
      <ValuesGrid />
      <AboutCTA />
    </main>
  );
};

export default About;

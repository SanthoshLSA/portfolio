import * as React from "react";
import { Mail, Phone, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import LeetCodeIcon from "./LeetCodeIcon";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-3.5rem)] items-center justify-center overflow-hidden py-24 grid-bg">
      {/* Ambient Cosmic Glow Spheres */}
      <div className="absolute top-1/4 left-1/4 h-[400px] w-[400px] rounded-full bg-primary/10 glow-blur -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 h-[450px] w-[450px] rounded-full bg-primary/8 glow-blur -z-10 animate-pulse-slow duration-[10s]" />

      <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <h1 className="text-6xl font-bold tracking-tight sm:text-7xl md:text-8xl lg:text-9xl font-display">
          <span className="block text-muted-foreground font-semibold text-xl sm:text-2xl uppercase tracking-widest mb-6">
            SYSTEM.INIT // HELLO WORLD
          </span>
          <span className="block bg-gradient-to-r from-primary via-white to-primary bg-clip-text text-transparent pb-4 font-extrabold leading-none">
            SANTHOSH ANANTH
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-8 max-w-3xl text-lg sm:text-xl text-muted-foreground leading-relaxed">
          Aspiring AI & Data Science undergraduate at Shiv Nadar University. Crafting high-performance intelligent systems, full-stack web applications, and resolving complex algorithms.
        </p>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-5 font-display">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/85 text-background font-bold tracking-widest uppercase text-sm px-8 py-6 rounded-xl transition-all duration-300 hover:scale-[1.02] border-0"
            asChild
          >
            <a href="#projects">Explore Projects</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/10 hover:border-primary hover:bg-primary/5 text-foreground font-bold tracking-widest uppercase text-sm px-8 py-6 rounded-xl transition-all duration-300 hover:scale-[1.02]"
            asChild
          >
            <a href="/resume.pdf" download="Santhosh_Ananth_Resume.pdf">
              Download CV
            </a>
          </Button>
        </div>

        {/* Social Badges Row */}
        <div className="mt-20 flex items-center justify-center gap-5">
          {[
            { icon: <GithubIcon size={20} />, href: "https://github.com/SanthoshLSA", title: "GitHub" },
            { icon: <LinkedinIcon size={20} />, href: "https://www.linkedin.com/in/santhosh-ananth-0a2602403/", title: "LinkedIn" },
            { icon: <Mail className="h-5 w-5" />, href: "mailto:santhosh.ananth6@gmail.com", title: "Email" },
            { icon: <Phone className="h-5 w-5" />, href: "tel:+918903266557", title: "Phone" },
            { icon: <LeetCodeIcon size={20} />, href: "https://leetcode.com/SanthoshLegendSA/", title: "LeetCode" }
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target={social.href.startsWith("mailto") || social.href.startsWith("tel") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center justify-center h-12 w-12 rounded-xl border border-white/5 bg-slate-950/30 backdrop-blur-sm text-muted-foreground hover:text-primary hover:border-primary hover:shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all duration-300 hover:scale-105"
              title={social.title}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="mt-24 animate-float">
          <a
            href="#about"
            className="inline-flex items-center justify-center text-muted-foreground/80 hover:text-primary transition-colors"
          >
            <ArrowDown className="h-6 w-6 text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
}

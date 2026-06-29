"use client";

import * as React from "react";
import { User, Briefcase, Cpu, FolderGit2, GraduationCap, Trophy, Award, Mail, Home } from "lucide-react";

export default function FloatingNav() {
  const items = [
    { name: "Home", href: "#", icon: <Home className="h-5 w-5" /> },
    { name: "About", href: "#about", icon: <User className="h-5 w-5" /> },
    { name: "Experience", href: "#experience", icon: <Briefcase className="h-5 w-5" /> },
    { name: "Skills", href: "#skills", icon: <Cpu className="h-5 w-5" /> },
    { name: "Projects", href: "#projects", icon: <FolderGit2 className="h-5 w-5" /> },
    { name: "Education", href: "#education", icon: <GraduationCap className="h-5 w-5" /> },
    { name: "Honors", href: "#achievements", icon: <Trophy className="h-5 w-5" /> },
    { name: "Certifications", href: "#certifications", icon: <Award className="h-5 w-5" /> },
    { name: "Contact", href: "#contact", icon: <Mail className="h-5 w-5" /> },
  ];

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3.5 p-3.5 rounded-2xl bg-slate-950/45 backdrop-blur-xl border border-white/8 shadow-2xl">
      {items.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="group relative flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.02] border border-white/5 text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-110 shadow-sm"
          title={item.name}
        >
          {item.icon}
          
          {/* Futuristic Squircle Tooltip */}
          <div className="absolute right-16 top-1/2 -translate-y-1/2 opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 bg-slate-950/90 border border-white/10 text-white text-[10px] uppercase font-display tracking-widest px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl">
            {item.name}
          </div>
        </a>
      ))}
    </div>
  );
}

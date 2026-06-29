"use client";

import * as React from "react";
import { Mail, Phone, MapPin, Send, MessageSquareCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Mock API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute right-1/4 top-1/3 h-[300px] w-[300px] rounded-full bg-primary/5 glow-blur -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center space-x-2.5 rounded-full border border-primary/25 bg-primary/5 px-4.5 py-2 text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider font-display mb-4">
            <MessageSquareCode className="h-4 w-4" />
            <span>Connect</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white font-display uppercase">
            Get In Touch
          </h2>
          <div className="mt-3 mx-auto h-[4px] w-16 rounded bg-primary" />
        </div>

        <div className="grid gap-12 lg:grid-cols-12 max-w-7xl mx-auto">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-2xl font-bold text-white font-display tracking-wide uppercase">Contact Information</h3>
            <p className="text-muted-foreground text-base leading-relaxed font-sans">
              Feel free to reach out to me via email or phone. I usually respond within a few hours.
            </p>

            <div className="space-y-6">
              <Card className="bg-slate-950/20 backdrop-blur-md border border-white/5 hover:border-primary/40 transition-colors group">
                <CardContent className="flex items-center space-x-5 p-5">
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/15 group-hover:bg-primary/10 group-hover:border-primary/30 text-primary transition-colors shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-[11px] sm:text-xs uppercase font-display font-semibold tracking-wider text-muted-foreground">Email</p>
                    <a
                      href="mailto:santhosh.ananth6@gmail.com"
                      className="text-base sm:text-lg font-semibold text-white hover:text-primary transition-colors break-all font-display"
                    >
                      santhosh.ananth6@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-950/20 backdrop-blur-md border border-white/5 hover:border-primary/40 transition-colors group">
                <CardContent className="flex items-center space-x-5 p-5">
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/15 group-hover:bg-primary/10 group-hover:border-primary/30 text-primary transition-colors shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-[11px] sm:text-xs uppercase font-display font-semibold tracking-wider text-muted-foreground">Phone</p>
                    <a
                      href="tel:+918903266557"
                      className="text-base sm:text-lg font-semibold text-white hover:text-primary transition-colors font-display"
                    >
                      +91 890326 6557
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-950/20 backdrop-blur-md border border-white/5 hover:border-primary/40 transition-colors group">
                <CardContent className="flex items-center space-x-5 p-5">
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/15 group-hover:bg-primary/10 group-hover:border-primary/30 text-primary transition-colors shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-[11px] sm:text-xs uppercase font-display font-semibold tracking-wider text-muted-foreground">Location</p>
                    <span className="text-base sm:text-lg font-semibold text-white font-display uppercase tracking-wider">
                      Chennai, Tamil Nadu, India
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <Card className="bg-slate-950/20 backdrop-blur-md border border-white/5 p-8 sm:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs uppercase font-display font-semibold tracking-wider text-muted-foreground">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full rounded-md border border-white/10 bg-slate-950/40 px-4.5 py-3.5 text-base text-white placeholder-muted-foreground/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors font-sans"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs uppercase font-display font-semibold tracking-wider text-muted-foreground">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full rounded-md border border-white/10 bg-slate-950/40 px-4.5 py-3.5 text-base text-white placeholder-muted-foreground/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors font-sans"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs uppercase font-display font-semibold tracking-wider text-muted-foreground">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Internship Role"
                    className="w-full rounded-md border border-white/10 bg-slate-950/40 px-4.5 py-3.5 text-base text-white placeholder-muted-foreground/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors font-sans"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs uppercase font-display font-semibold tracking-wider text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Describe your request..."
                    className="w-full rounded-md border border-white/10 bg-slate-950/40 px-4.5 py-3.5 text-base text-white placeholder-muted-foreground/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors font-sans resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/85 text-background font-bold tracking-widest uppercase text-sm hover:opacity-90 flex items-center justify-center gap-2 mt-4 py-6 rounded-xl border-0 transition-opacity"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="h-4 w-4" /> Send Message
                    </>
                  )}
                </Button>

                {success && (
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-md text-xs sm:text-sm text-center font-semibold mt-3 animate-fade-in font-display tracking-wider uppercase">
                    Message sent successfully.
                  </div>
                )}
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

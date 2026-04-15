/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.3]);
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);

  return (
    <div ref={containerRef} className="relative min-h-[400vh] bg-[#080808] text-white overflow-x-hidden selection:bg-accent/30">
      
      {/* Editorial Background Elements */}
      <div className="fixed top-[-100px] left-[-100px] text-[800px] font-display italic text-white/[0.03] leading-none pointer-events-none z-0 select-none">
        A
      </div>
      <div className="fixed top-0 bottom-0 left-20 w-px bg-white/10 z-1 pointer-events-none" />
      <div className="fixed bottom-10 left-[72px] -rotate-90 origin-left translate-x-1/2 text-[10px] uppercase tracking-[0.2em] text-muted z-10 pointer-events-none">
        Scroll To Explore
      </div>

      {/* Background Video (Cinematic) */}
      <motion.div
        style={{ scale, opacity }}
        className="fixed inset-0 w-full h-full z-0"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover grayscale contrast-125 brightness-[0.2]"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-man-running-on-the-beach-at-sunset-4008-large.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Overlay Gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90 z-0 pointer-events-none" />

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 px-20 py-10 flex justify-between items-end">
        <div className="text-3xl font-display italic tracking-tight">
          An Nguyen<sup className="text-[10px] ml-1 opacity-50 uppercase tracking-widest font-sans not-italic">®</sup>
        </div>

        <div className="hidden md:flex gap-8 text-[12px] uppercase tracking-[0.1em] text-muted">
          <a href="#" className="text-white hover:text-white transition-colors">Intro</a>
          <a href="#" className="hover:text-white transition-colors">About</a>
          <a href="#" className="hover:text-white transition-colors">Work</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </nav>

      {/* Meta Sidebar (Fixed) */}
      <div className="fixed right-20 bottom-20 text-right z-20 hidden lg:block">
        <div className="mb-4">
          <span className="block text-[10px] uppercase tracking-[0.1em] text-muted mb-1">Location</span>
          <span className="font-display italic text-lg">Hanoi, Vietnam</span>
        </div>
        <div className="mb-4">
          <span className="block text-[10px] uppercase tracking-[0.1em] text-muted mb-1">Academic Year</span>
          <span className="font-display italic text-lg">Senior — Class of 2024</span>
        </div>
        <div>
          <span className="block text-[10px] uppercase tracking-[0.1em] text-muted mb-1">Status</span>
          <span className="font-display italic text-lg">Available for projects</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center pl-[140px] pr-20 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-[11px] uppercase tracking-[0.3em] text-accent font-bold mb-6"
          >
            Student & Visionary
          </motion.div>
          
          <motion.h1
            style={{ y: textY }}
            className="text-7xl md:text-[84px] font-display leading-[0.95] tracking-tight max-w-[700px]"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            I am <span className="italic text-accent relative after:content-[''] after:absolute after:bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-accent/30">growing</span> into who I want to become.
          </motion.h1>

          <motion.p
            className="mt-10 text-muted text-lg max-w-[420px] leading-relaxed font-sans"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            High school senior exploring the intersections of identity, design, and technology. Building the foundation for what comes next.
          </motion.p>
        </div>
      </section>

      {/* About Section */}
      <section className="min-h-screen flex flex-col justify-center pl-[140px] pr-20 relative z-10 py-32">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl"
        >
          <div className="text-[11px] uppercase tracking-[0.3em] text-accent font-bold mb-6">
            01 / Profile
          </div>
          
          <h2 className="text-6xl md:text-8xl font-display italic mb-10">About Me</h2>
          <div className="space-y-8 text-xl md:text-2xl text-muted font-sans leading-relaxed">
            <p>
              I am a final-year high school student with a passion for learning and effective communication. 
              I thrive on challenging myself through new experiences and stepping out of my comfort zone.
            </p>
            <p>
              Currently, I am focused on shaping my future path, one intentional step at a time, 
              balancing academic excellence with personal growth and creative exploration.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="min-h-screen flex flex-col justify-center pl-[140px] pr-20 relative z-10 py-32">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl w-full"
        >
          <div className="text-[11px] uppercase tracking-[0.3em] text-accent font-bold mb-6">
            02 / Works
          </div>

          <h2 className="text-6xl md:text-8xl font-display italic mb-20">Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: "Personal Portfolio", category: "Web Design", year: "2024" },
              { title: "School Leadership", category: "Communication", year: "2023" },
              { title: "Creative Writing", category: "Literature", year: "2024" },
              { title: "Community Service", category: "Social", year: "2023" }
            ].map((project, i) => (
              <motion.div 
                key={i}
                whileHover={{ x: 10 }}
                className="group relative border-b border-white/10 pb-12 cursor-pointer"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] uppercase tracking-widest text-muted">{project.year}</span>
                  <span className="text-[10px] uppercase tracking-widest text-accent font-bold">{project.category}</span>
                </div>
                <h3 className="text-4xl font-display italic group-hover:text-accent transition-colors duration-300">{project.title}</h3>
                <p className="mt-4 text-muted text-sm leading-relaxed">Exploring the boundaries of {project.category.toLowerCase()} through dedicated practice and innovation.</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen flex flex-col justify-center pl-[140px] pr-20 relative z-10 py-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <div className="text-[11px] uppercase tracking-[0.3em] text-accent font-bold mb-6">
            03 / Connect
          </div>
          <h2 className="text-7xl md:text-[120px] font-display italic mb-12 tracking-tight leading-none">Let's Talk.</h2>
          <p className="text-muted text-xl md:text-2xl mb-16 max-w-2xl leading-relaxed">
            I'm always open to new opportunities, collaborations, or just a friendly conversation about the future.
          </p>
          
          <a 
            href="mailto:nguyenminhan835@gmail.com" 
            className="inline-block text-2xl font-display italic border-b border-accent text-accent hover:text-white hover:border-white transition-all duration-500"
          >
            nguyenminhan835@gmail.com
          </a>

          <div className="mt-32 flex gap-12 text-[10px] uppercase tracking-[0.2em] text-muted">
            <a href="#" className="hover:text-accent transition-colors">Instagram</a>
            <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-accent transition-colors">GitHub</a>
          </div>
        </motion.div>
      </section>

      {/* Footer Rail */}
      <footer className="relative z-10 py-12 pl-[140px] pr-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest text-white/30">
        <div>&copy; 2024 Personal Portfolio of An Nguyen. All Rights Reserved.</div>
        <div className="flex gap-8">
          <span>High School Senior '24</span>
        </div>
      </footer>

    </div>
  );
}

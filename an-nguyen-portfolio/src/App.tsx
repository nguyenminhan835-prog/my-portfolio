import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.3]);
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);

  return (
    <div ref={containerRef} className="relative min-h-[200vh] bg-[hsl(0,0%,5%)] text-white overflow-x-hidden" style={{ fontFamily: "var(--font-body)" }}>

      {/* Background Video */}
      <motion.video
        style={{ scale, opacity }}
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0 grayscale contrast-125 brightness-75"
      >
        <source src="/running.mp4" type="video/mp4" />
      </motion.video>

      {/* Overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90 z-0" />

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-20 backdrop-blur-md bg-black/30 border-b border-white/10">
        <div className="flex justify-between items-center px-8 py-5 max-w-7xl mx-auto">
          <div className="text-2xl" style={{ fontFamily: "'Instrument Serif', serif" }}>
            An Nguyen<sup className="text-xs">®</sup>
          </div>

          <div className="hidden md:flex gap-8 text-sm text-gray-400">
            <a href="#" className="text-white">Home</a>
            <a href="#about" className="hover:text-white">About Me</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative z-10">
        <motion.h1
          style={{ y: textY, fontFamily: "'Instrument Serif', serif" }} // Đã thêm font điệu cho tiêu đề chính
          className="text-5xl sm:text-7xl md:text-8xl leading-[0.95] max-w-6xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          I am <span className="text-red-500">growing</span> into who I want to become.
        </motion.h1>

        <motion.p
          className="text-gray-400 mt-6 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          I'm a high school senior exploring my identity, building skills, and preparing for the future.
        </motion.p>
      </section>

      {/* About Section - Đã thêm id="about" và font điệu */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl"
        >
          <h2 className="text-4xl mb-6 font-display">About Me</h2> {/* Sửa lại font-display ở đây */}
          <p className="text-gray-400">
            I'm currently a final-year high school student who enjoys learning, communicating, and challenging myself through new experiences. I'm shaping my future step by step.
          </p>
        </motion.div>
      </section>

      {/* Projects Section - Đã thêm id="projects" và font điệu */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl"
        >
          <h2 className="text-4xl mb-6 font-display">Projects</h2> {/* Sửa lại font-display ở đây */}
          <p className="text-gray-400">
            Personal portfolio website, school presentations, and small projects reflecting my learning journey.
          </p>
        </motion.div>
      </section>

      {/* Contact Section - Đã thêm id="contact" và font điệu */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl"
        >
          <h2 className="text-4xl mb-6 font-display">Contact</h2> {/* Sửa lại font-display ở đây */}
          <p className="text-gray-400">Email: annguyen.thachban@gmail.com</p>
        </motion.div>
      </section>

      {/* Fonts, Smooth Scroll & Ép font chữ điệu */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif&family=Inter:wght@400;500&display=swap');

          html {
            scroll-behavior: smooth;
          }

          :root {
            --font-display: 'Instrument Serif', serif;
            --font-body: 'Inter', sans-serif;
          }

          /* Dòng code thần thánh để ép các tiêu đề dùng font chữ điệu */
          .font-display, h2 {
            font-family: var(--font-display);
          }
        `}
      </style>
    </div>
  );
}

import React from "react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 px-4">
      <h1 className="text-5xl md:text-7xl font-bold font-montserrat mb-4">
        Vishwa Sakthivel
      </h1>
      <h2 className="text-3xl md:text-5xl font-montserrat bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent mb-6">
        Java Developer & Marketing Strategist
      </h2>
      <p className="max-w-2xl text-lg md:text-xl mb-8">
        I build impactful web applications and implement data-driven marketing strategies that drive results. Based in India, ready for global challenges.
      </p>
      <div className="flex gap-4">
        <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition">View My Experience</a>
        <a href="YOUR_RESUME_LINK_HERE" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition" target="_blank">Resume</a>
      </div>
    </section>
  );
}

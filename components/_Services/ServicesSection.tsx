"use client";
import * as m from "motion/react-client";
import { SectionName } from "../../app/api/data/data";
import Link from "next/link";
import Button from "../buttons";

export default function ServicesSection() {
  return (
    <section className="mt-20">
      <SectionName title="Services I Offer" />
      <div className="mt-8 space-y-10">
        {/* Overview Intro */}
        <m.p
          className="text-lg leading-relaxed max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          I offer frontend development services focused on building clean, fast,
          and responsive websites. Whether you're a small business, startup, or
          personal brand, I help turn your ideas into user-focused digital
          experiences that load fast, look great, and work seamlessly across all
          devices.
        </m.p>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Business Websites */}
          <m.div
            className="p-6 bg-[#00000040] rounded-xl shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-2">Business Websites</h3>
            <p className="text-lg">
              I design and build multi-page websites that reflect your brand and
              convert visitors into clients. Ideal for personal brands and small
              businesses.
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-sm">
              <li>Home, About, Services, Contact pages</li>
              <li>Contact forms or WhatsApp integrations</li>
              <li>Mobile-first and SEO-ready</li>
              <li>Fast, clean, professional design</li>
            </ul>
          </m.div>

          {/* Landing Pages */}
          <m.div
            className="p-6 bg-[#00000040] rounded-xl shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-2">Landing Pages</h3>
            <p className="text-lg">
              One-page websites built to capture attention and drive action —
              ideal for launches, signups, and promotions.
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-sm">
              <li>Scroll-based storytelling or CTA-focused layouts</li>
              <li>Custom animations and visuals</li>
              <li>Lightning-fast and mobile-friendly</li>
            </ul>
          </m.div>

          {/* UI Frontend Build */}
          <m.div
            className="p-6 bg-[#00000040] rounded-xl shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-2">Frontend Development</h3>
            <p className="text-lg">
              Already have a design or backend team? I can code a modern UI from
              scratch — fast and pixel-perfect — using React, TypeScript, and
              Tailwind CSS.
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-sm">
              <li>Reusable components</li>
              <li>API-ready and scalable structure</li>
              <li>Great for SaaS, dashboards, or MVPs</li>
            </ul>
          </m.div>

          {/* Personal Sites / Portfolios */}
          <m.div
            className="p-6 bg-[#00000040] rounded-xl shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-2">
              Personal Portfolio Sites
            </h3>
            <p className="text-lg">
              Custom portfolio or personal brand sites that tell your story and
              showcase your work — designed to impress.
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-sm">
              <li>Projects, bio, contact, and testimonials</li>
              <li>Fully responsive and performance-optimized</li>
            </ul>
          </m.div>
        </div>

        {/* Contact CTA */}
        <m.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-4">
            Ready to bring your idea to life?
          </h3>
          <p className="text-lg mb-4">
            I take on one client/project at a time to ensure full focus and
            quality. Let’s build something meaningful.
          </p>

          <Button text=" Contact Me" path="/contact_temp" />
        </m.div>
      </div>
    </section>
  );
}

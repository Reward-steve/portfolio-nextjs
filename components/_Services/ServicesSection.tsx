"use client";

import * as m from "motion/react-client";
import { SectionName } from "../../app/api/data/data";
import { services, servicesIntro } from "../../app/api/data/data";
import Button from "../buttons";
import Image from "next/image";

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
          {servicesIntro}
        </m.p>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-12">
          {services.map(
            ({ id, image, title, description, features, delay }) => (
              <m.div
                key={id}
                className="p-6 bg-[#00000040] rounded-xl shadow-md"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay }}
              >
                <Image src={image} alt={title} className="rounded-md mb-3" />
                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                <p className="text-lg">{description}</p>
                <ul className="list-disc list-inside mt-3 space-y-1 text-sm">
                  {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </m.div>
            )
          )}
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

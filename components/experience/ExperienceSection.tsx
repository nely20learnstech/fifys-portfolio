import { experiences } from "@/data/experience";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#FAFAFF] py-24 md:py-32"
    >
      {/* Subtle decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-[#E9E4FF]/50 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <div className="mb-16 max-w-3xl">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-[#5B2CCB]">
            Career Journey
          </span>

          <h2 className="font-heading text-4xl font-extrabold tracking-tight text-[#111747] sm:text-5xl">
            From learning to building.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[#515578] sm:text-lg">
            Every experience has shaped how I approach software engineering,
            from developing practical applications to establishing standards
            for secure and maintainable software.
          </p>
        </div>

        {/* Timeline */}
        <div className="mx-auto max-w-4xl">
          <div className="relative space-y-8 before:absolute before:bottom-8 before:left-[9px] before:top-8 before:w-px before:bg-gradient-to-b before:from-[#5B2CCB] before:via-[#C8BCFF] before:to-transparent sm:space-y-10">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Closing note */}
        <div className="mt-14 text-center">
          <p className="text-sm text-[#777696]">
            Each step is part of a continuous journey of learning and growth.
          </p>
        </div>
      </div>
    </section>
  );
}
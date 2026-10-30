import type { Experience } from "@/types/experience";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export default function ExperienceCard({
  experience,
  index,
}: ExperienceCardProps) {
  const isCurrent = experience.current === true;

  const period = experience.current
    ? "Present"
    : experience.startDate && experience.endDate
      ? `${experience.startDate} — ${experience.endDate}`
      : experience.startDate ?? experience.endDate ?? "";

  return (
    <article className="relative pl-9 sm:pl-12">
      {/* Timeline marker */}
      <div
        className={`absolute left-0 top-7 z-10 flex h-5 w-5 items-center justify-center rounded-full border-4 ${
          isCurrent
            ? "border-[#DDD6FE] bg-[#5B2CCB]"
            : "border-[#E9E4FF] bg-white"
        }`}
        aria-hidden="true"
      >
        {isCurrent && (
          <span className="h-1 w-1 rounded-full bg-white" />
        )}
      </div>

      <div
        className={`rounded-3xl border p-6 transition-all duration-300 sm:p-8 ${
          isCurrent
            ? "border-[#C8BCFF] bg-white shadow-card"
            : "border-[#E7E2FA] bg-white/80 hover:border-[#C8BCFF] hover:shadow-card"
        }`}
      >
        {/* Role and period */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span
                className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${
                  isCurrent
                    ? "bg-[#5B2CCB] text-white"
                    : "bg-[#F0EEFF] text-[#5B2CCB]"
                }`}
              >
                {experience.type}
              </span>

              {isCurrent && (
                <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Current position
                </span>
              )}
            </div>

            <h3 className="font-heading text-xl font-bold leading-snug text-[#111747] sm:text-2xl">
              {experience.role}
            </h3>

            <p className="mt-1 font-semibold text-[#5B2CCB]">
              {experience.company}
            </p>

            <p className="mt-2 flex items-center gap-2 text-sm text-[#777696]">
              <i
                className="fa-solid fa-location-dot text-xs"
                aria-hidden="true"
              />
              {experience.location}
            </p>
          </div>

          {period && (
            <span className="shrink-0 rounded-xl border border-[#E7E2FA] bg-[#FAFAFF] px-3 py-2 text-xs font-medium leading-relaxed text-[#515578] sm:text-right">
              {period}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-sm leading-7 text-[#515578] sm:text-base">
          {experience.description}
        </p>

        {/* Responsibilities */}
        {experience.responsibilities &&
          experience.responsibilities.length > 0 && (
            <div className="mt-6">
              <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-[#3520A8]">
                Key contributions
              </h4>

              <ul className="space-y-3">
                {experience.responsibilities.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-[#515578]"
                  >
                    <i
                      className="fa-solid fa-arrow-right mt-1.5 text-xs text-[#8A70E8]"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

        {/* Selected highlights */}
        {experience.highlights && experience.highlights.length > 0 && (
          <div className="mt-6">
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-[#3520A8]">
              {isCurrent ? "Documentation & frameworks" : "Highlights"}
            </h4>

            <ul className="grid gap-2 sm:grid-cols-2">
              {experience.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-2 rounded-xl bg-[#F8F7FF] px-3 py-3 text-xs leading-relaxed text-[#515578]"
                >
                  <i
                    className="fa-solid fa-check mt-0.5 text-[#5B2CCB]"
                    aria-hidden="true"
                  />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies and skills */}
        {experience.technologies &&
          experience.technologies.length > 0 && (
            <div className="mt-6 border-t border-[#F0EEFF] pt-5">
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#777696]">
                Technologies & skills
              </h4>

              <ul className="flex flex-wrap gap-2">
                {experience.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-lg border border-[#E7E2FA] bg-[#FAFAFF] px-2.5 py-1.5 text-xs text-[#515578]"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </div>
          )}
      </div>
    </article>
  );
}
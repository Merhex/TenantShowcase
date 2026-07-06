"use client";

import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/lib/icons";

// A slim band of at-a-glance credibility numbers, right under the hero.
// Everything here is stated elsewhere on the page — this just makes the
// strongest signals scannable in three seconds.
export function StatBar() {
  const { t } = useI18n();

  return (
    <section className="border-y border-line bg-beige/50">
      <div className="mx-auto w-full max-w-content px-5 sm:px-8">
        <ul className="grid grid-cols-2 divide-line md:grid-cols-4 md:divide-x">
          {t.stats.map((s, i) => (
            <Reveal
              as="li"
              key={s.label}
              delay={i * 0.06}
              className="flex flex-col items-center gap-1 px-4 py-8 text-center sm:py-10"
            >
              <span className="flex h-9 items-center justify-center text-3xl font-semibold tracking-tightest text-ink sm:text-4xl">
                {s.icon ? (
                  <Icon name={s.icon} className="h-8 w-8 text-forest" strokeWidth={1.75} />
                ) : (
                  s.value
                )}
              </span>
              <span className="mt-1 text-sm font-medium leading-snug text-muted">
                {s.label}
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

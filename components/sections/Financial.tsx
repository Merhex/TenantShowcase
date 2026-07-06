"use client";

import { useI18n } from "@/lib/i18n";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/lib/icons";

// The single biggest landlord anxiety is "will they pay?" — answer it head-on
// with concrete, verifiable specifics rather than adjectives.
export function Financial() {
  const { t } = useI18n();

  return (
    <Section id="finance" alt>
      <SectionHeader title={t.finance.heading} subtitle={t.finance.subheading} />

      <Reveal className="mx-auto mt-12 max-w-4xl">
        <div className="rounded-3xl bg-card p-6 shadow-soft ring-1 ring-line/60 sm:p-10">
          <ul className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {t.finance.points.map((p) => (
              <li key={p.title} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest-faint text-forest">
                  <Icon name={p.icon} className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[15px] font-semibold text-ink">{p.title}</p>
                  <p className="mt-1 text-sm leading-snug text-muted">{p.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}

"use client";

import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/lib/icons";

// A compact "ready when you are" strip answering the landlord's logistics
// questions (move-in, lease length, viewings) right before the closing CTA.
export function Availability() {
  const { t } = useI18n();

  return (
    <section className="border-y border-line bg-beige/50">
      <div className="mx-auto w-full max-w-content px-5 py-12 sm:px-8 sm:py-14">
        <Reveal className="text-center">
          <h2 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
            {t.availability.heading}
          </h2>
        </Reveal>
        <ul className="mx-auto mt-7 flex max-w-3xl flex-col gap-4 sm:flex-row sm:justify-center sm:gap-10">
          {t.availability.items.map((item, i) => (
            <Reveal
              as="li"
              key={item.label}
              delay={i * 0.06}
              className="flex items-center justify-center gap-2.5 text-ink"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-forest ring-1 ring-line">
                <Icon name={item.icon} className="h-4.5 w-4.5" />
              </span>
              <span className="text-[15px] font-medium">{item.label}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

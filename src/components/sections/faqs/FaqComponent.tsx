"use client";

import { HelpCircle, MessageCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTranslations } from 'next-intl';

export function FaqComponent() {
  const t = useTranslations('faqs');
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background gradient - Cross-platform compatible */}
      <div className="absolute inset-0 faq-bg-gradient"></div>
      {/* Subtle decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl faq-blur-teal"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full blur-3xl faq-blur-purple"></div>

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge className="text-[#00a6a2] px-4 py-1.5 inline-flex items-center gap-2 faq-badge">
            <HelpCircle className="w-4 h-4" />
            {t('badge')}
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold text-balance text-[#003c3a]">
            {t('title')} <span className="text-[#00a6a2]">{t('titleHighlight')}</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            {t('subtitle')}
          </p>
        </div>

        {/* FAQ Accordion - Solid white background for Firefox compatibility */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-lg">
          <Accordion className="space-y-2">
            {['q1', 'q2', 'q3', 'q4', 'q5'].map((key, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200/50 rounded-lg px-4 transition-colors"
                data-state-style="open"
              >
                <AccordionTrigger className="relative flex items-center justify-center text-base md:text-lg font-semibold text-[#003c3a] hover:text-[#00a6a2] hover:no-underline transition-all duration-300 data-[state=open]:pt-10 data-[state=open]:pb-10 data-[state=closed]:pt-10 data-[state=closed]:pb-4">
                  <span className="text-center">{t(`questions.${key}.question`)}</span>
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-90">→</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-5 pt-0 text-center">{t(`questions.${key}.answer`)}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA - Cross-platform compatible */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 rounded-full px-6 py-4 shadow-md faq-cta-gradient">
            <MessageCircle className="w-5 h-5 text-[#00a6a2]" />
            <p className="text-sm md:text-base text-[#003c3a]">
              {t('ctaText')}
            </p>
            <Button size="sm" className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white ml-2">
              {t('ctaButton')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqComponent;
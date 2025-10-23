"use client";

import { HelpCircle, MessageCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "How long does a placement take?",
    answer:
      "The placement process typically takes 6-12 months from initial application to starting work in Germany. This includes language training in Morocco (4-6 months), document processing and recognition (2-3 months), and visa procedures (1-2 months). We guide you through every step to ensure a smooth transition.",
  },
  {
    question: "What documents are required?",
    answer:
      "You'll need your nursing diploma or certificate, official transcripts, valid passport, birth certificate, police clearance certificate, and health certificates. All documents must be officially translated into German. We provide a detailed checklist and help you prepare all necessary paperwork.",
  },
  {
    question: "How does the recognition process work?",
    answer:
      "The recognition process involves submitting your nursing qualifications to German authorities for evaluation. We handle the entire process: document preparation, translation, submission to the relevant recognition body, and follow-up. If additional training is required, we arrange that as well.",
  },
  {
    question: "Who covers which costs?",
    answer:
      "AmalCare covers the costs of language training, recognition procedures, and placement services. You're responsible for personal documents (passport, certificates) and visa fees. Once employed, your German employer covers relocation costs and provides competitive salary from day one.",
  },
  {
    question: "How exactly does the cooperative model work?",
    answer:
      "Our cooperative model means we work together as partners. We invest in your training and preparation, while you commit to working with our partner healthcare facilities in Germany. This ensures quality training, guaranteed placement, and long-term career support for your success.",
  },
];

export function FaqComponent() {
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
            FAQ
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold text-balance text-[#003c3a]">
            Find answers to your questions in <span className="text-[#00a6a2]">our FAQ</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            In our FAQ section for institutions we answer many of the frequently asked questions:
          </p>
        </div>

        {/* FAQ Accordion - Solid white background for Firefox compatibility */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-lg">
          <Accordion className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200/50 rounded-lg px-4 transition-colors"
                data-state-style="open"
              >
                <AccordionTrigger className="relative flex items-center justify-center text-base md:text-lg font-semibold text-[#003c3a] hover:text-[#00a6a2] hover:no-underline transition-all duration-300 data-[state=open]:pt-10 data-[state=open]:pb-10 data-[state=closed]:pt-10 data-[state=closed]:pb-4">
                  <span className="text-center">{faq.question}</span>
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-90">→</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-5 pt-0 text-center">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA - Cross-platform compatible */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 rounded-full px-6 py-4 shadow-md faq-cta-gradient">
            <MessageCircle className="w-5 h-5 text-[#00a6a2]" />
            <p className="text-sm md:text-base text-[#003c3a]">
              And if anything remains unclear, we would be happy to advise you personally.
            </p>
            <Button size="sm" className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white ml-2">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqComponent;
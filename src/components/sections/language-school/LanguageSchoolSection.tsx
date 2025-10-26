"use client";

import { BookOpen, Languages, GraduationCap, Users, CheckCircle2, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { IMAGE_URLS } from "@/constants/urls";

export function LanguageSchoolSection() {
  const features = [
    { icon: Languages, text: "It starts at zero (A1) and leads to the C1 level" },
    { icon: Users, text: "It is practical – with a focus on communication, nursing vocabulary and everyday language" },
    { icon: GraduationCap, text: "It is taught by teachers, some of whom are German, who are interculturally trained" },
    { icon: BookOpen, text: "There are exercises of nursing conversations, handovers and everyday situations" },
  ];

  return (
    <section className="relative overflow-hidden py-12 lg:py-16">
      <div className="container mx-auto max-w-9xl px-6">
        <div className="mx-auto max-w-9xl">
          <div className="flex flex-col gap-6 lg:gap-10">


            {/* Decorative elements */}    {/* Text content section - now below image */}
            <div className="space-y-4">
              {/* Badge */}
              <Badge className="inline-flex items-center gap-2 border-0 bg-[#7c3aed]/10 px-4 py-2 text-sm font-medium text-[#7c3aed]">
                <BookOpen className="h-4 w-4" />
                <span>Language School</span>
              </Badge>

              {/* Main heading */}
              <div className="space-y-3">
                <h2 className="text-balance font-sans text-4xl font-bold leading-tight tracking-tight text-[#003c3a] lg:text-5xl xl:text-6xl">
                  Our school –{" "}
                  <span className="bg-gradient-to-r from-[#00a6a2] to-[#7c3aed] bg-clip-text text-transparent">
                    language, care, perspective
                  </span>
                </h2>
              </div>

              {/* Description */}
              <p className="text-pretty text-lg leading-relaxed text-gray-600">
                Behind every successful placement lies thorough preparation. That&apos;s why AmalCare operates its own
                educational facility in Morocco: a language school with a focus on nursing and a nursing simulation
                course based on German standards.
              </p>

              {/* Subheading */}
              <div className="space-y-2 pt-0">
                <h3 className="text-balance text-2xl font-bold text-[#003c3a] lg:text-3xl">
                  Language school in Rabat – German with a focus on nursing
                </h3>
                <p className="text-pretty leading-relaxed text-gray-600">
                  Our language school in Rabat is the first step for nursing professionals and trainees who want to work
                  or begin training in Germany.
                </p>
              </div>

              {/* What makes our lessons special */}
              <Card className="bg-white/80 p-6 backdrop-blur-sm">
                <div className="space-y-5">
                  <h4 className="text-lg font-semibold text-[#003c3a]">What makes our lessons special:</h4>
                  <div className="grid gap-4">
                    {features.map((feature, index) => {
                      const Icon = feature.icon
                      return (
                        <div
                          key={index}
                          className="group flex items-start gap-4 rounded-lg bg-white/60 p-4 transition-all duration-300 hover:bg-[#00a6a2]/5 shadow-sm hover:shadow-md"
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#00a6a2]/10 text-[#00a6a2] transition-colors group-hover:bg-[#00a6a2] group-hover:text-white">
                            <Icon className="h-5 w-5" />
                          </div>
                          <p className="pt-1.5 text-sm leading-relaxed text-gray-600 group-hover:text-[#003c3a]">
                            {feature.text}
                          </p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </Card>

              {/* Closing statement */}
              <Card className="bg-gradient-to-br from-[#7c3aed]/5 to-[#00a6a2]/5 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#7c3aed]/10">
                    <CheckCircle2 className="h-5 w-5 text-[#7c3aed]" />
                  </div>
                  <p className="pt-1 text-pretty leading-relaxed text-[#003c3a]">
                    In this way, we create a language foundation that goes far beyond a certificate – and facilitates
                    the path into the German nursing profession.
                  </p>
                </div>
              </Card>
            </div>
            {/* Image section - now on top */}
            <div className="relative mx-auto  mt-24 w-[1000px] max-w-4xl">
              <Card className="group relative overflow-hidden bg-white w-full shadow-2xl shadow-[#00a6a2]/10 transition-shadow duration-500 hover:shadow-[#00a6a2]/20">
                <div className="overflow-hidden w-full">
                  <Image
                    src={IMAGE_URLS.languageSchoolClass}
                    alt="Language school instructors with anatomical charts teaching nursing terminology"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 origin-center"
                    width={1000}
                    height={700}
                  />
                </div>
                {/* Overlay badge inside image - bottom left */}
                <div className="absolute bottom-4 left-4">
                  <Card className="bg-white/95 px-4 py-3 backdrop-blur-md shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#7c3aed]/10">
                        <Languages className="h-5 w-5 text-[#7c3aed]" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#003c3a] leading-none">Professional Training</div>
                        <div className="text-[11px] text-gray-600 leading-none mt-1">German language with nursing focus</div>
                      </div>
                    </div>
                  </Card>
                </div>
              </Card>

              {/* Floating badge */}
              <div className="absolute -right-4 -top-4 lg:-right-8 lg:-top-8">
                <Card className="bg-white/95 p-4 shadow-xl backdrop-blur-md">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-[#00a6a2]" />
                    <div className="space-y-0.5">
                      <div className="text-xs font-medium text-gray-500">Based in</div>
                      <div className="text-sm font-bold text-[#003c3a]">Rabat, Morocco</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  )
}

export default LanguageSchoolSection;



"use client";

import { ArrowRight, Sparkles, Globe, Heart, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function HeroSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <section className="relative overflow-hidden bg-gray-50 py-20 lg:py-32 pb-32 lg:pb-40">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#00a6a2]/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[#7c3aed]/5 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-9xl px-6">
        <div className="mx-auto max-w-9xl">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#00a6a2]/20 bg-[#00a6a2]/5 px-4 py-2 text-sm font-medium text-[#00a6a2]">
                <Sparkles className="h-4 w-4" />
                <span>Your Care Job in Germany with AmalCare</span>
              </div>

              {/* Main heading */}
              <div className="space-y-4">
                <h1 className="text-balance font-sans text-5xl font-bold leading-tight tracking-tight text-[#003c3a] lg:text-6xl xl:text-7xl">
                  Your Perfect{" "}
                  <span className="bg-gradient-to-r from-[#00a6a2] to-[#7c3aed] bg-clip-text text-transparent">Start</span>
                </h1>
              </div>

              {/* Description */}
              <div className="space-y-4 text-pretty text-lg leading-relaxed text-gray-600 lg:text-xl">
                <p>
                  Do you dream of working in nursing in Germany? Do you want to do something meaningful, help people—and
                  build a secure future for yourself?
                </p>
                <p className="font-medium text-[#003c3a]">Then AmalCare is the right place for you.</p>
                <p>
                  We&apos;ll accompany you step by step on your path to nursing training in Germany – from language school in
                  Morocco to your first day of work. With preparation, trust, and genuine support.
                </p>
              </div>

              {/* CTA Card */}
              <Card className="relative overflow-hidden border-2 border-[#00a6a2]/20 bg-white/80 backdrop-blur-sm transition-all duration-300">
                <button 
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="group flex w-full items-center justify-between p-6 text-left transition-all hover:bg-[#00a6a2]/5 cursor-pointer"
                >
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold text-[#00a6a2]">Why AmalCare?</h3>
                    <p className="text-sm text-gray-600">Discover what makes us different</p>
                  </div>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-[#00a6a2] text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#00a6a2]/30 ${isExpanded ? 'rotate-90' : ''}`}>
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </button>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="border-t border-[#00a6a2]/10 p-6 space-y-6 animate-in fade-in slide-in-from-top-2 duration-300">
                    <p className="text-gray-700 leading-relaxed">
                      <strong className="text-[#003c3a]">Because you deserve more than just a placement contract.</strong>
                    </p>
                    
                    <div>
                      <p className="font-semibold text-[#003c3a] mb-4">At AmalCare you get:</p>
                      <ul className="space-y-3">
                        {[
                          "Language lessons supplemented with a simulation course (duration: 3 months)",
                          "Imparting nursing knowledge before your arrival",
                          "Job placement and preparation for life in Germany",
                          "Support with visa, accommodation and registration",
                          "Personal support – even after your arrival",
                          "A strong network and real local contacts"
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 shrink-0 text-[#00a6a2] mt-0.5" />
                            <span className="text-sm text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="text-gray-700 leading-relaxed italic">
                      You won&apos;t be left alone. We&apos;ll walk the path together – so you can arrive, stay, and grow.
                    </p>

                    <Button 
                      size="lg"
                      className="w-full sm:w-auto bg-[#7c3aed] text-white hover:bg-[#6d28d9] shadow-lg shadow-[#7c3aed]/30"
                    >
                      For quick contact
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                )}
              </Card>
            </div>

            {/* Right content - Feature cards */}
            <div className="relative">
              <div className="grid gap-6">
                {/* Feature card 1 */}
                <Card className="group border-2 border-gray-200 bg-white p-6 transition-all duration-300 hover:border-[#00a6a2]/40 hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#00a6a2]/10 text-[#00a6a2] transition-colors group-hover:bg-[#00a6a2] group-hover:text-white">
                      <Globe className="h-6 w-6" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-[#003c3a]">Complete Journey Support</h3>
                      <p className="text-sm leading-relaxed text-gray-600">
                        From language training in Morocco to your first day in Germany, we&apos;re with you every step of the
                        way.
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Feature card 2 */}
                <Card className="group border-2 border-gray-200 bg-white p-6 transition-all duration-300 hover:border-[#7c3aed]/40 hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#7c3aed]/10 text-[#7c3aed] transition-colors group-hover:bg-[#7c3aed] group-hover:text-white">
                      <Heart className="h-6 w-6" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-[#003c3a]">Genuine Care & Trust</h3>
                      <p className="text-sm leading-relaxed text-gray-600">
                        We provide preparation, trust, and authentic support to help you build a meaningful career in
                        nursing.
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Stats card */}
                <Card className="border-2 border-[#00a6a2]/20 bg-gradient-to-br from-[#00a6a2]/5 to-[#7c3aed]/5 p-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-[#00a6a2]">500+</div>
                      <div className="text-xs text-gray-600">Successful Placements</div>
                    </div>
                    <div className="space-y-1"> 
                      <div className="text-2xl font-bold text-[#7c3aed]">95%</div>
                      <div className="text-xs text-gray-600">Success Rate</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-[#00a6a2]">24/7</div>
                      <div className="text-xs text-gray-600">Support Available</div>
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


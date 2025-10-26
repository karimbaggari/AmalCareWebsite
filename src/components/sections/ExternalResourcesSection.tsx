/**
 * Example Component: External Resources Section
 * 
 * This component demonstrates how to use the centralized URL management system
 * to display external resources and links from various categories.
 */

import React from 'react';
import { ExternalLink, Download, Video, BookOpen, Users, Globe } from 'lucide-react';
import {
  PARTNER_URLS,
  EDUCATION_URLS,
  RESOURCE_URLS,
  MEDIA_CONTENT_URLS,
  TOOLS_URLS,
  isExternalUrl,
} from '@/constants/urls';

export default function ExternalResourcesSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Helpful Resources
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about becoming a nurse in Germany
          </p>
        </div>

        {/* Educational Partners */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-[#00a6a2]" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Educational Partners
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'Goethe Institute', url: PARTNER_URLS.goetheInstitute, desc: 'German language courses' },
              { name: 'BAMF', url: PARTNER_URLS.bamf, desc: 'Federal Office for Migration' },
              { name: 'Anabin Database', url: PARTNER_URLS.anabin, desc: 'Recognition database' },
              { name: 'Make it in Germany', url: PARTNER_URLS.makeItInGermany, desc: 'Official portal' },
            ].map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-[#00a6a2] hover:shadow-lg transition-all"
              >
                <ExternalLink className="w-5 h-5 text-[#00a6a2] mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-[#00a6a2] transition-colors">
                    {partner.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{partner.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Language Courses */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Globe className="w-6 h-6 text-[#00a6a2]" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Language Learning
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: 'Online Language Courses', url: EDUCATION_URLS.germanLanguageCourses },
              { name: 'TELC Exam Preparation', url: EDUCATION_URLS.telcExam },
              { name: 'Goethe Certificate', url: EDUCATION_URLS.goetheCertificate },
              { name: 'E-Learning Platform', url: EDUCATION_URLS.elearningPlatform },
            ].map((course) => (
              <a
                key={course.name}
                href={course.url}
                target={isExternalUrl(course.url) ? '_blank' : undefined}
                rel={isExternalUrl(course.url) ? 'noopener noreferrer' : undefined}
                className="flex items-center justify-between p-4 bg-[#00a6a2]/5 border border-[#00a6a2]/20 rounded-lg hover:bg-[#00a6a2]/10 hover:border-[#00a6a2]/40 transition-all group"
              >
                <span className="font-medium text-gray-900 dark:text-white">{course.name}</span>
                <ExternalLink className="w-4 h-4 text-[#00a6a2] group-hover:translate-x-1 transition-transform" />
              </a>
            ))}
          </div>
        </div>

        {/* Downloadable Resources */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Download className="w-6 h-6 text-[#00a6a2]" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Download Resources
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'Nurse Guide to Germany', url: RESOURCE_URLS.nurseGuide, size: 'PDF, 2.5 MB' },
              { name: 'Culture Guide', url: RESOURCE_URLS.germanyCultureGuide, size: 'PDF, 1.8 MB' },
              { name: 'Application Checklist', url: RESOURCE_URLS.applicationChecklist, size: 'PDF, 0.5 MB' },
              { name: 'Visa Guide', url: RESOURCE_URLS.visaGuide, size: 'PDF, 1.2 MB' },
              { name: 'Contract Template', url: RESOURCE_URLS.contractTemplate, size: 'DOCX, 0.3 MB' },
              { name: 'FAQ Document', url: RESOURCE_URLS.faqDocument, size: 'PDF, 0.8 MB' },
            ].map((resource) => (
              <a
                key={resource.name}
                href={resource.url}
                download
                className="group flex items-start gap-3 p-4 bg-gradient-to-br from-[#00a6a2]/10 to-[#00a6a2]/5 rounded-lg border border-[#00a6a2]/20 hover:shadow-lg transition-all"
              >
                <Download className="w-5 h-5 text-[#00a6a2] mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {resource.name}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{resource.size}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Video Resources */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Video className="w-6 h-6 text-[#00a6a2]" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Video Resources
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { 
                name: 'Introduction to Our Program', 
                url: MEDIA_CONTENT_URLS.introVideo,
                duration: '5:30',
                thumbnail: '/placeholder-video-1.jpg',
              },
              { 
                name: 'Nurse Testimonials', 
                url: MEDIA_CONTENT_URLS.testimonialVideo,
                duration: '8:15',
                thumbnail: '/placeholder-video-2.jpg',
              },
              { 
                name: 'Process Explanation', 
                url: MEDIA_CONTENT_URLS.processExplanation,
                duration: '12:45',
                thumbnail: '/placeholder-video-3.jpg',
              },
              { 
                name: 'German Culture & Lifestyle', 
                url: MEDIA_CONTENT_URLS.germanyCultureVideo,
                duration: '15:20',
                thumbnail: '/placeholder-video-4.jpg',
              },
            ].map((video) => (
              <a
                key={video.name}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-[#00a6a2] hover:shadow-xl transition-all overflow-hidden"
              >
                <div className="flex-shrink-0 w-32 h-20 bg-gradient-to-br from-[#00a6a2] to-[#008581] rounded-lg flex items-center justify-center relative overflow-hidden">
                  <Video className="w-8 h-8 text-white" />
                  <span className="absolute bottom-1 right-1 text-xs bg-black/70 text-white px-2 py-0.5 rounded">
                    {video.duration}
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-[#00a6a2] transition-colors">
                    {video.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
                    Watch on YouTube
                    <ExternalLink className="w-3 h-3" />
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Interactive Tools */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-6 h-6 text-[#00a6a2]" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Interactive Tools
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'German Level Test', url: TOOLS_URLS.germanLevelTest, icon: '📝' },
              { name: 'Cost of Living Calculator', url: TOOLS_URLS.costOfLivingCalculator, icon: '💰' },
              { name: 'Salary Calculator', url: TOOLS_URLS.salaryCalculator, icon: '💵' },
              { name: 'Visa Checker', url: TOOLS_URLS.visaChecker, icon: '🛂' },
              { name: 'Recognition Checker', url: TOOLS_URLS.recognitionChecker, icon: '✅' },
              { name: 'Housing Search', url: TOOLS_URLS.housingSearch, icon: '🏠' },
            ].map((tool) => (
              <a
                key={tool.name}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-[#00a6a2] hover:scale-105 transition-all"
              >
                <span className="text-2xl">{tool.icon}</span>
                <div className="flex-1">
                  <span className="font-medium text-gray-900 dark:text-white group-hover:text-[#00a6a2] transition-colors">
                    {tool.name}
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 text-[#00a6a2] opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


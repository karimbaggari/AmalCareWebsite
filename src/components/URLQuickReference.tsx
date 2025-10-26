// ==========================================
// URL Management System - Quick Reference
// ==========================================
//
// Import centralized URLs instead of hardcoding them:
//
// import { SOCIAL_URLS, CONTACT_URLS, PARTNER_URLS } from '@/constants/urls';
//
// Usage Examples:
// - Social: <a href={SOCIAL_URLS.facebook}>Facebook</a>
// - Contact: <a href={CONTACT_URLS.email}>Email</a>
// - Partners: <a href={PARTNER_URLS.goetheInstitute}>Goethe</a>
//
// See: docs/URL_MANAGEMENT.md for full documentation
// ==========================================

/**
 * Quick Reference Component
 * 
 * This file demonstrates all available URL categories and how to use them.
 * Copy the patterns below to your components.
 */

import React from 'react';
import {
  // Social Media
  SOCIAL_URLS,
  
  // Contact Information
  CONTACT_URLS,
  
  // Educational Partners
  PARTNER_URLS,
  EDUCATION_URLS,
  
  // Legal & Compliance
  LEGAL_URLS,
  
  // Resources & Downloads
  RESOURCE_URLS,
  
  // Media Content
  MEDIA_URLS,
  MEDIA_CONTENT_URLS,
  
  // Applications & Portals
  APPLICATION_URLS,
  
  // Country Specific
  MOROCCO_URLS,
  
  // Support & Help
  SUPPORT_URLS,
  
  // Careers & Jobs
  CAREER_URLS,
  
  // Events & Webinars
  EVENT_URLS,
  
  // Interactive Tools
  TOOLS_URLS,
  
  // Helper Functions
  getUrl,
  isExternalUrl,
  getUrlsByCategory,
  ALL_URLS,
} from '@/constants/urls';

export default function URLQuickReference() {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8">
      <h1 className="text-3xl font-bold mb-8">URL Management System - Quick Reference</h1>
      
      {/* ===== SOCIAL MEDIA ===== */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">1. Social Media Links</h2>
        <div className="space-y-2 bg-gray-50 p-4 rounded-lg">
          <a href={SOCIAL_URLS.facebook} target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">
            Facebook: {SOCIAL_URLS.facebook}
          </a>
          <a href={SOCIAL_URLS.instagram} target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">
            Instagram: {SOCIAL_URLS.instagram}
          </a>
          <a href={SOCIAL_URLS.linkedin} target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">
            LinkedIn: {SOCIAL_URLS.linkedin}
          </a>
          <a href={SOCIAL_URLS.twitter} target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">
            Twitter: {SOCIAL_URLS.twitter}
          </a>
          <a href={SOCIAL_URLS.youtube} target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">
            YouTube: {SOCIAL_URLS.youtube}
          </a>
          <a href={SOCIAL_URLS.whatsapp} target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">
            WhatsApp: {SOCIAL_URLS.whatsapp}
          </a>
        </div>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-2 overflow-x-auto text-sm">
{`import { SOCIAL_URLS } from '@/constants/urls';

<a href={SOCIAL_URLS.facebook} target="_blank" rel="noopener noreferrer">
  Facebook
</a>`}
        </pre>
      </section>

      {/* ===== CONTACT ===== */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">2. Contact Information</h2>
        <div className="space-y-2 bg-gray-50 p-4 rounded-lg">
          <a href={CONTACT_URLS.email} className="block text-blue-600 hover:underline">
            Email: {CONTACT_URLS.email}
          </a>
          <a href={CONTACT_URLS.phone} className="block text-blue-600 hover:underline">
            Phone: {CONTACT_URLS.phone}
          </a>
          <a href={CONTACT_URLS.whatsappChat} target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">
            WhatsApp Chat: {CONTACT_URLS.whatsappChat}
          </a>
          <a href={CONTACT_URLS.calendly} target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">
            Book Consultation: {CONTACT_URLS.calendly}
          </a>
        </div>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-2 overflow-x-auto text-sm">
{`import { CONTACT_URLS } from '@/constants/urls';

<a href={CONTACT_URLS.email}>Email Us</a>
<a href={CONTACT_URLS.phone}>Call Us</a>`}
        </pre>
      </section>

      {/* ===== PARTNERS ===== */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">3. Partner Organizations</h2>
        <div className="space-y-2 bg-gray-50 p-4 rounded-lg">
          <a href={PARTNER_URLS.goetheInstitute} target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">
            Goethe Institute: {PARTNER_URLS.goetheInstitute}
          </a>
          <a href={PARTNER_URLS.bamf} target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">
            BAMF: {PARTNER_URLS.bamf}
          </a>
          <a href={PARTNER_URLS.makeItInGermany} target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">
            Make it in Germany: {PARTNER_URLS.makeItInGermany}
          </a>
        </div>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-2 overflow-x-auto text-sm">
{`import { PARTNER_URLS } from '@/constants/urls';

<a href={PARTNER_URLS.goetheInstitute} target="_blank">
  Goethe Institute
</a>`}
        </pre>
      </section>

      {/* ===== EDUCATION ===== */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">4. Educational Resources</h2>
        <div className="space-y-2 bg-gray-50 p-4 rounded-lg">
          <a href={EDUCATION_URLS.germanLanguageCourses} className="block text-blue-600 hover:underline">
            Language Courses: {EDUCATION_URLS.germanLanguageCourses}
          </a>
          <a href={EDUCATION_URLS.telcExam} target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">
            TELC Exam: {EDUCATION_URLS.telcExam}
          </a>
          <a href={EDUCATION_URLS.elearningPlatform} className="block text-blue-600 hover:underline">
            E-Learning: {EDUCATION_URLS.elearningPlatform}
          </a>
        </div>
      </section>

      {/* ===== DOWNLOADS ===== */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">5. Downloadable Resources</h2>
        <div className="space-y-2 bg-gray-50 p-4 rounded-lg">
          <a href={RESOURCE_URLS.nurseGuide} download className="block text-blue-600 hover:underline">
            Nurse Guide (PDF)
          </a>
          <a href={RESOURCE_URLS.applicationChecklist} download className="block text-blue-600 hover:underline">
            Application Checklist (PDF)
          </a>
          <a href={RESOURCE_URLS.visaGuide} download className="block text-blue-600 hover:underline">
            Visa Guide (PDF)
          </a>
        </div>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-2 overflow-x-auto text-sm">
{`import { RESOURCE_URLS } from '@/constants/urls';

<a href={RESOURCE_URLS.nurseGuide} download>
  Download Nurse Guide
</a>`}
        </pre>
      </section>

      {/* ===== VIDEOS ===== */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">6. Video & Media Content</h2>
        <div className="space-y-2 bg-gray-50 p-4 rounded-lg">
          <a href={MEDIA_CONTENT_URLS.introVideo} target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">
            Intro Video
          </a>
          <a href={MEDIA_CONTENT_URLS.testimonialVideo} target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">
            Testimonials
          </a>
          <a href={MEDIA_CONTENT_URLS.webinar} target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">
            Webinar
          </a>
        </div>
      </section>

      {/* ===== APPLICATIONS ===== */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">7. Applications & Portals</h2>
        <div className="space-y-2 bg-gray-50 p-4 rounded-lg">
          <a href={APPLICATION_URLS.nurseApplication} className="block text-blue-600 hover:underline">
            Nurse Application
          </a>
          <a href={APPLICATION_URLS.dashboard} className="block text-blue-600 hover:underline">
            Dashboard
          </a>
          <a href={APPLICATION_URLS.loginPortal} className="block text-blue-600 hover:underline">
            Login
          </a>
        </div>
      </section>

      {/* ===== TOOLS ===== */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">8. Interactive Tools</h2>
        <div className="space-y-2 bg-gray-50 p-4 rounded-lg">
          <a href={TOOLS_URLS.germanLevelTest} target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">
            German Level Test
          </a>
          <a href={TOOLS_URLS.salaryCalculator} target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">
            Salary Calculator
          </a>
          <a href={TOOLS_URLS.visaChecker} target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">
            Visa Checker
          </a>
        </div>
      </section>

      {/* ===== HELPER FUNCTIONS ===== */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">9. Helper Functions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">getUrl(category, key)</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`import { getUrl } from '@/constants/urls';

const url = getUrl('social', 'facebook');
console.log(url); // https://facebook.com/amalcare`}
            </pre>
          </div>

          <div>
            <h3 className="font-semibold mb-2">isExternalUrl(url)</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`import { isExternalUrl } from '@/constants/urls';

const external = isExternalUrl('https://google.com'); // true
const internal = isExternalUrl('/about'); // false

// Use in components:
<a 
  href={url}
  target={isExternalUrl(url) ? '_blank' : undefined}
  rel={isExternalUrl(url) ? 'noopener noreferrer' : undefined}
>
  Link
</a>`}
            </pre>
          </div>

          <div>
            <h3 className="font-semibold mb-2">getUrlsByCategory(category)</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`import { getUrlsByCategory } from '@/constants/urls';

const allSocialUrls = getUrlsByCategory('social');
// Returns: { facebook: '...', instagram: '...', ... }`}
            </pre>
          </div>

          <div>
            <h3 className="font-semibold mb-2">ALL_URLS (Access Everything)</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`import { ALL_URLS } from '@/constants/urls';

const facebook = ALL_URLS.social.facebook;
const email = ALL_URLS.contact.email;
const jobBoard = ALL_URLS.careers.jobBoard;`}
            </pre>
          </div>
        </div>
      </section>

      {/* ===== BEST PRACTICES ===== */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">10. Best Practices</h2>
        <div className="space-y-4">
          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <h3 className="font-semibold text-red-700 mb-2">❌ Don't Do This:</h3>
            <pre className="bg-white p-2 rounded text-sm">
{`<a href="https://facebook.com/amalcare">Facebook</a>`}
            </pre>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <h3 className="font-semibold text-green-700 mb-2">✅ Do This:</h3>
            <pre className="bg-white p-2 rounded text-sm">
{`import { SOCIAL_URLS } from '@/constants/urls';
<a href={SOCIAL_URLS.facebook}>Facebook</a>`}
            </pre>
          </div>
        </div>
      </section>

      {/* ===== DOCUMENTATION LINK ===== */}
      <section className="bg-blue-50 border-l-4 border-blue-500 p-6">
        <h2 className="text-2xl font-semibold mb-2">📚 Full Documentation</h2>
        <p className="text-gray-700 mb-4">
          For complete documentation, examples, and migration guide, see:
        </p>
        <code className="bg-white px-3 py-1 rounded">docs/URL_MANAGEMENT.md</code>
      </section>
    </div>
  );
}

/*
 * ========================================
 * Available URL Categories (Import as needed)
 * ========================================
 * 
 * SOCIAL_URLS - Social media links
 * CONTACT_URLS - Contact information
 * PARTNER_URLS - Partner organizations
 * EDUCATION_URLS - Educational resources
 * LEGAL_URLS - Legal documents
 * RESOURCE_URLS - Downloadable resources
 * MEDIA_URLS - Media kit & press
 * MEDIA_CONTENT_URLS - Videos & multimedia
 * APPLICATION_URLS - Application portals
 * MOROCCO_URLS - Morocco-specific resources
 * SUPPORT_URLS - Help & support
 * CAREER_URLS - Job listings
 * EVENT_URLS - Events & webinars
 * TOOLS_URLS - Interactive tools
 * 
 * Helper Functions:
 * - getUrl(category, key)
 * - isExternalUrl(url)
 * - getUrlsByCategory(category)
 * - ALL_URLS (all URLs in one object)
 * 
 * ========================================
 */


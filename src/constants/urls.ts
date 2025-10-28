/**
 * Centralized URL Management System
 * 
 * This file serves as the single source of truth for all URLs across the platform.
 * Update URLs here and they will be reflected throughout the application.
 */

// ==================== SOCIAL MEDIA URLs ====================
export const SOCIAL_URLS = {
  facebook: 'https://facebook.com/amalcare',
  instagram: 'https://instagram.com/amalcare',
  linkedin: 'https://linkedin.com/company/amalcare',
  twitter: 'https://twitter.com/amalcare',
  youtube: 'https://youtube.com/@amalcare',
  tiktok: 'https://tiktok.com/@amalcare',
  whatsapp: 'https://wa.me/491234567890', // Replace with actual WhatsApp number
} as const;

// ==================== CONTACT URLs ====================
export const CONTACT_URLS = {
  email: 'mailto:info@amal-care.de',
  emailSupport: 'mailto:support@amal-care.de',
  emailCareers: 'mailto:careers@amal-care.de',
  phone: 'tel:+49123456789',
  phoneEmergency: 'tel:+49123456790',
  whatsappChat: 'https://wa.me/491234567890?text=Hello%20AmalCare',
  calendly: 'https://calendly.com/amalcare/consultation', // Booking system
  address: 'https://maps.google.com/?q=AmalCare+eG+Germany',
} as const;

// ==================== EXTERNAL PARTNER URLs ====================
export const PARTNER_URLS = {
  germanEmbassy: 'https://www.auswaertiges-amt.de',
  goetheInstitute: 'https://www.goethe.de',
  bamf: 'https://www.bamf.de', // Federal Office for Migration and Refugees
  anabin: 'https://anabin.kmk.org', // Recognition database
  makeItInGermany: 'https://www.make-it-in-germany.com',
  workInGermany: 'https://www.arbeitsagentur.de',
  healthMinistry: 'https://www.bundesgesundheitsministerium.de',
  nursingChamber: 'https://www.deutscher-pflegerat.de',
  blueCard: 'https://www.eu-bluecard.de',
} as const;

// ==================== EDUCATIONAL & CERTIFICATION URLs ====================
export const EDUCATION_URLS = {
  germanLanguageCourses: 'https://example.com/language-courses',
  certificateRecognition: 'https://example.com/certificate-recognition',
  telcExam: 'https://www.telc.net',
  goetheCertificate: 'https://www.goethe.de/en/spr/kup.html',
  nursingExamPrep: 'https://example.com/nursing-exam-prep',
  onlinePortal: 'https://portal.amal-care.de', // Placeholder for student portal
  elearningPlatform: 'https://learn.amal-care.de', // Placeholder for e-learning
} as const;

// ==================== LEGAL & COMPLIANCE URLs ====================
export const LEGAL_URLS = {
  impressum: 'https://amal-care.de/impressum',
  datenschutz: 'https://amal-care.de/datenschutz',
  agb: 'https://amal-care.de/agb',
  cookiePolicy: 'https://amal-care.de/cookie-policy',
  privacyPolicy: 'https://amal-care.de/privacy-policy',
  termsOfService: 'https://amal-care.de/terms-of-service',
  gdprInfo: 'https://amal-care.de/gdpr',
} as const;

// ==================== RESOURCE & DOWNLOAD URLs ====================
export const RESOURCE_URLS = {
  nurseGuide: 'https://example.com/downloads/nurse-guide.pdf',
  germanyCultureGuide: 'https://example.com/downloads/culture-guide.pdf',
  applicationChecklist: 'https://example.com/downloads/checklist.pdf',
  faqDocument: 'https://example.com/downloads/faqs.pdf',
  contractTemplate: 'https://example.com/downloads/contract-template.pdf',
  visaGuide: 'https://example.com/downloads/visa-guide.pdf',
  testimonials: 'https://example.com/downloads/testimonials.pdf',
  employerBrochure: 'https://example.com/downloads/employer-brochure.pdf',
  newsletter: 'https://example.com/newsletter/subscribe',
} as const;

// ==================== MEDIA & PRESS URLs ====================
export const MEDIA_URLS = {
  pressKit: 'https://example.com/press-kit',
  mediaInquiries: 'mailto:press@amal-care.de',
  brandAssets: 'https://example.com/brand-assets',
  logoDownload: 'https://example.com/downloads/logo.zip',
  newsroom: 'https://example.com/newsroom',
  blog: 'https://blog.amal-care.de',
} as const;

// ==================== VIDEO & MULTIMEDIA URLs ====================
export const MEDIA_CONTENT_URLS = {
  introVideo: 'https://youtube.com/watch?v=example-intro',
  testimonialVideo: 'https://youtube.com/watch?v=example-testimonial',
  processExplanation: 'https://youtube.com/watch?v=example-process',
  germanyCultureVideo: 'https://youtube.com/watch?v=example-culture',
  languageLearningVideo: 'https://youtube.com/watch?v=example-language',
  virtualTour: 'https://example.com/virtual-tour',
  webinar: 'https://example.com/webinar',
  podcast: 'https://example.com/podcast',
} as const;

// ==================== APPLICATION & PORTAL URLs ====================
export const APPLICATION_URLS = {
  nurseApplication: 'https://apply.amal-care.de/nurse',
  employerApplication: 'https://apply.amal-care.de/employer',
  careerPortal: 'https://careers.amal-care.de',
  loginPortal: 'https://portal.amal-care.de/login',
  registerPortal: 'https://portal.amal-care.de/register',
  dashboard: 'https://portal.amal-care.de/dashboard',
  documentUpload: 'https://portal.amal-care.de/upload',
} as const;

// ==================== MOROCCAN SPECIFIC URLs ====================
export const MOROCCO_URLS = {
  moroccoOffice: 'https://example.com/morocco-office',
  moroccanEmbassyGermany: 'https://example.com/moroccan-embassy',
  germanEmbassyMorocco: 'https://rabat.diplo.de',
  moroccanNursingAssociation: 'https://example.com/nursing-morocco',
  culturalIntegration: 'https://example.com/cultural-integration',
} as const;

// ==================== SUPPORT & HELP URLs ====================
export const SUPPORT_URLS = {
  helpCenter: 'https://help.amal-care.de',
  faqPage: 'https://amal-care.de/faqs',
  contactForm: 'https://amal-care.de/contact',
  liveChatWidget: 'https://chat.amal-care.de',
  supportTicket: 'https://support.amal-care.de/ticket',
  communitForum: 'https://community.amal-care.de',
  feedbackForm: 'https://amal-care.de/feedback',
} as const;

// ==================== JOB & CAREER URLs ====================
export const CAREER_URLS = {
  jobBoard: 'https://jobs.amal-care.de',
  nursingJobs: 'https://jobs.amal-care.de/nursing',
  seniorCareJobs: 'https://jobs.amal-care.de/senior-care',
  hospitalJobs: 'https://jobs.amal-care.de/hospital',
  jobAlerts: 'https://jobs.amal-care.de/alerts',
  careerAdvice: 'https://careers.amal-care.de/advice',
} as const;

// ==================== EVENT & WEBINAR URLs ====================
export const EVENT_URLS = {
  upcomingEvents: 'https://events.amal-care.de',
  webinarRegistration: 'https://events.amal-care.de/webinars',
  infoSession: 'https://events.amal-care.de/info-session',
  careerFair: 'https://events.amal-care.de/career-fair',
  networkingEvents: 'https://events.amal-care.de/networking',
  pastEvents: 'https://events.amal-care.de/past',
} as const;

// ==================== EXTERNAL TOOLS & SERVICES ====================
export const TOOLS_URLS = {
  germanLevelTest: 'https://example.com/german-test',
  costOfLivingCalculator: 'https://example.com/cost-calculator',
  salaryCalculator: 'https://example.com/salary-calculator',
  visaChecker: 'https://example.com/visa-checker',
  recognitionChecker: 'https://example.com/recognition-checker',
  housingSearch: 'https://example.com/housing',
} as const;

// ==================== IMAGE URLs ====================
export const IMAGE_URLS = {
  // Brand & Logo
  logo: 'https://ik.imagekit.io/p2myilloy/Pictures/ChatGPT%20Image%2026%20oct.%202025,%2021_37_30.png?updatedAt=1761514687321',
  
  // Hero & Key Visuals
  keyvisual: 'https://www.amal-care.de/_assets/6020ad64298e304d8b844c8dc69c472e/Images//Frontend/keyvisual.svg',
  heroImage: 'https://www.amal-care.de//fileadmin/_processed_/2/a/csm_AmalCare-28_c19a1c4d25.webp',
  careTeamImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-28%20at%2022.02.21.png-nIjW3pbVvByyV5Xm1m4nikxFYToGb1.jpeg',
  
  // Section Images
  valuesImage: 'https://www.amal-care.de/fileadmin/_processed_/b/d/csm_img-fairness-xxl-lg-1_9b644be1a5.webp',
  processImage: 'https://www.amal-care.de/fileadmin/_processed_/6/3/csm_amal-teaser-vermittlung_7933672b40.webp',
  languageSchool: 'https://www.amal-care.de/fileadmin/_processed_/7/0/csm_img-sprachschule_f734c6b63c.webp',
  languageSchoolClass: 'https://www.amal-care.de/fileadmin/_processed_/0/9/csm_IMG_6994_e4e17c16e4.webp',
  
  // Call to Action Images
  ctaImage1: 'https://www.amal-care.de/fileadmin/_processed_/d/b/csm_AmalCare-49_40f8beb5c3.webp',
  ctaImage2: 'https://www.amal-care.de/fileadmin/_processed_/7/0/csm_AmalCare-19_d532d38f2c.webp',
  
  // Generic Pages (About, Contact, FAQs, etc.)
  genericPageImage: 'https://www.amal-care.de/fileadmin/_processed_/d/c/csm_AmalCare-60_90c893b951.webp',
  contactPersonImage: 'https://www.amal-care.de/fileadmin/_processed_/d/c/csm_AmalCare-60_90c893b951.webp',
  
  // Team & People Photos (from ImageKit CDN)
  teamMember1: 'https://ik.imagekit.io/p2myilloy/Pictures/Team/78895854-6fc6-4c98-b961-6e7bc7389902.png?updatedAt=1761409497844',
  teamMember2: 'https://ik.imagekit.io/p2myilloy/Pictures/Team/9477661d-209e-44ea-af56-db7268b6cab9.png?updatedAt=1761409497713',
  nurseInGermany1: 'https://ik.imagekit.io/p2myilloy/Pictures/Team/c5767a68-2bec-4ac2-8d0d-48e153c55b11.png?updatedAt=1761613827147',
  nurseInGermany2: 'https://ik.imagekit.io/p2myilloy/Pictures/Team/d8b1bfb7-ca11-4793-a881-e65a0250a2e1.png?updatedAt=1761409494612',
  schoolRabat: 'https://ik.imagekit.io/p2myilloy/Pictures/Team/871b3f9a-4025-4ab2-983b-6693ae5863ae.png?updatedAt=1761409488541',
  
  // Static Images (from ImageKit CDN)
  staticImage1: 'https://ik.imagekit.io/p2myilloy/Pictures/Static/432ebea0-19e2-4f34-9a56-f3c0271bc70c.png?updatedAt=1761409489386',
  staticImage2: 'https://ik.imagekit.io/p2myilloy/Pictures/Static/43e48f18-6f9d-443e-b355-376b7dd14ac0.png?updatedAt=1761409488526',
  
  // Nurses in Germany Gallery (from ImageKit CDN)
  nursesGermany1: 'https://ik.imagekit.io/p2myilloy/Pictures/Nurses%20in%20Germany/a59831a9-eeef-4a78-bde0-b234f29c8b30.png?updatedAt=1761409500363',
  nursesGermany2: 'https://ik.imagekit.io/p2myilloy/Pictures/Nurses%20in%20Germany/61bb43f8-61c3-408a-aa4a-c304690b4a10.png?updatedAt=1761409500355',
  nursesGermany3: 'https://ik.imagekit.io/p2myilloy/Pictures/Nurses%20in%20Germany/74a9a6fc-139b-4d43-b000-d0093a48826f.png?updatedAt=1761409500245',
  nursesGermany4: 'https://ik.imagekit.io/p2myilloy/Pictures/Nurses%20in%20Germany/9c4233ca-9b69-4238-9fed-3616fc3b609c.png?updatedAt=1761409500183',
  nursesGermany5: 'https://ik.imagekit.io/p2myilloy/Pictures/Nurses%20in%20Germany/f6abae7e-0fc1-450f-8d62-df370918d68b.png?updatedAt=1761409499658',
  nursesGermany6: 'https://ik.imagekit.io/p2myilloy/Pictures/Nurses%20in%20Germany/bc256679-ecd6-4318-b065-93fc420b4ccc.png?updatedAt=1761409499010',
  nursesGermany7: 'https://ik.imagekit.io/p2myilloy/Pictures/Nurses%20in%20Germany/34ca16c5-077d-4b9d-98a5-74526317fc91.png?updatedAt=1761409498994',
  nursesGermany8: 'https://ik.imagekit.io/p2myilloy/Pictures/Nurses%20in%20Germany/ad80b496-1ec0-4d84-961b-a7ba3f6e66bf.png?updatedAt=1761409498943',
  nursesGermany9: 'https://ik.imagekit.io/p2myilloy/Pictures/Nurses%20in%20Germany/8712b327-10ed-423b-8035-18dcaf3e789e.png?updatedAt=1761409498843',
  nursesGermany10: 'https://ik.imagekit.io/p2myilloy/Pictures/Nurses%20in%20Germany/1a5bb6b9-8f2c-48a0-8fad-23850bed60c2.png?updatedAt=1761409498801',
  nursesGermany11: 'https://ik.imagekit.io/p2myilloy/Pictures/Nurses%20in%20Germany/f7a8e101-bd29-4998-a09b-da307a6a70c8.png?updatedAt=1761409497444',
  nursesGermany12: 'https://ik.imagekit.io/p2myilloy/Pictures/Nurses%20in%20Germany/51fd85c7-485a-411a-a07a-ca1d2bd9e473.png?updatedAt=1761409496357',
  nursesGermany13: 'https://ik.imagekit.io/p2myilloy/Pictures/Nurses%20in%20Germany/044cc606-29a8-4afa-b358-62de7bb17f8b.png?updatedAt=1761409494305',
  nursesGermany14: 'https://ik.imagekit.io/p2myilloy/Pictures/Nurses%20in%20Germany/0149b8d5-64fb-43fc-bad2-3640ccdafb91.png?updatedAt=1761409494177',
  
  // Rabat School Students (from ImageKit CDN)
  rabatSchoolStudents1: 'https://ik.imagekit.io/p2myilloy/Pictures/School%20In%20Rabat/Students/WhatsApp%20Image%202025-09-12%20%C3%A0%2013.02.04_75f48c0b.jpg?updatedAt=1761409484056',
  rabatSchoolStudents2: 'https://ik.imagekit.io/p2myilloy/Pictures/School%20In%20Rabat/Students/WhatsApp%20Image%202025-09-12%20%C3%A0%2013.02.04_3abdfba3.jpg?updatedAt=1761409483992',
  rabatSchoolStudents3: 'https://ik.imagekit.io/p2myilloy/Pictures/School%20In%20Rabat/Students/WhatsApp%20Image%202025-09-12%20%C3%A0%2013.02.03_2d41586e.jpg?updatedAt=1761409483892',
  rabatSchoolStudents4: 'https://ik.imagekit.io/p2myilloy/Pictures/School%20In%20Rabat/Students/WhatsApp%20Image%202025-09-12%20%C3%A0%2013.02.03_c552320f.jpg?updatedAt=1761409483841',
  rabatSchoolStudents5: 'https://ik.imagekit.io/p2myilloy/Pictures/School%20In%20Rabat/Students/WhatsApp%20Image%202025-09-12%20%C3%A0%2013.02.04_3e8e7bc6.jpg?updatedAt=1761409483803',
  rabatSchoolStudents6: 'https://ik.imagekit.io/p2myilloy/Pictures/School%20In%20Rabat/Students/WhatsApp%20Image%202025-09-12%20%C3%A0%2013.02.04_79ef9b75.jpg?updatedAt=1761409483595',
  
  // Rabat School Language Classrooms (from ImageKit CDN)
  rabatSchoolClassroom1: 'https://ik.imagekit.io/p2myilloy/Pictures/School%20In%20Rabat/Language%20Classroom/d3718c75-88b4-4c07-9045-72d5e9aa129e.png?updatedAt=1761409503629',
  rabatSchoolClassroom2: 'https://ik.imagekit.io/p2myilloy/Pictures/School%20In%20Rabat/Language%20Classroom/WhatsApp%20Image%202025-09-12%20%C3%A0%2013.02.01_aa04a29e.jpg?updatedAt=1761409485215',
  rabatSchoolClassroom3: 'https://ik.imagekit.io/p2myilloy/Pictures/School%20In%20Rabat/Language%20Classroom/WhatsApp%20Image%202025-09-12%20%C3%A0%2013.01.58_5503de21.jpg?updatedAt=1761409485191',
  rabatSchoolClassroom4: 'https://ik.imagekit.io/p2myilloy/Pictures/School%20In%20Rabat/Language%20Classroom/WhatsApp%20Image%202025-09-12%20%C3%A0%2013.04.50_8de695c9.jpg?updatedAt=1761409485210',
  rabatSchoolClassroom5: 'https://ik.imagekit.io/p2myilloy/Pictures/School%20In%20Rabat/Language%20Classroom/WhatsApp%20Image%202025-09-12%20%C3%A0%2013.04.51_1233c18d.jpg?updatedAt=1761409485199',
  rabatSchoolClassroom6: 'https://ik.imagekit.io/p2myilloy/Pictures/School%20In%20Rabat/Language%20Classroom/WhatsApp%20Image%202025-09-12%20%C3%A0%2013.01.59_8b5d550c.jpg?updatedAt=1761409485195',
  rabatSchoolClassroom7: 'https://ik.imagekit.io/p2myilloy/Pictures/School%20In%20Rabat/Language%20Classroom/WhatsApp%20Image%202025-09-12%20%C3%A0%2013.01.58_2b8be133.jpg?updatedAt=1761409485157',
  rabatSchoolClassroom8: 'https://ik.imagekit.io/p2myilloy/Pictures/School%20In%20Rabat/Language%20Classroom/WhatsApp%20Image%202025-09-12%20%C3%A0%2013.01.58_77b0594d.jpg?updatedAt=1761409485171',
} as const;

// ==================== AGGREGATED EXPORTS ====================
// Export all URLs in a single object for easy access
export const ALL_URLS = {
  social: SOCIAL_URLS,
  contact: CONTACT_URLS,
  partners: PARTNER_URLS,
  education: EDUCATION_URLS,
  legal: LEGAL_URLS,
  resources: RESOURCE_URLS,
  media: MEDIA_URLS,
  mediaContent: MEDIA_CONTENT_URLS,
  applications: APPLICATION_URLS,
  morocco: MOROCCO_URLS,
  support: SUPPORT_URLS,
  careers: CAREER_URLS,
  events: EVENT_URLS,
  tools: TOOLS_URLS,
  images: IMAGE_URLS,
} as const;

// ==================== HELPER FUNCTIONS ====================

/**
 * Get a URL by category and key
 * @param category - The URL category (e.g., 'social', 'contact')
 * @param key - The specific URL key within the category
 * @returns The URL string or undefined if not found
 */
export function getUrl(
  category: keyof typeof ALL_URLS,
  key: string
): string | undefined {
  const categoryUrls = ALL_URLS[category];
  if (categoryUrls && key in categoryUrls) {
    return categoryUrls[key as keyof typeof categoryUrls];
  }
  return undefined;
}

/**
 * Check if a URL is external (not part of the main domain)
 * @param url - The URL to check
 * @returns boolean indicating if the URL is external
 */
export function isExternalUrl(url: string): boolean {
  try {
    const urlObj = new URL(url);
    return !urlObj.hostname.includes('amal-care.de');
  } catch {
    return false;
  }
}

/**
 * Get all URLs from a specific category
 * @param category - The URL category
 * @returns Object containing all URLs in the category
 */
export function getUrlsByCategory<T extends keyof typeof ALL_URLS>(
  category: T
): typeof ALL_URLS[T] {
  return ALL_URLS[category];
}


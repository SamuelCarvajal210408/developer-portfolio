export type Language = 'en' | 'es';

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  architectureHighlights: string[];
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  category: 'backend' | 'frontend' | 'microservice' | 'infrastructure';
  metrics?: {
    label: string;
    value: string;
  };
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  skills: {
    name: string;
    level?: string;
    iconName?: string;
    highlight?: boolean;
  }[];
}

export interface Translations {
  nav: {
    projects: string;
    skills: string;
    aiWorkflow: string;
    contact: string;
    resume: string;
    statusAvailable: string;
  };
  hero: {
    locationBadge: string;
    greeting: string;
    name: string;
    roleTitle: string;
    roleSubtitle: string;
    summary: string;
    aiVelocityHighlight: string;
    ctaWork: string;
    ctaCv: string;
    ctaContact: string;
    githubAria: string;
    linkedinAria: string;
    quickStats: {
      experience: { number: string; label: string };
      aiSpeedup: { number: string; label: string };
      coverage: { number: string; label: string };
    };
  };
  projects: {
    sectionTag: string;
    title: string;
    subtitle: string;
    viewCode: string;
    liveDemo: string;
    architectureTitle: string;
    items: ProjectItem[];
  };
  skills: {
    sectionTag: string;
    title: string;
    subtitle: string;
    categories: {
      languages: SkillCategory;
      frameworks: SkillCategory;
      developerTooling: SkillCategory;
    };
    aiWorkflow: {
      badge: string;
      title: string;
      subtitle: string;
      description: string;
      pillars: {
        title: string;
        desc: string;
      }[];
    };
  };
  contact: {
    sectionTag: string;
    title: string;
    subtitle: string;
    description: string;
    emailLabel: string;
    emailAddress: string;
    copyEmail: string;
    copied: string;
    sendEmail: string;
    linkedinLabel: string;
    linkedinCta: string;
    githubLabel: string;
    githubCta: string;
    locationCard: {
      title: string;
      value: string;
      timezone: string;
    };
    availabilityCard: {
      title: string;
      status: string;
      note: string;
    };
  };
  cvModal: {
    title: string;
    subtitle: string;
    downloadPdf: string;
    close: string;
    sections: {
      profile: string;
      coreStack: string;
      keyStrengths: string;
    };
  };
  footer: {
    tagline: string;
    builtWith: string;
    allRightsReserved: string;
    systemStatus: string;
  };
}

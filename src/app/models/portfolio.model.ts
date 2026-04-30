export interface SocialLink {
    label: string;
    url: string;
    icon: string;
}

export interface Profile {
    name: string;
    title: string;
    roles: string[];
    tagline: string;
    summary: string;
    location: string;
    email: string;
    phone?: string;
    avatarUrl?: string;
    initials: string;
    linkedin: string;
    github: string;
    resumeUrl?: string;
    socials: SocialLink[];
}

export type SkillCategory =
    | 'Frontend'
    | 'Backend'
    | 'Database'
    | 'DevOps'
    | 'Testing'
    | 'Tools';

export interface Skill {
    name: string;
    category: SkillCategory;
    /** 0-100 */
    level: number;
    years?: number;
}

export interface Project {
    name: string;
    summary: string;
    description: string;
    stack: string[];
    role: string;
    highlights: string[];
    repoUrl?: string;
    liveUrl?: string;
    period?: string;
    featured?: boolean;
    /** Tag used for filtering (e.g. "Frontend", "Full-stack") */
    tag: string;
}

export interface Experience {
    company: string;
    role: string;
    period: string;
    location?: string;
    achievements: string[];
    stack: string[];
}

export interface Education {
    institution: string;
    degree: string;
    period: string;
    score?: string;
}

export interface Stat {
    label: string;
    value: number;
    suffix?: string;
    icon: string;
}

export interface Service {
    title: string;
    description: string;
    icon: string;
    bullets: string[];
}

export interface Certification {
    name: string;
    issuer: string;
    year: string;
    url?: string;
    icon: string;
}

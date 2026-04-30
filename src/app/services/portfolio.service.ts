import { Injectable } from '@angular/core';
import {
    Certification,
    Education,
    Experience,
    Profile,
    Project,
    Service,
    Skill,
    SkillCategory,
    Stat,
} from '../models/portfolio.model';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
    readonly profile: Profile = {
        name: 'Siddheshwar Thakare',
        title: 'Full-Stack Software Engineer',
        roles: [
            'Full-Stack Engineer',
            'Angular Specialist',
            'Node.js Developer',
            'UI / UX Enthusiast',
        ],
        tagline:
            'I design and build fast, accessible, theme-aware web applications — end to end.',
        summary:
            'Full-stack engineer with 5+ years building production Angular front-ends and Node/Java back-ends. ' +
            'I care about clean architecture, performance, and a polished user experience. From REST APIs and data models ' +
            'to responsive, SSR-ready UIs with strong testing discipline — I enjoy owning the whole stack.',
        location: 'Maharashtra, India',
        email: 'tsiddheshwar@gmail.com',
        avatarUrl: 'assets/ST_icon.png',
        initials: 'ST',
        linkedin: 'https://www.linkedin.com/in/tsiddheshwar',
        github: 'https://github.com/tsiddheshwar',
        resumeUrl: 'assets/resume.json',
        socials: [
            { label: 'GitHub', url: 'https://github.com/tsiddheshwar', icon: 'github' },
            { label: 'LinkedIn', url: 'https://www.linkedin.com/in/tsiddheshwar', icon: 'linkedin' },
            { label: 'Email', url: 'mailto:tsiddheshwar@gmail.com', icon: 'mail' },
        ],
    };

    readonly stats: Stat[] = [
        { label: 'Years of experience', value: 5, suffix: '+', icon: 'clock' },
        { label: 'Projects shipped', value: 25, suffix: '+', icon: 'rocket' },
        { label: 'Technologies', value: 20, suffix: '+', icon: 'layers' },
        { label: 'Open-source packages', value: 1, suffix: '', icon: 'package' },
    ];

    readonly skills: Skill[] = [
        { name: 'Angular', category: 'Frontend', level: 95, years: 5 },
        { name: 'TypeScript', category: 'Frontend', level: 92, years: 5 },
        { name: 'JavaScript (ES6+)', category: 'Frontend', level: 95, years: 6 },
        { name: 'RxJS / Signals', category: 'Frontend', level: 85, years: 4 },
        { name: 'HTML5 / CSS3 / SCSS', category: 'Frontend', level: 92, years: 6 },
        { name: 'Bootstrap 5', category: 'Frontend', level: 85, years: 4 },
        { name: 'React', category: 'Frontend', level: 65, years: 1 },

        { name: 'Node.js / Express', category: 'Backend', level: 80, years: 3 },
        { name: 'Java / Spring Boot', category: 'Backend', level: 70, years: 2 },
        { name: 'Python', category: 'Backend', level: 60, years: 1 },
        { name: 'REST API design', category: 'Backend', level: 85, years: 4 },

        { name: 'MongoDB', category: 'Database', level: 78, years: 3 },
        { name: 'MySQL / PostgreSQL', category: 'Database', level: 70, years: 3 },

        { name: 'Git / GitHub', category: 'DevOps', level: 92, years: 6 },
        { name: 'Azure DevOps', category: 'DevOps', level: 70, years: 2 },
        { name: 'GitHub Actions', category: 'DevOps', level: 70, years: 2 },
        { name: 'Docker', category: 'DevOps', level: 60, years: 1 },

        { name: 'Jasmine / Karma', category: 'Testing', level: 85, years: 4 },
        { name: 'Jest', category: 'Testing', level: 70, years: 2 },
        { name: 'Cypress', category: 'Testing', level: 65, years: 1 },

        { name: 'VS Code', category: 'Tools', level: 95 },
        { name: 'Postman', category: 'Tools', level: 85 },
        { name: 'Figma', category: 'Tools', level: 65 },
    ];

    readonly skillCategories: SkillCategory[] = [
        'Frontend',
        'Backend',
        'Database',
        'DevOps',
        'Testing',
        'Tools',
    ];

    readonly services: Service[] = [
        {
            title: 'Front-End Development',
            description:
                'Production-grade Angular applications with strong typing, reactive state, and pixel-perfect UI.',
            icon: 'code',
            bullets: ['Angular 18+ / Signals', 'Reactive forms & RxJS', 'SSR & prerendering'],
        },
        {
            title: 'Back-End & APIs',
            description:
                'REST APIs, data modelling and integrations on Node.js or Java Spring Boot.',
            icon: 'server',
            bullets: ['Node / Express', 'Java / Spring Boot', 'MongoDB & SQL'],
        },
        {
            title: 'UI / UX & Design Systems',
            description:
                'Accessible, responsive, theme-aware interfaces built on solid design tokens.',
            icon: 'palette',
            bullets: ['Light / dark theming', 'Component libraries', 'a11y & responsive'],
        },
        {
            title: 'DevOps & Quality',
            description:
                'CI/CD pipelines, automated testing and code-quality discipline that scales with the team.',
            icon: 'shield',
            bullets: ['GitHub Actions / Azure DevOps', 'Unit + e2e testing', 'Code reviews & mentoring'],
        },
    ];

    readonly projects: Project[] = [
        {
            name: 'Personal Portfolio (this site)',
            summary:
                'Theme-aware Angular 21 SSR portfolio with prerendering and accessible UI.',
            description:
                'Built from scratch with Angular 21 standalone components, server-side rendering, ' +
                'static prerendering and a custom CSS-token theme system supporting light, dark and ' +
                'auto (OS-follow) modes.',
            stack: ['Angular 21', 'TypeScript', 'SSR', 'SCSS', 'Bootstrap 5'],
            role: 'Designer & Developer',
            tag: 'Full-stack',
            featured: true,
            highlights: [
                'CSS custom-property theming with persisted user preference',
                'SSR + static prerender via @angular/ssr/node',
                'Modular, typed data model for projects, skills and experience',
            ],
            repoUrl: 'https://github.com/tsiddheshwar/tsiddheshwar.github.io',
            liveUrl: 'https://tsiddheshwar.github.io/',
            period: '2025 – Present',
        },
        {
            name: 'Insurance Policy Admin Platform',
            summary:
                'Enterprise Angular front-end for managing policies, claims and underwriting.',
            description:
                'Contributed to a large-scale modular Angular monorepo serving operations users. ' +
                'Built reusable form-engine components, optimised change detection and added unit-tested ' +
                'shared services for HTTP and state.',
            stack: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'Java Spring Boot'],
            role: 'Senior Front-End Engineer',
            tag: 'Frontend',
            featured: true,
            highlights: [
                'Reduced first-contentful-paint by ~30% via lazy modules and OnPush',
                'Authored a dynamic form schema renderer used across 6 modules',
                'Raised unit-test coverage on owned modules above 85%',
            ],
            period: '2023 – 2025',
        },
        {
            name: 'Real-time Chat Sample',
            summary:
                'Angular + Node demo of a streaming chat UI with optimistic updates.',
            description:
                'A small showcase of building a chat interface with optimistic UI, ' +
                'graceful error states and accessible keyboard interactions.',
            stack: ['Angular', 'Node.js', 'WebSockets', 'SCSS'],
            role: 'Solo Developer',
            tag: 'Full-stack',
            featured: false,
            highlights: [
                'Optimistic message rendering with rollback on failure',
                'Accessible message list with virtualised rendering',
            ],
            repoUrl: 'https://github.com/tsiddheshwar',
        },
        {
            name: 'Component Library Starter',
            summary:
                'Reusable Angular component kit with theming hooks and Storybook docs.',
            description:
                'A starter library that bootstraps a typed Angular component kit with theme tokens, ' +
                'a11y baselines and an automated release pipeline.',
            stack: ['Angular', 'Storybook', 'SCSS', 'GitHub Actions'],
            role: 'Author',
            tag: 'Frontend',
            featured: false,
            highlights: [
                'Themeable via CSS custom properties',
                'Automated changelog & npm publish',
            ],
        },
        {
            name: 'REST API Boilerplate',
            summary: 'Opinionated Node/Express starter with auth, validation and tests.',
            description:
                'A production-style Node REST starter — JWT auth, request validation, structured logging, ' +
                'integration tests and Docker-ready.',
            stack: ['Node.js', 'Express', 'MongoDB', 'Jest', 'Docker'],
            role: 'Author',
            tag: 'Backend',
            featured: false,
            highlights: ['JWT auth + refresh tokens', 'Layered service architecture'],
        },
        {
            name: 'first-style',
            summary:
                'Framework-agnostic HTML5 styling library — published on npm.',
            description:
                'A zero-config, lightweight CSS library that ships consistent baseline styles for every ' +
                'standard HTML5 tag. Responsive by default, with fluid typography, automatic light/dark ' +
                'theming via prefers-color-scheme, and an optional JS helper for manual theme toggling. ' +
                'Works in plain HTML, React, Angular and Vue.',
            stack: ['CSS', 'HTML5', 'JavaScript', 'npm'],
            role: 'Author & Maintainer',
            tag: 'Open-source',
            featured: true,
            highlights: [
                'Published to npm as first-style — used as the base layer of this very portfolio',
                'Responsive fluid typography and spacing across all viewports',
                'Light/dark + system theming via data-fs-theme + prefers-color-scheme',
                'Optional createFirstStyleTheme() helper with localStorage persistence',
            ],
            repoUrl: 'https://github.com/tsiddheshwar/first-style',
            liveUrl: 'https://www.npmjs.com/package/first-style',
            period: '2026 – Present',
        },
    ];

    readonly experience: Experience[] = [
        {
            company: 'Capgemini',
            role: 'Senior Software Engineer',
            period: '2022 – Present',
            location: 'Pune, India',
            stack: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'Azure DevOps'],
            achievements: [
                'Lead front-end developer on an enterprise insurance platform serving 10k+ daily users',
                'Mentor 3 junior engineers; review PRs and run weekly code-quality clinics',
                'Drove migration from Angular 14 → 18 across multiple feature modules',
            ],
        },
        {
            company: 'Tata Consultancy Services',
            role: 'Software Engineer',
            period: '2020 – 2022',
            location: 'Pune, India',
            stack: ['Angular', 'JavaScript', 'Node.js', 'MongoDB', 'MySQL'],
            achievements: [
                'Delivered customer-facing modules for a banking SPA used by branch staff',
                'Built reusable component library reducing duplicated UI code by ~40%',
                'Owned end-to-end delivery: design → implementation → unit tests → deployment',
            ],
        },
    ];

    readonly education: Education[] = [
        {
            institution: 'Savitribai Phule Pune University',
            degree: 'B.E. in Computer Engineering',
            period: '2014 – 2018',
            score: 'First Class with Distinction',
        },
    ];

    readonly certifications: Certification[] = [
        {
            name: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
            issuer: 'Microsoft',
            year: '2023',
            icon: 'cloud',
        },
        {
            name: 'Angular — The Complete Guide',
            issuer: 'Udemy',
            year: '2021',
            icon: 'badge',
        },
        {
            name: 'JavaScript Algorithms and Data Structures',
            issuer: 'freeCodeCamp',
            year: '2020',
            icon: 'code',
        },
    ];

    /** Tags used by the project filter chips (always starts with "All"). */
    readonly projectTags = [
        'All',
        ...Array.from(new Set(this.projects.map((p) => p.tag))),
    ];
}

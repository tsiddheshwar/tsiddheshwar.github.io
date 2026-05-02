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
        name: 'Siddheshwar Sunil Tekale',
        title: 'Senior Software Engineer',
        roles: [
            'Senior Software Engineer',
            'Full-Stack Developer',
            'Angular Specialist',
            'Node.js Developer',
            'UI / UX Enthusiast',
            'AI / ML Integration Specialist',
            'Solution Designer & Problem Solver',
        ],
        tagline:
            'I design and build scalable, AI-integrated enterprise solutions with cloud-native architecture — end to end.',
        summary:
            'Senior engineer with 6+ years building production Angular/React front-ends, Python/Node.js back-ends, and Azure cloud solutions. ' +
            'Specialized in AI/ML integration, enterprise architecture (microservices, SPFx, Docker, K8s), and full-stack AI-powered applications. ' +
            'I care about clean architecture, scalability, performance optimization, and executive-level solution design. From semantic search and vector databases ' +
            'to CI/CD pipelines and infrastructure automation — I own the entire delivery lifecycle.',
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
        { label: 'Years of experience', value: 6, suffix: '+', icon: 'clock' },
        { label: 'Projects shipped', value: 30, suffix: '+', icon: 'rocket' },
        { label: 'Technologies', value: 35, suffix: '+', icon: 'layers' },
        { label: 'AI-powered solutions', value: 4, suffix: '+', icon: 'sparkles' },
        { label: 'Open-source packages', value: 2, suffix: '', icon: 'package' },

    ];

    readonly skills: Skill[] = [
        // Frontend
        { name: 'Angular 18', category: 'Frontend', level: 95, years: 5 },
        { name: 'React.js', category: 'Frontend', level: 85, years: 3 },
        { name: 'TypeScript', category: 'Frontend', level: 95, years: 5 },
        { name: 'JavaScript (ES6+)', category: 'Frontend', level: 95, years: 6 },
        { name: 'RxJS / Signals', category: 'Frontend', level: 90, years: 5 },
        { name: 'NgRx', category: 'Frontend', level: 85, years: 4 },
        { name: 'HTML5 / CSS3 / SCSS', category: 'Frontend', level: 95, years: 6 },
        { name: 'Bootstrap 5 / Tailwind CSS', category: 'Frontend', level: 90, years: 4 },
        { name: 'D3.js / SVG', category: 'Frontend', level: 75, years: 2 },
        { name: 'Micro-Frontend (Module Federation)', category: 'Frontend', level: 80, years: 2 },
        { name: 'SharePoint / SPFx', category: 'Frontend', level: 85, years: 2 },

        // Backend
        { name: 'Node.js / Express', category: 'Backend', level: 85, years: 4 },
        { name: 'Python (FastAPI, Flask)', category: 'Backend', level: 80, years: 3 },
        { name: 'REST API design', category: 'Backend', level: 90, years: 5 },
        { name: 'GraphQL (basics)', category: 'Backend', level: 60, years: 1 },
        { name: 'WebSockets', category: 'Backend', level: 75, years: 2 },

        // AI / ML & Cloud Intelligence
        { name: 'Azure OpenAI', category: 'AI/ML', level: 85, years: 2 },
        { name: 'Azure Document Intelligence', category: 'AI/ML', level: 80, years: 2 },
        { name: 'Semantic Search & Vector DBs', category: 'AI/ML', level: 80, years: 2 },
        { name: 'Prompt Engineering', category: 'AI/ML', level: 75, years: 1 },
        { name: 'LangChain (basics)', category: 'AI/ML', level: 65, years: 1 },

        // Cloud & DevOps
        { name: 'Microsoft Azure (App Service, Functions, AI Services)', category: 'Cloud', level: 90, years: 3 },
        { name: 'Docker & Docker Compose', category: 'Cloud', level: 85, years: 3 },
        { name: 'Kubernetes (K8s)', category: 'Cloud', level: 80, years: 2 },
        { name: 'Azure DevOps Pipelines', category: 'Cloud', level: 90, years: 3 },
        { name: 'GitHub Actions', category: 'Cloud', level: 80, years: 2 },
        { name: 'CI/CD Pipeline Design', category: 'Cloud', level: 90, years: 3 },
        { name: 'Azure Monitor & Application Insights', category: 'Cloud', level: 75, years: 2 },

        // Database
        { name: 'NoSQL (MongoDB, CosmosDB)', category: 'Database', level: 85, years: 4 },
        { name: 'SQL (PostgreSQL, SQL Server)', category: 'Database', level: 85, years: 4 },
        { name: 'Vector Databases (Azure AI Search, Pinecone)', category: 'Database', level: 75, years: 2 },

        // Testing & Quality
        { name: 'Jasmine / Karma', category: 'Testing', level: 90, years: 5 },
        { name: 'Jest', category: 'Testing', level: 80, years: 3 },
        { name: 'Cypress (basics)', category: 'Testing', level: 70, years: 1 },
        { name: 'JMeter (Load Testing)', category: 'Testing', level: 75, years: 1 },
        { name: 'TDD / Unit Testing', category: 'Testing', level: 90, years: 4 },

        // Tools & Practices
        { name: 'Git / GitHub', category: 'Tools', level: 95, years: 6 },
        { name: 'Postman / REST Client', category: 'Tools', level: 90, years: 5 },
        { name: 'Azure DevOps (VSTS)', category: 'Tools', level: 90, years: 4 },
        { name: 'Agile / Scrum / SAFe', category: 'Tools', level: 85, years: 5 },
        { name: 'VS Code', category: 'Tools', level: 95, years: 5 },
        { name: 'Architecture Design (SPA, Microservices, MVC)', category: 'Tools', level: 90, years: 4 },
        { name: 'Solution Design & ADRs', category: 'Tools', level: 85, years: 2 },
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
            name: 'Order Engineer AI Assistant',
            summary:
                'AI-powered web assistant with semantic search for resolving product order holds.',
            description:
                'Designed and built a full AI-powered web assistant to reduce costly order hold delays. Integrated Azure OpenAI semantic search across ' +
                'distributed vector databases with an inbuilt AI chatbot, order viewer, and side-by-side comparison tool. Secured with OKTA OAuth 2.0 ' +
                'enterprise authentication for production use.',
            stack: ['Angular 18', 'Python', 'FastAPI', 'Azure OpenAI', 'Vector DB', 'OKTA', 'Bootstrap 5', 'Docker'],
            role: 'Lead Developer & Designer',
            tag: 'Full-stack',
            featured: true,
            highlights: [
                'Reduced hold resolution time by 50% via intelligent semantic search',
                'Cut manual intervention by 60% through AI-powered pattern matching',
                'Enterprise-grade authentication with OKTA OAuth 2.0',
                'Microservice architecture with Docker CI/CD on Azure',
            ],
            period: '2024 – Present',
        },
        {
            name: 'RFQ Summary AI Assistant',
            summary:
                'AI pipeline for automated extraction and summarization of client requirement documents.',
            description:
                'Designed and built an end-to-end AI pipeline using Azure Document Intelligence to automatically extract, interpret, and summarize ' +
                'client requirement documents from scanned or handwritten RFQ documents into structured quotations, eliminating manual extraction bottlenecks.',
            stack: ['React.ts', 'Python', 'FastAPI', 'Azure Document Intelligence', 'Tailwind CSS', 'Docker', 'Node.js'],
            role: 'Lead Developer & Designer',
            tag: 'Full-stack',
            featured: true,
            highlights: [
                'Eliminated manual RFQ extraction process, reducing end-to-end processing time by 40%',
                'Azure Document Intelligence for high-accuracy OCR and data extraction',
                'Automated requirement interpretation and structured quotation generation',
            ],
            period: '2024 – Present',
        },
        {
            name: 'iJSA Predictive Safety Analysis Dashboard',
            summary:
                'AI-backed predictive safety platform with real-time multi-site data integration and D3.js visualizations.',
            description:
                'Designed and built a full predictive safety platform for global job safety analysis tracking. Integrated real-time incident data from ' +
                'multiple sites with AI-powered incident prediction, deployed as a React + SPFx application on SharePoint and Azure with interactive ' +
                'D3.js world map visualizations for proactive safety decision-making.',
            stack: ['React.ts', 'SPFx', 'D3.js', 'SharePoint', 'Python', 'FastAPI', 'Azure', 'Bootstrap 5'],
            role: 'Lead Developer & Designer',
            tag: 'Full-stack',
            featured: true,
            highlights: [
                'Real-time multi-site incident data integration and AI-powered prediction',
                'Interactive D3.js world map dashboard for geographic incident visualization',
                'Deployed on SharePoint with Azure backend and microservice architecture',
                'Empowered safety teams with data-driven, proactive decision-making instead of reactive response',
            ],
            period: '2023 – 2024',
        },
        {
            name: 'GenAI Aided DD Source Code Generation',
            summary:
                'GenAI-powered application for automated Device Description source code generation from FDS documents.',
            description:
                'Conceived, designed, and built a GenAI-powered application that automatically generates Device Description (DD) source code from ' +
                'uploaded FDS documents using Azure OpenAI, backed by a microservice architecture with Docker and Azure DevOps CI/CD. Complex domain-specific ' +
                'problem solved through iterative prompt engineering and model fine-tuning. Deployed on Azure with full observability and monitoring.',
            stack: ['Angular 18', 'Python', 'FastAPI', 'Azure OpenAI (GPT)', 'SCSS', 'Bootstrap 5', 'Docker', 'Azure DevOps', 'Microservices', 'TDD'],
            role: 'Lead Developer & Designer',
            tag: 'Full-stack',
            featured: true,
            highlights: [
                '80% generation accuracy achieved through careful prompt engineering',
                '70% reduction in manual specialist effort and domain expertise required',
                'Won 1st Prize for Most Innovative Project at Emerson Tech Day 2025',
                'Full CI/CD pipeline on Azure DevOps with Docker containerization',
                'Microservice architecture enabling future scalability and maintainability',
            ],
            period: '2024 – 2025',
        },
        {
            name: 'Plantweb Advisor – Mismeasurement Module',
            summary:
                'Web module for Emerson\'s remote oil & gas monitoring platform used by enterprise clients.',
            description:
                'Developed and maintained the mismeasurement detection module for Emerson\'s Plantweb Advisor remote monitoring platform. ' +
                'Integrated with AmCharts for real-time data visualization, implemented micro-frontend architecture for scalability, and provided ' +
                'support for online, offline, and printable views across all device sizes.',
            stack: ['Angular 12', 'AmCharts 3', 'Micro-Frontend', 'SVG', 'XML', 'TFS', 'Jasmine', 'Karma'],
            role: 'Senior Developer & Maintainer',
            tag: 'Frontend',
            featured: false,
            highlights: [
                'Mismeasurement detection and alerting for oil & gas instrumentation',
                'Complex data visualization with AmCharts 3 for real-time monitoring',
                'Micro-frontend architecture for independent team deployment',
                'Used by enterprise clients: Total Energies, Baltic Exchange, and others',
            ],
            period: '2020 – 2023',
        },
        {
            name: 'Boeing Toolbox Horizon',
            summary:
                'Mission-critical aerospace maintenance platform for aircraft fault diagnosis and repair documentation.',
            description:
                'Contributed to feature development and defect resolution on Boeing\'s Toolbox Horizon, a mission-critical web application used globally ' +
                'by service engineers, mechanics, and pilots for aircraft fault diagnosis, repair, and maintenance documentation. Delivered features in ' +
                'online, offline, and printable form across desktop, laptop, and tablet devices.',
            stack: ['Angular 12', 'Java', 'HTML5', 'CSS3', 'Git', 'Azure DevOps (VSTS)', 'Jasmine', 'Karma'],
            role: 'Senior Systems Engineer',
            tag: 'Frontend',
            featured: false,
            highlights: [
                'Mission-critical platform used by global aerospace service engineers',
                'Online, offline, and printable views across all device form factors',
                'Complex state management for robust fault diagnosis workflows',
                'Enterprise-grade testing with Jasmine/Karma unit tests',
            ],
            period: '2019 – 2023',
        },
        {
            name: 'Personal Portfolio (this site)',
            summary:
                'High-performance Angular 21 SSR portfolio with theme-aware UI and static prerendering.',
            description:
                'Built from scratch with Angular 21 standalone components, server-side rendering, static prerendering, and a custom CSS-token ' +
                'theme system supporting light, dark, and auto (OS-follow) modes. Demonstrates modern Angular best practices including signals, ' +
                'reactive forms, and performance optimization techniques.',
            stack: ['Angular 21', 'TypeScript', 'SSR', 'SCSS', 'Bootstrap 5', 'Node.js'],
            role: 'Designer & Developer',
            tag: 'Full-stack',
            featured: true,
            highlights: [
                'CSS custom-property theming with persisted user preference',
                'SSR + static prerender via @angular/ssr/node for SEO and performance',
                'Modular, typed data model for projects, skills, and experience',
                'Responsive design with accessibility best practices',
            ],
            repoUrl: 'https://github.com/tsiddheshwar/tsiddheshwar.github.io',
            liveUrl: 'https://tsiddheshwar.github.io/',
            period: '2025 – Present',
        },
        {
            name: 'first-style',
            summary:
                'Framework-agnostic HTML5 styling library — published on npm.',
            description:
                'A zero-config, lightweight CSS library that ships consistent baseline styles for every standard HTML5 tag. Responsive by default, ' +
                'with fluid typography, automatic light/dark theming via prefers-color-scheme, and an optional JS helper for manual theme toggling. ' +
                'Works in plain HTML, React, Angular, and Vue.',
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
        {
            name: 'Mindroid',
            summary:
                'Mindroid CLI for creating and building JS-first Android apps.',
            description:
                'A command-line interface for creating and building Android applications using JavaScript as the primary language. ' +
                'Mindroid streamlines the Android development experience by providing tools to generate APKs and AABs, making it easier ' +
                'to build production-grade Android apps from JavaScript/TypeScript code.',
            stack: ['JavaScript', 'TypeScript', 'Android', 'CLI', 'npm'],
            role: 'Author',
            tag: 'Open-source',
            featured: true,
            highlights: [
                'Published to npm as mindroid CLI tool',
                'Support for creating and building JS-first Android apps',
                'Generate APK and AAB artifacts for app distribution',
                'Latest version 0.2.0 with improved tooling',
            ],
            repoUrl: 'https://github.com/tsiddheshwar/mindroid',
            liveUrl: 'https://www.npmjs.com/package/mindroid',
            period: '2026 – Present',
        },
    ];

    readonly experience: Experience[] = [
        {
            company: 'Emerson Electric Co.',
            role: 'Senior Engineer I – Software Development',
            period: 'Dec 2025 – Present',
            location: 'Pune, India',
            stack: ['Angular 18', 'React.js', 'Python', 'FastAPI', 'Azure', 'Azure OpenAI', 'Docker', 'Kubernetes', 'Azure DevOps'],
            achievements: [
                'Own full software delivery lifecycle for multiple product streams: problem identification → solution design → CI/CD deployment → production monitoring',
                'Design and maintain CI/CD pipelines on Azure DevOps with Docker containerization and multi-stage builds for zero-downtime releases',
                'Lead sprint ceremonies and PI Planning; architect scalable enterprise applications with explicit performance budgets and observability',
                'Evaluate and prototype emerging AI/ML technologies through timeboxed POCs; act as technical bridge between stakeholders and engineering teams',
                'Define engineering standards via code reviews, design reviews, and ADRs; mentor junior engineers on solution thinking',
            ],
        },
        {
            company: 'Emerson Electric Co.',
            role: 'Engineer II – Software Development',
            period: 'Apr 2023 – Dec 2025',
            location: 'Pune, India',
            stack: ['Angular 18', 'React.js', 'Python', 'FastAPI', 'Azure OpenAI', 'Docker', 'Azure DevOps', 'D3.js', 'Vector Databases'],
            achievements: [
                'Designed and built Order Engineer AI Assistant—intelligent chatbot with semantic search and multi-database integration; reduced resolution time by 50%',
                'Developed RFQ Summary AI Assistant using Azure Document Intelligence, reducing processing time by 40%',
                'Created iJSA Predictive Safety Dashboard using React/SPFx with D3.js world map visualizations for real-time incident tracking',
                'Built GenAI Aided DD Source Code Generation tool achieving 80% accuracy and 70% manual effort reduction; won 1st Prize at Emerson Tech Day 2025',
                'Designed and maintained Azure DevOps CI/CD pipelines with Docker; performed JMeter load testing for concurrency validation',
                'Maintained unit test coverage (Jasmine/Karma) using TDD practices; actively participated in SAFe Agile ceremonies',
            ],
        },
        {
            company: 'Infosys Ltd.',
            role: 'Technology Analyst',
            period: 'Oct 2021 – Apr 2023',
            location: 'Pune, India',
            stack: ['Angular 12', 'Java', 'Azure DevOps', 'Git', 'Jasmine', 'Karma', 'SAFe Agile'],
            achievements: [
                'Acting Tech Lead for offshore team: managed daily stand-ups, sprint planning, backlog grooming, and velocity tracking',
                'Participated in PI Planning under SAFe framework; broke down program increments into sprint-level user stories',
                'Owned end-to-end feature delivery on Boeing Toolbox Horizon: designed technical artifacts, developed features, conducted code reviews',
                'Diagnosed and resolved high-priority production incidents with root cause analysis and preventive measures',
                'Awarded Insta Award (September 2021) for strong technical acumen and complex task completion',
            ],
        },
        {
            company: 'Infosys Ltd.',
            role: 'Systems Engineer',
            period: 'Mar 2020 – Oct 2021',
            location: 'Pune, India',
            stack: ['Angular 12', 'Java', 'Git', 'VSTS', 'Jasmine', 'Karma'],
            achievements: [
                'Contributed to feature development and bug resolution on Boeing Toolbox Horizon (Angular 12, Java)',
                'Wrote Jasmine/Karma unit tests following TDD standards; collaborated in Agile/Scrum ceremonies',
                'Completed Infosys Global Agile Developer Certification and Infosys Certified Front-End Web Developer-101',
                'Worked across cross-functional teams to deliver sprint goals on mission-critical aerospace maintenance platform',
            ],
        },
        {
            company: 'Infosys Ltd.',
            role: 'Systems Engineer Trainee',
            period: 'Oct 2019 – Feb 2020',
            location: 'Mysore, India',
            stack: ['Python', 'SQL', 'MERN Stack', 'React.js'],
            achievements: [
                'Completed Infosys Foundation Training in Python, SQL, and DBMS; trained in MERN full-stack development',
                'Ranked as Higher Performer in training cohort at Infosys Training Centre, Mysore',
                'Earned Infosys Certified React Professional certification (February 2020)',
            ],
        },
    ];

    readonly education: Education[] = [
        {
            institution: 'Savitribai Phule Pune University',
            degree: 'B.E. in Information Technology',
            period: '2015 – 2019',
            score: 'First Class with Distinction',
        },
    ];

    readonly certifications: Certification[] = [
        {
            name: 'Infosys Insta Award',
            issuer: 'Infosys Ltd.',
            year: '2021',
            icon: 'award',
        },
        {
            name: 'Infosys Global Agile Developer Certification',
            issuer: 'Infosys Ltd.',
            year: '2020',
            icon: 'badge',
        },
        {
            name: 'Infosys Certified Front-End Web Developer-101',
            issuer: 'Infosys Ltd.',
            year: '2020',
            icon: 'code',
        },
        {
            name: 'Infosys Certified React Professional',
            issuer: 'Infosys Ltd.',
            year: '2020',
            icon: 'code',
        },
        {
            name: 'Research Publication: Prediction of Chronic Kidney Disease Using ML',
            issuer: 'IJARCCE (Vol. 7, Issue 10)',
            year: '2018',
            icon: 'book',
        },
    ];

    /** Tags used by the project filter chips (always starts with "All"). */
    readonly projectTags = [
        'All',
        ...Array.from(new Set(this.projects.map((p) => p.tag))),
    ];
}

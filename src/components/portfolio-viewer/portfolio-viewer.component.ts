import { Component } from '@angular/core';
import { AboutComponent } from '../../app/components/portfolio/about/about.component';
import { CertificationsComponent } from '../../app/components/portfolio/certifications/certifications.component';
import { ContactCtaComponent } from '../../app/components/portfolio/contact-cta/contact-cta.component';
import { ExperienceComponent } from '../../app/components/portfolio/experience/experience.component';
import { HeroComponent } from '../../app/components/portfolio/hero/hero.component';
import { ProjectsComponent } from '../../app/components/portfolio/projects/projects.component';
import { ServicesComponent } from '../../app/components/portfolio/services/services.component';
import { SkillsComponent } from '../../app/components/portfolio/skills/skills.component';
import { StatsComponent } from '../../app/components/portfolio/stats/stats.component';

@Component({
    selector: 'app-portfolio-viewer',
    standalone: true,
    imports: [
        HeroComponent,
        StatsComponent,
        AboutComponent,
        ServicesComponent,
        SkillsComponent,
        ProjectsComponent,
        ExperienceComponent,
        CertificationsComponent,
        ContactCtaComponent,
    ],
    templateUrl: './portfolio-viewer.component.html',
    styleUrl: './portfolio-viewer.component.scss',
})
export class PortfolioViewerComponent {}

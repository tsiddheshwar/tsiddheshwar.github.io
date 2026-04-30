import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { Project } from '../../../models/portfolio.model';
import { PortfolioService } from '../../../services/portfolio.service';
import { SectionHeaderComponent } from '../section-header/section-header.component';

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [CommonModule, SectionHeaderComponent],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
    private readonly portfolio = inject(PortfolioService);
    readonly tags = this.portfolio.projectTags;
    readonly active = signal<string>('All');

    readonly visibleProjects = computed<Project[]>(() => {
        const tag = this.active();
        return tag === 'All'
            ? this.portfolio.projects
            : this.portfolio.projects.filter((p) => p.tag === tag);
    });

    select(tag: string): void {
        this.active.set(tag);
    }
}

import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Skill, SkillCategory } from '../../../models/portfolio.model';
import { PortfolioService } from '../../../services/portfolio.service';
import { SectionHeaderComponent } from '../section-header/section-header.component';

@Component({
    selector: 'app-skills',
    standalone: true,
    imports: [CommonModule, SectionHeaderComponent],
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.scss',
})
export class SkillsComponent {
    private readonly portfolio = inject(PortfolioService);
    readonly categories: ('All' | SkillCategory)[] = ['All', ...this.portfolio.skillCategories];
    readonly active = signal<'All' | SkillCategory>('All');

    skills(): Skill[] {
        const a = this.active();
        return a === 'All'
            ? this.portfolio.skills
            : this.portfolio.skills.filter((s) => s.category === a);
    }

    select(category: 'All' | SkillCategory): void {
        this.active.set(category);
    }
}

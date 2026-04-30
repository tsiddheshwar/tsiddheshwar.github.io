import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../../services/portfolio.service';
import { SectionHeaderComponent } from '../section-header/section-header.component';

@Component({
    selector: 'app-experience',
    standalone: true,
    imports: [CommonModule, SectionHeaderComponent],
    templateUrl: './experience.component.html',
    styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
    private readonly portfolio = inject(PortfolioService);
    readonly experience = this.portfolio.experience;
    readonly education = this.portfolio.education;
}

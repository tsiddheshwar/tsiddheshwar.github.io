import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../../services/portfolio.service';
import { SectionHeaderComponent } from '../section-header/section-header.component';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [CommonModule, SectionHeaderComponent],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss',
})
export class AboutComponent {
    private readonly portfolio = inject(PortfolioService);
    readonly profile = this.portfolio.profile;

    readonly highlights = [
        { label: 'Location', value: this.profile.location },
        { label: 'Email', value: this.profile.email, href: 'mailto:' + this.profile.email },
        { label: 'Open to', value: 'Full-time · Remote · Hybrid' },
        { label: 'Languages', value: 'English · Hindi · Marathi' },
    ];
}

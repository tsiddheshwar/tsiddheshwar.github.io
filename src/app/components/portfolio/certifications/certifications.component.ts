import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../../services/portfolio.service';
import { SectionHeaderComponent } from '../section-header/section-header.component';

@Component({
    selector: 'app-certifications',
    standalone: true,
    imports: [CommonModule, SectionHeaderComponent],
    templateUrl: './certifications.component.html',
    styleUrl: './certifications.component.scss',
})
export class CertificationsComponent {
    private readonly portfolio = inject(PortfolioService);
    readonly certs = this.portfolio.certifications;
}

import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Service } from '../../../models/portfolio.model';
import { PortfolioService } from '../../../services/portfolio.service';
import { SectionHeaderComponent } from '../section-header/section-header.component';

@Component({
    selector: 'app-services',
    standalone: true,
    imports: [CommonModule, SectionHeaderComponent],
    templateUrl: './services.component.html',
    styleUrl: './services.component.scss',
})
export class ServicesComponent {
    private readonly portfolio = inject(PortfolioService);
    readonly services: Service[] = this.portfolio.services;
}

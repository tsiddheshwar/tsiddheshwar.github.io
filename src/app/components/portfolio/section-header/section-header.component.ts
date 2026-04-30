import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-section-header',
    standalone: true,
    imports: [CommonModule],
    template: `
        <header class="section-header" [class.center]="center">
            <span class="section-eyebrow" *ngIf="eyebrow">{{ eyebrow }}</span>
            <h2 class="section-heading">
                <ng-content></ng-content>
            </h2>
            <p class="section-sub" *ngIf="subtitle">{{ subtitle }}</p>
            <div class="section-divider"></div>
        </header>
    `,
    styles: [
        `
            :host { display: block; }
            .section-header { margin-bottom: 2.5rem; }
            .section-header.center { text-align: center; }
            .section-heading {
                font-size: clamp(1.6rem, 3.5vw, 2.25rem);
                font-weight: 800;
                color: var(--text-primary);
                margin-bottom: 0.75rem;
                letter-spacing: -0.02em;
            }
            .section-sub {
                color: var(--text-secondary);
                max-width: 640px;
                line-height: 1.6;
                margin-bottom: 0.75rem;
            }
            .section-header.center .section-sub { margin-left: auto; margin-right: auto; }
            .section-divider {
                width: 56px;
                height: 4px;
                border-radius: 2px;
                background: var(--gradient-brand);
            }
            .section-header.center .section-divider {
                margin-left: auto; margin-right: auto;
            }
        `,
    ],
})
export class SectionHeaderComponent {
    @Input() eyebrow?: string;
    @Input() subtitle?: string;
    @Input() center = false;
}

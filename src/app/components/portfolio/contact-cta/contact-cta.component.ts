import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PortfolioService } from '../../../services/portfolio.service';

@Component({
    selector: 'app-contact-cta',
    standalone: true,
    imports: [RouterLink],
    template: `
        <section class="cta-section" id="cta">
            <div class="container">
                <div class="cta-card">
                    <div class="cta-bg" aria-hidden="true"></div>
                    <div class="cta-content">
                        <h2 class="cta-title">
                            Have a project in mind?
                            <span class="text-gradient">Let's talk.</span>
                        </h2>
                        <p class="cta-sub">
                            I'm currently available for new full-time roles or freelance work — drop a note
                            and I'll get back within 24 hours.
                        </p>
                        <div class="cta-actions">
                            <a routerLink="/contact" class="btn btn-primary btn-lg">Contact me</a>
                            <a [href]="'mailto:' + profile.email" class="btn btn-outline-secondary btn-lg">
                                {{ profile.email }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
    styles: [
        `
            :host { display: block; }
            .cta-section { padding: 5rem 0; }
            .cta-card {
                position: relative;
                overflow: hidden;
                border-radius: 24px;
                padding: 4rem 2rem;
                text-align: center;
                background: var(--bg-surface);
                border: 1px solid var(--border-color);
                box-shadow: var(--shadow-lg);
            }
            .cta-bg {
                position: absolute;
                inset: 0;
                background: var(--gradient-soft);
            }
            .cta-content { position: relative; z-index: 1; }
            .cta-title {
                font-size: clamp(1.6rem, 3.5vw, 2.5rem);
                font-weight: 800;
                color: var(--text-primary);
                margin-bottom: 0.75rem;
                letter-spacing: -0.02em;
            }
            .cta-sub {
                color: var(--text-secondary);
                max-width: 580px;
                margin: 0 auto 1.75rem;
                line-height: 1.65;
            }
            .cta-actions {
                display: flex;
                flex-wrap: wrap;
                gap: 0.75rem;
                justify-content: center;
            }
        `,
    ],
})
export class ContactCtaComponent {
    readonly profile = inject(PortfolioService).profile;
}

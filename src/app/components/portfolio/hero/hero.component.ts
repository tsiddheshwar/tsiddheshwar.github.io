import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
    Component,
    Inject,
    OnDestroy,
    OnInit,
    PLATFORM_ID,
    inject,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { PortfolioService } from '../../../services/portfolio.service';

@Component({
    selector: 'app-hero',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit, OnDestroy {
    private readonly portfolio = inject(PortfolioService);
    readonly profile = this.portfolio.profile;

    /** Currently displayed role, used for typing animation. */
    displayedRole = '';
    private roleIndex = 0;
    private charIndex = 0;
    private deleting = false;
    private timer: ReturnType<typeof setTimeout> | null = null;

    constructor(@Inject(PLATFORM_ID) private readonly platformId: object) {}

    ngOnInit(): void {
        if (!isPlatformBrowser(this.platformId)) {
            // SSR: show first role statically
            this.displayedRole = this.profile.roles[0] ?? '';
            return;
        }
        this.tick();
    }

    ngOnDestroy(): void {
        if (this.timer) clearTimeout(this.timer);
    }

    private tick(): void {
        const roles = this.profile.roles;
        if (!roles.length) return;
        const current = roles[this.roleIndex];

        if (!this.deleting) {
            this.charIndex++;
            this.displayedRole = current.slice(0, this.charIndex);
            if (this.charIndex === current.length) {
                this.deleting = true;
                this.timer = setTimeout(() => this.tick(), 1500);
                return;
            }
        } else {
            this.charIndex--;
            this.displayedRole = current.slice(0, this.charIndex);
            if (this.charIndex === 0) {
                this.deleting = false;
                this.roleIndex = (this.roleIndex + 1) % roles.length;
            }
        }
        this.timer = setTimeout(() => this.tick(), this.deleting ? 40 : 80);
    }
}

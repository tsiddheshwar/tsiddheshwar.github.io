import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
    AfterViewInit,
    Component,
    ElementRef,
    Inject,
    OnInit,
    OnDestroy,
    PLATFORM_ID,
    QueryList,
    ViewChildren,
    inject,
} from '@angular/core';
import { Stat } from '../../../models/portfolio.model';
import { PortfolioService } from '../../../services/portfolio.service';

@Component({
    selector: 'app-stats',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './stats.component.html',
    styleUrl: './stats.component.scss',
})
export class StatsComponent implements OnInit, AfterViewInit, OnDestroy {
    private readonly portfolio = inject(PortfolioService);
    readonly stats: Stat[] = this.portfolio.stats;

    /** Animated values shown in the template (start at 0). */
    displayValues: number[] = this.stats.map(() => 0);

    @ViewChildren('statCard') private cards!: QueryList<ElementRef<HTMLElement>>;
    private observer?: IntersectionObserver;
    private animated = false;

    constructor(@Inject(PLATFORM_ID) private readonly platformId: object) {}

    ngOnInit(): void {
        if (!isPlatformBrowser(this.platformId)) {
            // SSR: initialize with final values before first change detection pass.
            this.displayValues = this.stats.map((s) => s.value);
        }
    }

    ngAfterViewInit(): void {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        this.observer = new IntersectionObserver(
            (entries) => {
                if (entries.some((e) => e.isIntersecting) && !this.animated) {
                    this.animated = true;
                    this.animateCounts();
                    this.observer?.disconnect();
                }
            },
            { threshold: 0.3 },
        );
        const first = this.cards.first?.nativeElement;
        if (first) this.observer.observe(first);
    }

    ngOnDestroy(): void {
        this.observer?.disconnect();
    }

    private animateCounts(): void {
        const duration = 1400;
        const start = performance.now();
        const targets = this.stats.map((s) => s.value);

        const step = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            this.displayValues = targets.map((v) => Math.round(v * eased));
            if (t < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }
}

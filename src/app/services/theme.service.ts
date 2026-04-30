import { Injectable, RendererFactory2, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

export type ThemeMode = 'light' | 'dark' | 'auto';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private renderer: Renderer2;
  private readonly STORAGE_KEY = 'portfolio-theme';

  private _mode = new BehaviorSubject<ThemeMode>(this.loadSavedMode());
  readonly mode$ = this._mode.asObservable();

  get mode(): ThemeMode {
    return this._mode.value;
  }

  constructor(
    rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.applyTheme(this._mode.value);

    if (typeof window !== 'undefined') {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', () => {
          if (this._mode.value === 'auto') {
            this.applyTheme('auto');
          }
        });
    }
  }

  setMode(mode: ThemeMode): void {
    this._mode.next(mode);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(this.STORAGE_KEY, mode);
    }
    this.applyTheme(mode);
  }

  private loadSavedMode(): ThemeMode {
    if (typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem(this.STORAGE_KEY);
      if (saved === 'light' || saved === 'dark' || saved === 'auto') {
        return saved;
      }
    }
    return 'auto';
  }

  private applyTheme(mode: ThemeMode): void {
    const html = this.document.documentElement;
    if (!html) return;

    let resolved: 'light' | 'dark';
    if (mode === 'auto') {
      resolved =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light';
    } else {
      resolved = mode;
    }

    // Bootstrap 5.3 native dark mode
    this.renderer.setAttribute(html, 'data-bs-theme', resolved);
    // Custom token hook
    this.renderer.setAttribute(html, 'data-theme', resolved);
    // first-style theme hook (https://npmjs.com/package/first-style)
    this.renderer.setAttribute(html, 'data-fs-theme', resolved);
  }
}

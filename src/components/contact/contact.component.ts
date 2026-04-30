import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PortfolioService } from '../../app/services/portfolio.service';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss',
})
export class ContactComponent {
    private readonly portfolio = inject(PortfolioService);
    private readonly fb = inject(FormBuilder);

    readonly profile = this.portfolio.profile;
    submitted = false;

    readonly form = this.fb.nonNullable.group({
        name: ['', [Validators.required, Validators.minLength(2)]],
        email: ['', [Validators.required, Validators.email]],
        subject: ['', [Validators.required, Validators.minLength(3)]],
        message: ['', [Validators.required, Validators.minLength(10)]],
    });

    get f() {
        return this.form.controls;
    }

    submit(): void {
        this.submitted = true;
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        const { name, email, subject, message } = this.form.getRawValue();
        const body = `${message}\n\n— ${name} (${email})`;
        const href =
            'mailto:' +
            encodeURIComponent(this.profile.email) +
            '?subject=' +
            encodeURIComponent(subject) +
            '&body=' +
            encodeURIComponent(body);
        // Open in same tab — most desktop mail clients handle this gracefully.
        if (typeof window !== 'undefined') {
            window.location.href = href;
        }
    }
}

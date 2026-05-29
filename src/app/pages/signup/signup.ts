import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [RouterLink],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class SignupComponent {
  private router = inject(Router);

  onSubmit(): void {
    // In a real app, register the user first. For now, navigate to profile.
    this.router.navigate(['/profile']);
  }
}

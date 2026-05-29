import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  private router = inject(Router);

  onSubmit(): void {
    // In a real app, authenticate first. For now, navigate to profile.
    this.router.navigate(['/profile']);
  }
}

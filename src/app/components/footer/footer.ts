import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface FooterNavGroup {
  title: string;
  links: { label: string; href: string }[];
}

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class FooterComponent {
  readonly year = new Date().getFullYear();

  readonly navGroups: FooterNavGroup[] = [
    {
      title: 'Explore',
      links: [
        { label: 'Boutique',    href: '/' },
        { label: 'Collections', href: '/collections' },
        { label: 'Heritage',    href: '/heritage' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy',   href: '/privacy-policy' },
        { label: 'Terms of Service', href: '/terms-of-service' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Shipping & Returns', href: '/shipping-returns' },
        { label: 'Contact',            href: '/concierge' },
      ],
    },
  ];
}

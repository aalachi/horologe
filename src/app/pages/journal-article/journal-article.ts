import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  selector: 'app-journal-article',
  imports: [RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './journal-article.html',
  styleUrl: './journal-article.css',
})
export class JournalArticleComponent {}

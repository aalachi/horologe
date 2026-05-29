import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  selector: 'app-journal',
  imports: [RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './journal.html',
  styleUrl: './journal.css',
})
export class JournalComponent {}

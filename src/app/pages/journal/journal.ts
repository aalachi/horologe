import { Component } from '@angular/core';

import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  selector: 'app-journal',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './journal.html',
  styleUrl: './journal.css',
})
export class JournalComponent {}

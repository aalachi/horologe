import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  selector: 'app-heritage',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './heritage.html',
  styleUrl: './heritage.css',
})
export class HeritageComponent {}

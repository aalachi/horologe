import { Component } from '@angular/core';
import { HeaderComponent }   from '../../components/header/header';
import { HeroComponent }     from '../../components/hero/hero';
import { CardsOneComponent } from '../../components/cards-one/cards-one';
import { CardsTwoComponent } from '../../components/cards-two/cards-two';
import { FooterComponent }   from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    HeroComponent,
    CardsOneComponent,
    CardsTwoComponent,
    FooterComponent,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {}

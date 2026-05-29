import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [ReactiveFormsModule, RouterLink, CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class SearchComponent {}

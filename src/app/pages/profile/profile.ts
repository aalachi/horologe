import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderComponent } from "../../components/header/header";

@Component({
  selector: 'app-profile',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, HeaderComponent],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class ProfileComponent { }

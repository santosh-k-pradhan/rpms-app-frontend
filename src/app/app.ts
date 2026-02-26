import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  template: `
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand">Retail Pricing System</a>

      <ul class="navbar-nav">
        <li class="nav-item">
          <a routerLink="/upload" class="nav-link">Upload</a>
        </li>
        <li class="nav-item">
          <a routerLink="/pricing" class="nav-link">Search</a>
        </li>
      </ul>
    </div>
  </nav>

  <router-outlet></router-outlet>
  `
})
export class App {}
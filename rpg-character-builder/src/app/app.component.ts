import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <header class="site-header">
      <div class="container header-inner">
        <div class="logo">
          <a href="/" class ="logo-link" aria-label="Home">
            <span class="logo-mark">⚔️</span>
            <span class="logo-text">rpg<span>character</span>builder</span>
          </a>
        </div>

        <nav class="header-nav" aria-label="Primary">
          <ul>
            <li><a href="#" aria-current="page">Dashboard</a></li>
            <li><a href="#">Characters</a></li>
            <li><a href="#">Create</a></li>
            <li><a href="#">Inventory</a></li>
            <li><a href="#">Settings</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <main id="main" class="site-main">
      <div class="container">
        <section class="hero">
          <div class="hero-image">
            <img src="/assets/hero-image.jpg" alt="Epic RPG scene" />
          </div>

          <h1>Forge Your Legend</h1>
          <p>
            Craft, customize, and manage a roster of heroes. Whether you’re an
            avid gamer, RPG enthusiast or simply an adventurer, this is your
            tavern.
          </p>
          <div class="call-to-action">
            <a class="btn btn-primary" href="#">New Character</a>
            <a class="btn btn-ghost" href="#">Browse Builds</a>
          </div>
        </section>

        <section class="main-content" aria-label="Application content">
          <router-outlet></router-outlet>
        </section>
      </div>
    </main>

    <footer class="site-footer">
      <div class="container footer-inner">
        <nav class="footer-nav" aria-label="Footer">
          <ul>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Characters</a></li>
            <li><a href="#">Create</a></li>
            <li><a href="#">Inventory</a></li>
            <li><a href="#">Settings</a></li>
          </ul>
        </nav>
        <p class="copyright">
          © 2025 rpg-character-builder. All rights reserved.
        </p>
      </div>
    </footer>
  `,
  styles: [``],
})
export class AppComponent {
  title = 'rpg-character-builder';
}

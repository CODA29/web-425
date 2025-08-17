import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <section class="landing-hero">
      <div class="hero-content">
        <h1>Welcome to the RPG Character Builder</h1>
        <p>
          Every epic journey begins with a single hero. The RPG Character Builder is your
          forge, your canvas, and your storytelling companion. Whether you are preparing
          for a Dungeons & Dragons campaign, crafting characters for your own RPG world,
          or simply exploring the creative depths of role-playing games, this platform is
          designed to bring your imagination to life.
        </p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#">Start Building</a>
          <a class="btn btn-ghost" href="#">Explore Characters</a>
        </div>
      </div>
      <div class="hero-image">
        <img src="/assets/django.jpeg" alt="Fantasy landscape with adventurers" />
      </div>
    </section>

    <section class="landing-content">
      <article class="intro">
        <h2>Craft Legends, One Character at a Time</h2>
        <p>
          Characters are the heart of every role-playing adventure. They embody courage,
          wit, strength, and flaws. Our builder gives you the tools to shape unique
          characters, not just in statistics and abilities, but in personality, history, and
          motivation. Why settle for a generic hero when you can weave a story that feels
          alive? From the noble knight sworn to protect their kingdom to the rogue who
          wanders the shadows with secrets untold, the possibilities are endless.
        </p>
      </article>

      <div class="features">
        <div class="feature-card">
          <img src="/assets/customization.jpeg" alt="Character customization screen" />
          <h3>Deep Customization</h3>
          <p>
            Define your hero’s appearance, traits, skills, and even quirks. You can track
            backstories, alignments, and goals that give your character depth and meaning.
          </p>
        </div>
        <div class="feature-card">
          <img src="/assets/story.jpeg" alt="Adventurers on a quest" />
          <h3>Immersive Storytelling</h3>
          <p>
            Every character has a journey. Record their victories, setbacks, friendships,
            and rivalries as you craft a personal epic worth remembering.
          </p>
        </div>
        <div class="feature-card">
          <img src="assets/inventory.jpeg" alt="Fantasy weapons and inventory" />
          <h3>Manage Inventory</h3>
          <p>
            Keep track of weapons, gear, spells, and magical items. Build complete
            loadout that prepare your characters for anything the world throws at them.
          </p>
        </div>
      </div>
    </section>

    <section class="landing-closing">
      <h2>Your Adventure Awaits</h2>
      <p>
        The RPG Character Builder is more than a tool—it’s a gateway to endless
        storytelling. Whether you are a veteran dungeon master or someone brand new to
        role-playing games, this application provides a space where your imagination takes
        the lead. Step inside, create your heroes, and embark on adventures that will live
        in your memory and your campaigns for years to come.
      </p>
      <a class="btn btn-primary" href="#">Begin Your Journey</a>
    </section>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;800&family=Inter:wght@400;600;800&family=Merriweather:ital,wght@0,400;0,700;1,400&display=swap');
    :root {

      --surface: #121a24;
      --text: #e7eef7;
      --text-dim: #b5c2d6;
      --radius: 16px;
      --shadow: 0 8px 20px rgba(0,0,0,.35);
    }

    section { padding: 3rem 1rem; }

    h1, h2, h3 {
      font-family: 'Cinzel', serif;
      color: #fff;
    }
    p {
      font-family: 'Merriweather', serif;
      color: var(--text-dim);
      line-height: 1.6;
    }
    a, button {
      font-family: 'Inter', sans-serif;
    }

    /* Hero section */
    .landing-hero {
      display: grid;
      gap: 2rem;
      align-items: center;
      grid-template-columns: 1fr;
    }
    .hero-content { text-align: center; }
    .hero-content h1 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    .hero-image img {
      width: 100%;
      border-radius: var(--radius);
      box-shadow: var(--shadow);
    }
    .hero-actions {
      margin-top: 1rem;
      display: flex;
      justify-content: center;
      gap: 1rem;
    }

    /* Buttons */
    .btn {
      border-radius: 12px;
      padding: .6rem 1.2rem;
      text-decoration: none;
      display: inline-block;
      transition: 0.2s;
      font-weight: 600;
    }
    .btn-primary {
      background: #90ee90;
      color: #001018;
    }
    .btn-ghost {
      background: rgba(255, 255, 255, 0.24);
      color: var(--text);
    }
    .btn:hover { filter: brightness(.8); }

    /* Features */
    .features {
      margin-top: 2rem;
      display: grid;
      gap: 1.5rem;
    }
    .feature-card {
      background: var(--surface);
      border-radius: var(--radius);
      padding: 1.5rem;
      box-shadow: var(--shadow);
      text-align: center;
    }
    .feature-card img {
      width: 100%;
      max-height: 180px;
      object-fit: cover;
      border-radius: 12px;
      margin-bottom: 1rem;
    }
    .feature-card h3 { margin-bottom: .5rem; }

    /* Closing */
    .landing-closing {
      text-align: center;
      max-width: 700px;
      margin: 0 auto;
    }
    .landing-closing p {
      margin: 1rem 0 1.5rem;
    }

    /* Responsive */
    @media (min-width: 768px) {
      .landing-hero {
        grid-template-columns: 1.2fr 1fr;
        text-align: left;
      }
      .hero-actions { justify-content: flex-start; }
      .features {
        grid-template-columns: repeat(3, 1fr);
      }
    }

  `]
})
export class HomeComponent {

}

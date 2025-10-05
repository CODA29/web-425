import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Guild } from '../create-guild/create-guild.component';

@Component({
  selector: 'app-guild-display',
  standalone: true,
  imports: [ CommonModule],
  template: `
    @if (guilds.length > 0) {
      <div class="guild-cards-container">
        <h2>Created Guilds</h2>
        <div class="guild-cards">
          @for (g of guilds; track g.guildName) {
            <div class="guild-card">
              <h3>{{ g.guildName }}</h3>
              <p class="guild-type"><strong>Type: </strong> {{ g.type }}</p>
              <p class="guild-desc"><strong>Description: </strong> {{ g.description }}</p>
              <p class="guild-notify"><strong>Notifications: </strong> {{ g.notificationPreference }}</p>
            </div>
          }
        </div>
      </div>
    }@else {
      <p>No guilds have been created yet.</p>
    }
  `,
  styles: [`
    .guild-cards-container {
      margin-top: 40px;
    }

    .guild-cards {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
    }

    .guild-card {
      background: #2a2a3d;
      background: #121a24;
      border-radius: 10px;
      padding: 20px;
      box-shadow: 0 3px 6px rgba(0,0,0,0.2);
    }

    .guild-card h3 {
      color: #90ee90;
      margin-bottom: 10px;
      font-family: 'Cinzel', serif;
    }

    .guild-card p {
      margin: 1rem 0;
      font-size: 0.95rem;
      line-height: 1.4;
    }
  `]
})
export class GuildDisplayComponent {
  @Input() guilds: Guild[] = [];
}

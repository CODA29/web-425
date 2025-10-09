import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface CharacterFaction {
  name: string;
  description: string;
}

@Component({
  selector: 'app-character-faction',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `
    <div class="faction-container">
      <h2>Available Character Factions</h2>

      @if (errorMessage) {
        <div class="error-message">{{ errorMessage }}</div>
      }

      @if (!errorMessage && characterFactions.length > 0) {
        <div class="faction-grid">
          @for (faction of characterFactions; track faction.name) {
            <div class="faction-card">
              <h3>{{ faction.name }}</h3>
              <p>{{ faction.description }}</p>
            </div>
          }
        </div>
      } @else if (!errorMessage && characterFactions.length === 0) {
        <p class="no-factions">No factions found.</p>
      }
    </div>
  `,
  styles: [`
    .faction-container {
      padding: 2rem;
      text-align: center;
      margin: 40px 0;
    }

    .faction-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 1rem;
      margin-top: 1.5rem;
    }

    .faction-card {
      background: #121a24;
      color: #f5f5f5;
      padding: 1.25rem;
      border-radius: 12px;
    }

    .faction-card h3 {
      font-family: 'Cinzel', serif;
      color: #90ee90;
    }
    .faction-card p {
      font-family: 'Merriweather', serif;
      text-align: left;
      letter-spacing: .6px;
    }

    .error-message {
      color: #ff5555;
      padding: 1rem;
      font-weight: bold;
      font-family: 'Merriweather', serif;
      display: inline-block;
      margin-top: 1rem;
    }

    .no-factions {
      margin-top: 1rem;
      color: #90ee90;
    }
  `],
})
export class CharacterFactionComponent implements OnInit {
  characterFactions: CharacterFaction[] = [];
  errorMessage = '';

  private apiUrl = 'http://localhost:3000/api/character-factions';

  constructor(private http: HttpClient) {}

  ngOnInit(){
    this.fetchCharacterFactions();
  }

  fetchCharacterFactions() {
    this.http.get<CharacterFaction[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.characterFactions = data;
        this.errorMessage = '';
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Error fetching character factions.';
        this.characterFactions = [];
      },
    });
  }
}

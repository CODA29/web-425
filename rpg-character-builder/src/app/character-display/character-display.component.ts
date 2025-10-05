import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '../create-character/create-character.component';


@Component({
  selector: 'app-character-display',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="character-display">
      <h3>Your Created Characters</h3>

      @if (characters.length === 0) {
        <p class="empty-message">No characters created yet.</p>
      } @else {
        @for (character of characters; track character.id) {
          <div class="character-card">
            <h4>{{ character.name }}</h4>
            <p><strong>ID:</strong> {{ character.id }}</p>
            <p><strong>Gender:</strong> {{ character.gender }}</p>
            <p><strong>Class:</strong> {{ character.class }}</p>
          </div>
        }
      }
    </section>
  `,
  styles: [`
    .character-display {
      margin-top: 2rem;
      display: grid;
      gap: 1rem;
    }
    .character-card {
      background: #1b2634;
      border-radius: 10px;
      padding: 1.5rem;
      box-shadow: 0 4px 10px rgba(0,0,0,0.3);
      color: #e7eef7;
      font-family: 'Merriweather', serif;
    }
    .character-card h4 {
      margin: 0 0 0.5rem;
      color: #90ee90;
      font-family: 'Cinzel', serif;
    }
    .empty-message {
      color: #a0a0a0;
      font-style: italic;
      text-align: center;
      margin-top: 1rem;
    }
  `]
})
export class CharacterDisplayComponent {
  @Input() characters: Character[] = [];

}

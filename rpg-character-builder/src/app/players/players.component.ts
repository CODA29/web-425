export interface CharacterList{
  name: string;
  gender: string;
  class: string;
  faction: string;
  startingLocation: string;
  funFact: string;
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <h1>Characters Catalog</h1>
      <p>
        Explore our diverse roster of characters, each with unique backgrounds,
        skills, and stories that bring our game world to life.
      </p>

      <ul class="characters-container">
        @for (item of characters; track item) {
        <li class="characters-list">
          <div class="card">
            <h3>{{ item.name }}</h3>
            <p> Gender: {{ item.gender }}</p>
            <p> Class: {{ item.class }}</p>
            <p> Faction: {{ item.faction }}</p>
            <p> Starting Location: {{ item.startingLocation }}</p>
            <p> Fun Fact: {{ item.funFact }}</p>
          </div>
        </li>
        }
      </ul>
    </div>
  `,
  styles: `

    .characters-container {
      display: flex;
      flex-wrap: wrap;
      list-style-type: none;
      padding: 0;
    }
    .characters-list {
      flex: 0 1 calc(33.33% - 20px);
      margin: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    .card {
      padding: 20px;
      background-color: #121a24;
      border-radius: 8px;
    }
    .card h3{
      color: #90ee90;

    }
  `
})
export class PlayersComponent {
  characters: CharacterList[];

  constructor(){
    this.characters = [
      {
        name: 'Arin Swiftblade',
        gender:'Male',
        class: 'Rogue',
        faction: 'Shadow Guild',
        startingLocation: 'Duskwatch',
        funFact: 'Once stole a gem from a dragon\'s hoard without waking it'
      },
      {
        name: 'Liora Moonwhisper',
        gender: 'Female',
        class: 'Druid',
        faction: 'Emerald Enclave',
        startingLocation: 'Silvergrove',
        funFact: 'Can communicate with animals and has a pet owl named Whisper'
      },
      {
        name: 'Thalor Ironfist',
        gender: 'Male',
        class: 'Warrior',
        faction: 'Ironclad Legion',
        startingLocation: 'Stonehelm',
        funFact: 'Has never lost a duel and is known for his unbreakable shield'
      },
      {
        name: 'Elysia Starfire',
        gender: 'Female',
        class: 'Mage',
        faction: 'Arcane Order',
        startingLocation: 'Mystic Hollow',
        funFact: 'Can conjure small illusions to entertain children'
      },
      {
        name: 'Garruk Thunderaxe',
        gender: 'Male',
        class: 'Berserker',
        faction: 'Stormclaw Clan',
        startingLocation: 'Frostpeak',
        funFact: 'Once fought off a pack of wolves single-handedly'
      },
      {
        name: 'Sylvaine Nightshade',
        gender: 'Female',
        class: 'Assassin',
        faction: 'Silent Blades',
        startingLocation: 'Shadowfen',
        funFact: 'Can move without making a sound, even on dry leaves'
      },
      {
        name: 'Dorian Lightbringer',
        gender: 'Male',
        class: 'Paladin',
        faction: 'Order of the Radiant Heart',
        startingLocation: 'Sunspire',
        funFact: 'Once healed a village struck by plague using only his faith'
      },
      {
        name: 'Mira Windrider',
        gender: 'Female',
        class: 'Ranger',
        faction: 'Wild Hunt',
        startingLocation: 'Greenwood',
        funFact: 'Can track a creature for days without losing the trail'
      },
      {
        name: 'Korrin Stonebreaker',
        gender: 'Male',
        class: 'Bard',
        faction: 'Wandering Minstrels',
        startingLocation: 'Riversong',
        funFact: 'Has a song for every occasion and can charm almost anyone'
      },
      {
        name: 'Zara Shadowflame',
        gender: 'Female',
        class: 'Sorcerer',
        faction: 'Crimson Circle',
        startingLocation: 'Emberfall',
        funFact: 'Can control small flames and often uses fire tricks in her performances'
      }
    ];
  }

}

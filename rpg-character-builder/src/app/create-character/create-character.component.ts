export interface Character{
  id: number;
  name: string;
  gender: string;
  class: string;
}
export interface Faction{
  characters: Character[];
  characterId: number;
}

import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-character',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <section class="form-section">
      <h2>Create a new character</h2>
      <form #characterForm="ngForm" (ngSubmit)="createCharacter()">
        <!-- Name -->
        <div class="form-control">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            [(ngModel)]="name"
            required
            placeholder="Enter Character Name"
          />
        </div>

        <!-- Gender -->
        <div class="form-control">
          <label for="gender">Gender</label>
          <select
            id="gender"
            name="gender"
            [(ngModel)]="gender"
            required>
            @for (g of genders; track g) {
              <option [value]="g">{{ g }}</option>
            }
          </select>
        </div>

        <!-- Class -->
        <div class="form-control">
          <label for="class">Class</label>
          <select
            id="class"
            name="class"
            [(ngModel)]="class"
            required>
            @for (c of classes; track c) {
              <option [value]="c">{{ c }}</option>
            }
          </select>
        </div>

        <!-- Submit -->
        <button type="submit" class="btn" [disabled]="characterForm.invalid">Create</button>
      </form>


      <!-- Show created characters -->
      <div class="character-list" *ngIf="faction.characters.length > 0">
        <h3> Characters Created </h3>
        <ul>
          <li *ngFor="let c of faction.characters">
            <strong> {{ c.name }} </strong> ( Id - {{c.id}} | {{ c.gender }}, {{ c.class }})
          </li>
        </ul>

        <p class="error-message" *ngIf="errorMessage">{{ errorMessage }}</p>
      </div>
    </section>
  `,
  styles:
  [`


    .form-section {

      max-width: 500px;
      margin: 7rem auto;
      padding: 2rem;
      background: #121a24;
      border-radius: 12px;
      box-shadow: 0 8px 20px rgba(0,0,0,.35);
      color: #e7eef7;
      font-family: 'Merriweather', serif;
    }
    h2 {
      font-family: 'Cinzel', serif;
      text-align: center;
      margin-bottom: 1.5rem;
    }
    .form-control {
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;
    }
    label {
      margin-bottom: .5rem;
      font-weight: bold;
    }
    input, select {
      padding: 1rem;
      border-radius: 8px;
      border: 1px solid #444;
      background: #0e141c;
      color: #e7eef7;
      font-size: .9rem;
      font-family: 'Merriweather', serif;
    }
    input:focus, select:focus {
      outline: none;
      border-color: #7cc7ff;
      box-shadow: 0 0 0 2px rgba(124,199,255,.35);
    }
    .btn {
      margin-top: 1rem;
      width: 100%;
      padding: .75rem;
      border: none;
      border-radius: 10px;
      background: linear-gradient(90deg, #7cc7ff, #a68cff);
      background: #90ee90;
      color: #001018;
      font-weight: 800;
      font-size: .9rem;
      cursor: pointer;
      transition: filter .2s ease;
    }
    .btn:disabled {
      opacity: .5;
      cursor: not-allowed;
    }
    .btn:hover:not(:disabled) {
      filter: brightness(1.05);
    }
    .character-list {
      margin-top: 2rem;
    }
    .character-list h3 {
      font-family: 'Cinzel', serif;
      margin-bottom: .5rem;
    }
    .character-list li {
      padding: 1rem 0;
      border-bottom: 1px solid rgba(255,255,255,.1);
    }


  `]
  ,
})
export class CreateCharacterComponent {

  faction: Faction = { characterId: 1, characters: [] };
  name: string = '';
  gender: string = 'select gender';
  class: string = 'select class';

  genders: string[] = ['select gender', 'Male', 'Female', 'Other'];
  classes: string[] = ['select class', 'Mage', 'Rogue', 'Warrior'];

  errorMessage: string = '';



  createCharacter() {
    // if the default options are still selected, show an error
    if(this.gender === 'select gender' || this.class === 'select class') {
      this.errorMessage = 'Please complete all fields before creating a character.';
      return;
    }

    this.errorMessage = '';


    const newCharacter: Character = {
      //generate a random characterId between 1 and 1000 when creating the first character
      id: Math.floor(Math.random() * 1000) + 1,
      name: this.name,
      gender: this.gender,
      class: this.class
    };

    this.faction.characters.push(newCharacter);

    // Reset form
    this.resetForm();
  }

  //reset all form fields to their default values
  resetForm() {
    this.name = '';
    this.gender = this.genders[0];
    this.class = this.classes[0];

  }

}

export interface Guild {
  guildName: string;
  description: string;
  type: string;
  notificationPreference: string;
}

import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { GuildDisplayComponent } from '../guild-display/guild-display.component';
@Component({
  selector: 'app-create-guild',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, GuildDisplayComponent],
  template: `
    <div class="guild-form-container">
      <h1>Create a Guild</h1>

      <form [formGroup]="guildForm" (ngSubmit)="createGuild(); guildForm.reset()" novalidate>
        <!-- Guild Name -->
        <div class="form-group">
          <label for="guildName">Guild Name</label>
          <input id="guildName" type="text" formControlName="guildName" />
          @if (guildForm.get('guildName')?.touched && guildForm.get('guildName')?.invalid) {
            <div class="error">Guild name is required.</div>
          }
        </div>

        <!-- Description -->
        <div class="form-group">
          <label for="description">Description</label>
          <textarea id="description" rows="3" formControlName="description"></textarea>
          @if (guildForm.get('description')?.touched && guildForm.get('description')?.invalid) {
            <div class="error">Description is required.</div>
          }
        </div>

        <!-- Type -->
        <div class="form-group">
          <label for="type">Guild Type</label>
          <select id="type" formControlName="type">
            <option value="">-- Select a Type --</option>
            @for (t of types; track t) {
              <option [value]="t">{{ t }}</option>
            }
          </select>
          @if (guildForm.get('type')?.touched && guildForm.get('type')?.invalid) {
            <div class="error">Please select a type.</div>
          }
        </div>

        <!-- Notification Preference -->
        <div class="form-group">
          <label>Notification Preference</label>
          <div class="radio-group">
            @for (n of notificationPreference; track n) {
              <label>
                <input type="radio" formControlName="notificationPreference" [value]="n" /> {{ n }}
              </label>
            }
          </div>
          @if (guildForm.get('notificationPreference')?.touched && guildForm.get('notificationPreference')?.invalid) {
            <div class="error">Please select a notification preference.</div>
          }
        </div>

        <!-- Accept Terms -->
        <div class="form-group checkbox">
          <label>
            <input type="checkbox" formControlName="acceptTerms" />
            I accept the terms and conditions
          </label>
          @if (guildForm.get('acceptTerms')?.touched && guildForm.get('acceptTerms')?.invalid) {
            <div class="error">You must accept the terms.</div>
          }
        </div>

        <button type="submit" [disabled]="guildForm.invalid">Create Guild</button>
      </form>
    </div>

    <!-- Guilds Display -->
    <app-guild-display [guilds]="guilds"> </app-guild-display>
  `,
  styles: `
    .guild-form-container {
      max-width: 700px;
      margin: 7rem auto;
      background: #121a24;
      padding: 3rem;
      border-radius: 12px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.3);
      color: #f1f1f1;
    }

    h1, h2{
      font-family: 'Cinzel', serif;
      text-align: center;
      margin-bottom: 20px;
      color: #90ee90;
    }

    .form-group {
      margin-bottom: 15px;
    }

    label {
      display: block;
      font-weight: bold;
      margin-bottom: 5px;
      font-family: 'Merriweather', serif;
    }

    input[type="text"], textarea, select {
      width: 100%;
      padding: 10px;
      border: 1px solid #444;
      border-radius: 8px;
      background: #0e141c;
      color: #fff;
      font-family: 'Merriweather', serif;
      font-size: .9rem;
    }

    .radio-group {
      display: flex;
      gap: 20px;
      margin-top: 5px;
    }

    .checkbox {
      display: flex;
      align-items: center;
    }

    .error {
      color: #ff6666;
      font-size: 0.9rem;
      font-family: 'Merriweather', serif;
      margin-top: .5rem;
    }

    button {
      background: #90ee90;
      border: none;
      padding: 12px 20px;
      border-radius: 8px;
      font-weight: bold;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.3s ease;
    }

    button:disabled {
      background: #777;
      cursor: not-allowed;
    }
    button:hover:enabled {
      filter: brightness(.8);
    }

  `
})
export class CreateGuildComponent {
  guildForm: FormGroup;
  guilds: Guild[] = [
    // Example guild for initial display
    {
      guildName: 'Dragon Slayers',
      description: 'A guild dedicated to hunting dragons and other mythical creatures.',
      type: 'Competitive',
      notificationPreference: 'Email'
    },
    {
      guildName: 'Mystic Mages',
      description: 'A guild for those who practice the arcane arts and magic.',
      type: 'Educational',
      notificationPreference: 'In-App'
    },
    {
      guildName: 'Shadow Thieves',
      description: 'A stealthy guild specializing in covert operations and espionage.',
      type: 'Casual',
      notificationPreference: 'SMS'
    },
    {
      guildName: 'Warrior\'s Honor',
      description: 'A guild that values strength, bravery, and honor in battle.',
      type: 'Competitive',
      notificationPreference: 'Email'
    }
  ];


  types = ['Competitive', 'Casual', 'Social', 'Educational'];
  notificationPreference = ['Email', 'SMS', 'In-App'];

  @Output() guildCreated = new EventEmitter<Guild[]>();

  constructor(private fb: FormBuilder){
    this.guildForm = this.fb.group({
      guildName: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required],
      notificationPreference: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    });

    // Emit initial guild list on load
    this.emitGuilds();
  }

  createGuild(){
    if(this.guildForm.valid){
      const newGuild: Guild = this.guildForm.value;
      this.guilds.push(newGuild);
      this.guildForm.reset();
      this.emitGuilds();


      console.log('Guild created:', newGuild);
      alert("Guild created successfully!");
    }
  }

  private emitGuilds(){
    this.guildCreated.emit(this.guilds);
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuildDisplayComponent } from './guild-display.component';
import { CommonModule } from '@angular/common';

describe('GuildDisplayComponent', () => {
  let component: GuildDisplayComponent;
  let fixture: ComponentFixture<GuildDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuildDisplayComponent, CommonModule]
    }).compileComponents();

    fixture = TestBed.createComponent(GuildDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display guilds in the component correctly', () => {
    component.guilds = [
      { guildName: 'Dragon Slayers', description: 'Dragons beware!', type: 'Competitive', notificationPreference: 'Email' },
      { guildName: 'Mystic Mages', description: 'Arcane studies.', type: 'Educational', notificationPreference: 'In-App' }
    ];
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('.guild-card').length).toBe(2);
    expect(compiled.textContent).toContain('Dragon Slayers');
    expect(compiled.textContent).toContain('Mystic Mages');
  });

  it('should display a message for an empty guild list', () => {
    component.guilds = [];
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('No guilds have been created yet.');
  });

  it('should display correct guild details in each card', () => {
    component.guilds = [
      { guildName: 'Shadow Thieves', description: 'Stealth ops.', type: 'Casual', notificationPreference: 'SMS' }
    ];
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const card = compiled.querySelector('.guild-card') as HTMLElement;
    expect(card.textContent).toContain('Shadow Thieves');
    expect(card.textContent).toContain('Stealth ops.');
    expect(card.textContent).toContain('Casual');
    expect(card.textContent).toContain('SMS');
  });

});

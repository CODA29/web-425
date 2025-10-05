import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterDisplayComponent } from './character-display.component';
import { By } from '@angular/platform-browser';
import { Character } from '../create-character/create-character.component';


describe('CharacterDisplayComponent', () => {
  let component: CharacterDisplayComponent;
  let fixture: ComponentFixture<CharacterDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterDisplayComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterDisplayComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display characters correctly', () => {
    const mockCharacters: Character[] = [
      { id: 1, name: 'Alduin', gender: 'Male', class: 'Warrior' },
      { id: 2, name: 'Luna', gender: 'Female', class: 'Mage' },
    ];

    component.characters = mockCharacters;
    fixture.detectChanges();

    const characterCards = fixture.debugElement.queryAll(By.css('.character-card'));
    expect(characterCards.length).toBe(2);

    const firstCardText = characterCards[0].nativeElement.textContent;
    expect(firstCardText).toContain('Alduin');
    expect(firstCardText).toContain('Warrior');

  });

  it('should display a message for an empty character list', () => {
    component.characters = [];
    fixture.detectChanges();

    const emptyMessage = fixture.debugElement.query(By.css('.empty-message'));
    expect(emptyMessage).toBeTruthy();
    expect(emptyMessage.nativeElement.textContent).toContain('No characters created yet');

  });

  it('should always display the section header', () => {
    component.characters = [];
    fixture.detectChanges();

    const headerElement = fixture.debugElement.query(By.css('h3'));
    expect(headerElement).toBeTruthy();
    expect(headerElement.nativeElement.textContent.trim()).toBe('Your Created Characters');
  });

});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { CreateCharacterComponent } from './create-character.component';

describe('CreateCharacterComponent', () => {
  let component: CreateCharacterComponent;
  let fixture: ComponentFixture<CreateCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCharacterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate a random characterId between 1 and 1000 when creating the first character', () => {
    component.name = 'Test';
    component.gender = 'Male';
    component.class = 'Mage';

    component.createCharacter();

    expect(component.faction.characterId).toBeGreaterThan(0);
    expect(component.faction.characterId).toBeLessThanOrEqual(1000);
    expect(Number.isInteger(component.faction.characterId)).toBe(true);
  });

  it('should add a character with correct customization', () => {
    component.name = 'Gandalf';
    component.gender = 'Male';
    component.class = 'Rogue';

    component.createCharacter();

    const addedCharacter = component.faction.characters[0];

    expect(addedCharacter.name).toBe('Gandalf');
    expect(addedCharacter.gender).toBe('Male');
    expect(addedCharacter.class).toBe('Rogue');

  });

  it('should reset all form fields to their default values after resetForm is called', () => {

    component.name = 'Aragorn';
    component.gender = 'Female';
    component.class = 'Mage';

    component.resetForm();

    expect(component.name).toBe('');
    expect(component.gender).toBe('--select gender--');
    expect(component.class).toBe('--select class--');

  })
});

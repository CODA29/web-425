import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterFactionComponent } from './character-faction.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

describe('CharacterFactionComponent', () => {
  let component: CharacterFactionComponent;
  let fixture: ComponentFixture<CharacterFactionComponent>;
  let httpMock: HttpTestingController;

  const mockFactions = [
    { name: 'The Iron Brotherhood', description: 'Strong and loyal warriors' },
    { name: 'The Arcane Order', description: 'Masters of magic' }
  ]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterFactionComponent, HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterFactionComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);

  });

  afterEach(() => {
    httpMock.verify();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should handle errors when data is not found', () => {
    fixture.detectChanges();
    const req = httpMock.expectOne('http://localhost:3000/api/character-factions');
    req.flush({ message: 'Character factions not found.' }, { status: 404, statusText: 'Not Found' });

    expect(component.errorMessage).toBe('Character factions not found.');
    expect(component.characterFactions.length).toBe(0);
  });

  it('should correctly fetch a list of character factions', () => {
    fixture.detectChanges();
    const req = httpMock.expectOne('http://localhost:3000/api/character-factions');
    expect(req.request.method).toBe('GET');
    req.flush(mockFactions);

    expect(component.characterFactions.length).toBe(2);
    expect(component.characterFactions[0].name).toBe('The Iron Brotherhood');
    expect(component.errorMessage).toBe('');
  });

  it('should update the characterFactions div when character factions are found', () => {
    fixture.detectChanges();

    const req = httpMock.expectOne('http://localhost:3000/api/character-factions');
    req.flush(mockFactions);
    fixture.detectChanges();

    const factionElements = fixture.debugElement.queryAll(By.css('.faction-card'));
    expect(factionElements.length).toBe(2);
  });

});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateGuildComponent } from './create-guild.component';

describe('CreateGuildComponent', () => {
  let component: CreateGuildComponent;
  let fixture: ComponentFixture<CreateGuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateGuildComponent, ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateGuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid when empty', () => {
    expect(component.guildForm.valid).toBeFalsy();
    expect(component.guildForm.get('guildName')?.errors?.['required']).toBeTruthy();
    expect(component.guildForm.get('description')?.errors?.['required']).toBeTruthy();
    expect(component.guildForm.get('type')?.errors?.['required']).toBeTruthy();
    expect(component.guildForm.get('notificationPreference')?.errors?.['required']).toBeTruthy();
    expect(component.guildForm.get('acceptTerms')?.errors?.['required']).toBeTruthy();

  });

  it('form should be valid when all fields are filled correctly', () => {
    component.guildForm.controls['guildName'].setValue('Adventurers');
    component.guildForm.controls['description'].setValue('A guild for brave adventurers.');
    component.guildForm.controls['type'].setValue('Competitive');
    component.guildForm.controls['notificationPreference'].setValue('Email');
    component.guildForm.controls['acceptTerms'].setValue(true);

    expect(component.guildForm.valid).toBeTruthy();
  });

  it('should be invalid if acceptTerms is not checked', () => {
    component.guildForm.controls['guildName'].setValue('Adventurers');
    component.guildForm.controls['description'].setValue('A guild for brave adventurers.');
    component.guildForm.controls['type'].setValue('Competitive');
    component.guildForm.controls['notificationPreference'].setValue('Email');
    component.guildForm.controls['acceptTerms'].setValue(false);

    expect(component.guildForm.valid).toBeFalsy();
    expect(component.guildForm.get('acceptTerms')?.errors?.['required']).toBeTruthy();
  });

});

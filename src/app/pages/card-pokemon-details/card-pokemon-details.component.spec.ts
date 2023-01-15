import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPokemonDetailsComponent } from './card-pokemon-details.component';

describe('CardPokemonDetailsComponent', () => {
  let component: CardPokemonDetailsComponent;
  let fixture: ComponentFixture<CardPokemonDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPokemonDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPokemonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

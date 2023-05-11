import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FootballScoresPage } from './football-scores.page';

describe('FootballScoresPage', () => {
  let component: FootballScoresPage;
  let fixture: ComponentFixture<FootballScoresPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FootballScoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

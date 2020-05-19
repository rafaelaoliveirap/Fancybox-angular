import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarUsuariosComponent } from './cadastrar-usuarios.component';

describe('CadastrarUsuariosComponent', () => {
  let component: CadastrarUsuariosComponent;
  let fixture: ComponentFixture<CadastrarUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

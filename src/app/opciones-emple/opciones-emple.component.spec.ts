import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionesEmpleComponent } from './opciones-emple.component';

describe('OpcionesEmpleComponent', () => {
  let component: OpcionesEmpleComponent;
  let fixture: ComponentFixture<OpcionesEmpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpcionesEmpleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpcionesEmpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

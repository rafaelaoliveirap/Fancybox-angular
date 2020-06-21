import { TestBed } from '@angular/core/testing';
import { OngService } from './ong.service';

describe('LoginService', () => {
  let service: OngService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OngService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

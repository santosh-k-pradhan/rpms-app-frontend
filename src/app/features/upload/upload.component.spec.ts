import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UploadComponent } from './upload.component';
import { PricingService } from '../../core/services/pricing.service';
import { of } from 'rxjs';

describe('UploadComponent', () => {
  let component: UploadComponent;
  let fixture: ComponentFixture<UploadComponent>;
  let pricingServiceSpy: jasmine.SpyObj<PricingService>;

  beforeEach(async () => {

    pricingServiceSpy = jasmine.createSpyObj('PricingService', ['uploadCSV']);

    await TestBed.configureTestingModule({
      imports: [UploadComponent], // Standalone component
      providers: [
        { provide: PricingService, useValue: pricingServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call uploadCSV when upload() is triggered', () => {
    const mockResponse = { count: 5 };
    pricingServiceSpy.uploadCSV.and.returnValue(of(mockResponse));

    const file = new File(['test'], 'test.csv', { type: 'text/csv' });
    component.selectedFile = file;

    component.upload();

    expect(pricingServiceSpy.uploadCSV).toHaveBeenCalledWith(file);
  });

});
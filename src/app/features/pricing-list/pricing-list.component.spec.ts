import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PricingListComponent } from './pricing-list.component';
import { PricingService } from '../../core/services/pricing.service';
import { of } from 'rxjs';
import { Pricing } from '../../shared/models/pricing.model';

describe('PricingListComponent', () => {
  let component: PricingListComponent;
  let fixture: ComponentFixture<PricingListComponent>;
  let pricingServiceSpy: jasmine.SpyObj<PricingService>;

  beforeEach(async () => {

    pricingServiceSpy = jasmine.createSpyObj('PricingService', ['search', 'update']);

    await TestBed.configureTestingModule({
      imports: [PricingListComponent], // Standalone component
      providers: [
        { provide: PricingService, useValue: pricingServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PricingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load records on search()', () => {
    const mockData: Pricing[] = [
      {
        _id: '1',
        storeId: 'S1',
        sku: 'SKU1',
        productName: 'Product 1',
        price: 100,
        date: '2026-01-01'
      }
    ];

    pricingServiceSpy.search.and.returnValue(of(mockData));

    component.search();

    expect(component.records.length).toBe(1);
    expect(pricingServiceSpy.search).toHaveBeenCalled();
  });

  it('should call update when save() is triggered', () => {
    const record: Pricing = {
      _id: '1',
      storeId: 'S1',
      sku: 'SKU1',
      productName: 'Product 1',
      price: 100,
      date: '2026-01-01'
    };

    pricingServiceSpy.update.and.returnValue(of(record));

    component.save(record);

    expect(pricingServiceSpy.update).toHaveBeenCalledWith('1', record);
  });

});
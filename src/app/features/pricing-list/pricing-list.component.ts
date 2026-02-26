import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PricingService } from '../../core/services/pricing.service';
import { Pricing } from '../../shared/models/pricing.model';

@Component({
  selector: 'app-pricing-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pricing-list.component.html',
})
export class PricingListComponent {

  records: Pricing[] = [];
  filters: any = {};

  constructor(private pricingService: PricingService) {}

  search() {
    this.pricingService.search(this.filters)
      .subscribe(data => this.records = data);
  }

  save(record: Pricing) {
    if (!record._id) return;

    this.pricingService.update(record._id, record)
      .subscribe(() => alert('Record Updated'));
  }
}
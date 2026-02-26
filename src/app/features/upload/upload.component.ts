import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingService } from '../../core/services/pricing.service';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upload.component.html',
})
export class UploadComponent {

  selectedFile!: File;
  message = '';

  constructor(private pricingService: PricingService) {}

  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
  }

  upload() {
    if (!this.selectedFile) return;

    this.pricingService.uploadCSV(this.selectedFile)
      .subscribe({
        next: (res) => {
          this.message = `Uploaded ${res.count} records successfully`;
        },
        error: () => {
          this.message = 'Upload failed';
        }
      });
  }
}
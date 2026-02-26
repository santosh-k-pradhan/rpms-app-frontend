import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Pricing } from '../../shared/models/pricing.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PricingService {

  private baseUrl = `${environment.apiUrl}/pricing`;

  constructor(private http: HttpClient) {}

  uploadCSV(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.baseUrl}/upload`, formData);
  }

  search(filters: any): Observable<Pricing[]> {
    let params = new HttpParams();

    Object.keys(filters).forEach(key => {
      if (filters[key]) {
        params = params.set(key, filters[key]);
      }
    });

    return this.http.get<Pricing[]>(this.baseUrl, { params });
  }

  update(id: string, data: Pricing): Observable<Pricing> {
    return this.http.put<Pricing>(`${this.baseUrl}/${id}`, data);
  }
}
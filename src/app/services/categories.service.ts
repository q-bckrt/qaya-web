import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { CategoryDto } from '../models/category.dto';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private baseUrl = environment.apiUrl + '/categories';

  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<CategoryDto[]> {
    return this.http.get<CategoryDto[]>(`${this.baseUrl}`);
  }
}

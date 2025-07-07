import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { TransactionDto } from '../models/transaction.dto'; // Assuming you have a Transaction model defined

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  private baseUrl = environment.apiUrl + '/transactions';

  constructor(private http: HttpClient) {}

  getAllTransactions(): Observable<TransactionDto[]> {
    return this.http.get<TransactionDto[]>(`${this.baseUrl}`);
  }
}

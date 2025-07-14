import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { TransactionDto } from '../models/transaction.dto';
import {TransactionCreateDto} from '../models/transactionCreateDto'; // Assuming you have a Transaction model defined

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  private baseUrl = environment.apiUrl + '/transactions';

  constructor(private http: HttpClient) {}

  getAllTransactions(): Observable<TransactionDto[]> {
    return this.http.get<TransactionDto[]>(`${this.baseUrl}`);
  }


  createTransaction(transaction: TransactionCreateDto): Observable<TransactionCreateDto> {
    console.log('Creating transaction', transaction);
    return this.http.post<TransactionCreateDto>(`${this.baseUrl}`, transaction);
  }
}

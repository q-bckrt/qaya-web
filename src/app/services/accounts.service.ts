import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AccountDto} from '../models/account.dto';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  private baseUrl = environment.apiUrl + '/accounts';

  constructor(private http: HttpClient) {}

  getAllAccounts(): Observable<AccountDto[]> {
    console.log("Fetching all accounts from:", this.baseUrl);
    return this.http.get<AccountDto[]>(`${this.baseUrl}`);
  }
}

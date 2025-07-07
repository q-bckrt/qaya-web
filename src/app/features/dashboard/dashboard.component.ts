import {Component, OnInit} from '@angular/core';
import {TransactionsService} from '../../services/transactions.service';
import {TransactionDto} from '../../models/transaction.dto';
import {NgClass, NgForOf} from '@angular/common';
import { CurrencyIntlPipe} from '../../shared/pipes/currency-intl.pipe';

@Component({
  selector: 'app-dashboard',
  imports: [
    NgForOf,
    NgClass,
    CurrencyIntlPipe
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  allTransactions: TransactionDto[] = [];

  constructor(private transactionService: TransactionsService) {}

  ngOnInit(): void {
    this.transactionService.getAllTransactions().subscribe({
      next: (transactions) => {
        this.allTransactions = transactions;
        console.log("Fetched all transactions successfully");
        console.log(this.allTransactions);
      }
    });
  }

  // Additional methods and properties can be added as needed
}

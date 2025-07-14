import { Component, OnInit } from '@angular/core';
import { NgClass, NgForOf } from '@angular/common';

import { NgChartsModule } from 'ng2-charts';
import { ChartData, ChartDataset, ChartConfiguration } from 'chart.js';

import { TransactionsService } from '../../services/transactions.service';
import { TransactionDto } from '../../models/transaction.dto';
import { AddTransactionModalComponent } from '../transactions/add-transaction-modal/add-transaction-modal.component';
import { CurrencyIntlPipe } from '../../shared/pipes/currency-intl.pipe';



@Component({
  selector: 'app-dashboard',
  imports: [
    NgForOf,
    NgClass,
    CurrencyIntlPipe,
    NgChartsModule,
    AddTransactionModalComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: true
})
export class DashboardComponent implements OnInit {

  allTransactions: TransactionDto[] = [];
  isTransactionModalOpen = false;

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

  totalSparklineData: ChartData<'line', number[], string> = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'This Week',
        data: [1200, 1100, 1300, 1250, 1400, 1350, 1420],
        fill: false,
        borderColor: '#4ADE80',
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 2
      } as ChartDataset<'line', number[]>
    ]
  };

  incomeSparklineData: ChartData<'line', number[], string> = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'This Week',
        data: [3000, 3200, 3100, 2800, 2700, 2500, 2300],
        fill: false,
        borderColor: '#60A5FA', // blue-400
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 2
      } as ChartDataset<'line', number[]>
    ]
  };

  expenseSparklineData: ChartData<'line', number[], string> = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'This Week',
        data: [900, 1050, 1300, 1250, 1400, 1500, 1560],
        fill: false,
        borderColor: '#F472B6', // pink-400
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 2
      } as ChartDataset<'line', number[]>
    ]
  };

  sparklineOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false }
    },
    scales: {
      x: { display: false },
      y: { display: false }
    },
    elements: {
      line: { borderJoinStyle: 'round' },
      point: { radius: 0 }
    }
  };

}

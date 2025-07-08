import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import {FormsModule} from '@angular/forms';
import { AccountsService} from '../../../services/accounts.service';
import {AccountDto} from '../../../models/account.dto';
import {CategoryDto} from '../../../models/category.dto';
import {CategoriesService} from '../../../services/categories.service';
import {TransactionCreateDto} from '../../../models/transactionCreateDto';
import {TransactionsService} from '../../../services/transactions.service';

@Component({
  selector: 'app-add-transaction-modal',
  imports: [
    NgIf,
    FormsModule,
    NgForOf
  ],
  templateUrl: './add-transaction-modal.component.html',
  styleUrl: './add-transaction-modal.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0 })),
      ]),
    ]),
    trigger('scaleInOut', [
      transition(':enter', [
        style({ transform: 'scale(0.95)', opacity: 0 }),
        animate('200ms ease-out', style({ transform: 'scale(1)', opacity: 1 })),
      ]),
      transition(':leave', [
        animate('150ms ease-in', style({ transform: 'scale(0.95)', opacity: 0 })),
      ]),
    ]),
  ]
})

export class AddTransactionModalComponent implements OnInit {
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();
  @Output() submit = new EventEmitter<any>(); // pass data to parent

  activeClass = 'bg-lime-500 text-black font-semibold py-2 rounded-lg shadow-md text-center cursor-pointer';
  inactiveClass = 'bg-lime-100 text-black py-2 rounded-lg text-center cursor-pointer';

  accounts!: AccountDto[];
  categories!: CategoryDto[];

  constructor (
    private accountsService: AccountsService,
    private categoriesService: CategoriesService,
    private transactionService: TransactionsService
  ) {}

  ngOnInit() {
    this.accountsService.getAllAccounts().subscribe({
      next: (accounts) => {
        this.accounts = accounts;
        console.log("Fetched accounts successfully");
      },
      error: (err) => {
        console.error("Failed to fetch accounts", err);
      }
    });

    this.categoriesService.getAllCategories().subscribe({
      next: (categories) => {
        this.categories = categories;
        console.log("Fetched categories successfully");
        console.log(this.categories);
      },
      error: (err) => {
        console.error("Failed to fetch categories", err);
      }
    });
  }

  formData: TransactionCreateDto = {
    title: '',
    description: '',
    type: 'EXPENSE',
    amount: '',
    categoryId: '',
    accountId: '',
    userId: '2d992f25-0238-4224-ab3f-23b42b006254', // replace later
    date: ''
  };

  submitForm() {
    this.submit.emit(this.formData);
    this.transactionService.createTransaction(this.formData).subscribe({
      next: () => {
        console.log('Transaction created successfully');
        this.close.emit(); // Close the modal after successful submission
      },
      error: (err) => {
        console.error('Failed to create transaction', err);
      }
    });
  }

  onOverlayClick(): void {
    this.close.emit();
  }

  debug() {
    console.log("Button clicked");
  }
}

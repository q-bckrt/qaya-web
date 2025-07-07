import { Component, EventEmitter, Input, Output } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import {FormsModule} from '@angular/forms';

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
export class AddTransactionModalComponent {
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();
  @Output() submit = new EventEmitter<any>(); // pass data to parent


  categories = [
    { id: 'ec660544-47cb-412a-a712-74eba993ccaf', label: 'Groceries' },
    { id: 'abc', label: 'Transport' }
  ];

  accounts = [
    { id: 'acc1', title: 'Main Account' },
    { id: 'acc2', title: 'Savings' }
  ];

  formData = {
    title: '',
    description: '',
    type: 'EXPENSE',
    amount: '',
    date: '',
    categoryId: '',
    accountId: '',
    userId: '2d992f25-0238-4224-ab3f-23b42b006254' // replace later
  };

  submitForm() {
    this.submit.emit(this.formData);
    this.close.emit(); // also close modal
  }

  onOverlayClick(): void {
    this.close.emit();
  }
}

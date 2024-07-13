import { Component } from '@angular/core';

interface SelectPlan {
  id: number;
  name: string;
  imageUrl: string;
  pricePerMonth: number;
  pricePerYear: number;
  isSelected: boolean;
  amountPerMonth?: number;
  amountPerYear?: number;
}

@Component({
  selector: 'select-plan',
  templateUrl: './select-plan.component.html',
  styleUrl: './select-plan.component.css',
})
export class SelectPlanComponent {
  perMonth: boolean = true;
  selectPlan: SelectPlan = {
    id: 0,
    name: '',
    imageUrl: '',
    pricePerMonth: 0,
    pricePerYear: 0,
    isSelected: false,
  };

  selectPlans: SelectPlan[] = [
    {
      id: 1,
      name: 'Arcade',
      imageUrl: '/assets/images/icon-arcade.svg',
      pricePerMonth: 9,
      pricePerYear: 90,
      isSelected: false,
    },
    {
      id: 2,
      name: 'Advanced',
      imageUrl: '/assets/images/icon-advanced.svg',
      pricePerMonth: 12,
      pricePerYear: 120,
      isSelected: false,
    },
    {
      id: 3,
      name: 'Pro',
      imageUrl: '/assets/images/icon-pro.svg',
      pricePerMonth: 15,
      pricePerYear: 150,
      isSelected: false,
    },
  ];

  toggleSelectPlan(index: number): void {
    this.selectPlans.forEach((plan) => (plan.isSelected = false));
    this.selectPlans[index].isSelected = true;
  }

  togglePlanPeriod(): void {
    this.perMonth = !this.perMonth;
  }
}

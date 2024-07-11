import { Component } from '@angular/core';

interface SelectPlan {
  name: string;
  imageUrl: string;
  pricePerMonth: string;
}

@Component({
  selector: 'select-plan',
  templateUrl: './select-plan.component.html',
  styleUrl: './select-plan.component.css',
})
export class SelectPlanComponent {
  selectPlan: SelectPlan = {
    name: '',
    imageUrl: '',
    pricePerMonth: '',
  };

  selectPlans: SelectPlan[] = [
    {
      name: 'Arcade',
      imageUrl: '/assets/images/icon-arcade.svg',
      pricePerMonth: '$9/mo',
    },
    {
      name: 'Advanced',
      imageUrl: '/assets/images/icon-advanced.svg',
      pricePerMonth: '$12/mo',
    },
    {
      name: 'Pro',
      imageUrl: '/assets/images/icon-pro.svg',
      pricePerMonth: '$15/mo',
    },
  ];
}

import { Component } from '@angular/core';
import { SELECTEDPLAN } from '../../../types.common';

@Component({
  selector: 'select-plan',
  templateUrl: './select-plan.component.html',
  styleUrl: './select-plan.component.css',
})
export class SelectPlanComponent {
  selectPlan: SELECTEDPLAN = {
    id: 0,
    name: '',
    imageUrl: '',
    pricePerMonth: '',
  };

  selectPlans: SELECTEDPLAN[] = [
    {
      id: 1,
      name: 'Arcade',
      imageUrl: '/assets/images/icon-arcade.svg',
      pricePerMonth: '$9/mo',
    },
    {
      id: 2,
      name: 'Advanced',
      imageUrl: '/assets/images/icon-advanced.svg',
      pricePerMonth: '$12/mo',
    },
    {
      id: 3,
      name: 'Pro',
      imageUrl: '/assets/images/icon-pro.svg',
      pricePerMonth: '$15/mo',
    },
  ];
}

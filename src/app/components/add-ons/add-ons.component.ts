import { Component } from '@angular/core';
import { ADDON } from '../../../types.common';

@Component({
  selector: 'add-ons',
  templateUrl: './add-ons.component.html',
  styleUrl: './add-ons.component.css',
})
export class AddOnsComponent {
  addOn: ADDON = {
    isChosen: false,
    type: '',
    description: '',
    pricePerMonth: '',
  };
  addOns: ADDON[] = [
    {
      isChosen: true,
      type: 'Online service',
      description: 'Access to multiplayer games',
      pricePerMonth: '+$1/mo',
    },
    {
      isChosen: false,
      type: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      pricePerMonth: '+$2/mo',
    },
    {
      isChosen: false,
      type: 'Customizable profile',
      description: 'Custom theme on your profile',
      pricePerMonth: '+$2/mo',
    },
  ];

  toggleAddOn(index: number): void {
    this.addOns[index].isChosen = !this.addOns[index].isChosen;
  }
}

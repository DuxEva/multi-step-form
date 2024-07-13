import { Component } from '@angular/core';

interface AddOn {
  isChosen: boolean;
  type: string;
  description: string;
  pricePerMonth: string;
}

@Component({
  selector: 'add-ons',
  templateUrl: './add-ons.component.html',
  styleUrl: './add-ons.component.css',
})
export class AddOnsComponent {
  addOn: AddOn = {
    isChosen: false,
    type: '',
    description: '',
    pricePerMonth: '',
  };
  addOns: AddOn[] = [
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

import { Component } from '@angular/core';
import { StepCounterService } from '../../services/step-counter.service';

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

  constructor(private stepService: StepCounterService) {}

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

  ngOnInit() {
    const addOnsData: number[] = this.stepService.getAddOns();
    console.log(addOnsData);
    this.addOns.forEach((addOn, index) => {
      addOn.isChosen = addOnsData.includes(index);
    });
  }

  toggleAddOn(index: number): void {
    this.addOns[index].isChosen = !this.addOns[index].isChosen;
    const chosenAddOns: number[] = this.addOns
      .map((addOn, i) => (addOn.isChosen ? i : null))
      .filter((i): i is number => i !== null);
    this.stepService.setAddOns(chosenAddOns);
  }
}

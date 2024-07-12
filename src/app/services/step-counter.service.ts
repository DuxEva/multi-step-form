import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface FormFields {
  name: string;
  email: string;
  phone: string;
  selectedPlan: {
    id: number;
    name: string;
    imageUrl: string;
    pricePerMonth: string;
  };
  addons: [
    {
      id: number;
      name: string;
      price: string;
    }
  ];
}

@Injectable({
  providedIn: 'root',
})
export class StepCounterService {
  currentStep: BehaviorSubject<number> = new BehaviorSubject<number>(1);

  currentStep$: Observable<number> = this.currentStep.asObservable();

  constructor() {}

  updateStep(step: number): void {
    this.currentStep.next(step);
  }
}

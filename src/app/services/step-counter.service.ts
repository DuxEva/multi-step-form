import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ADDON, FORMFIELD, SELECTEDPLAN } from '../../types.common';

interface FormFields {
  formFields: FORMFIELD;
  selectedPlan: SELECTEDPLAN;
  addons: ADDON[];
  perMonth: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class StepCounterService {
  currentStep: BehaviorSubject<number> = new BehaviorSubject<number>(1);

  private formData = {
    personalInfo: {
      name: '',
      email: '',
      phone: '',
    },
    plan: {
      selectedPlan: 1,
      isMonthly: true,
    },
    addOns: [0],
  };

  currentStep$: Observable<number> = this.currentStep.asObservable();

  constructor() {}

  updateStep(step: number): void {
    this.currentStep.next(step);
  }

  getPersonalInfo() {
    return this.formData.personalInfo;
  }

  setPersonalInfo(data: { name: string; email: string; phone: string }) {
    this.formData.personalInfo = data;
  }

  getPlan() {
    return this.formData.plan;
  }

  setPlan(data: { selectedPlan: any; isMonthly: boolean }) {
    this.formData.plan = data;
  }

  getAddOns() {
    return this.formData.addOns;
  }

  setAddOns(data: any) {
    this.formData.addOns = data;
  }
}

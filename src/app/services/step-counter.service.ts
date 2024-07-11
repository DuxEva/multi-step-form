import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

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

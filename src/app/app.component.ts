import { Component } from '@angular/core';
import { StepCounterService } from './services/step-counter.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  counter: number = 0;

  constructor(
    private stepCounter: StepCounterService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.stepCounter.currentStep$.subscribe((step) => {
      this.counter = step;
      console.log('Current step: ', this.counter);
    });
  }

  nextStep() {
    this.stepCounter.updateStep(this.counter + 1);
  }

  prevStep() {
    this.stepCounter.updateStep(this.counter - 1);
  }

  resetStep() {
    this.stepCounter.updateStep(1);
  }

}

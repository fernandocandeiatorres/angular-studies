import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CalculatorService } from './calculator.service';
import { CalculatorInputDTO } from './calculator.model';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent {
  investment_form = new FormGroup({
    initial_inv: new FormControl(undefined, Validators.required),
    annual_inv: new FormControl(undefined, Validators.required),
    expected_return: new FormControl(undefined, Validators.required),
    duration: new FormControl(undefined, Validators.required),
  });

  private calculatorService = inject(CalculatorService);

  onSubmit() {
    if (this.investment_form.valid) {
      const newInvestmentInput: CalculatorInputDTO = {
        initial_inv: this.investment_form.value.initial_inv!,
        annual_inv: this.investment_form.value.annual_inv!,
        expect_return: this.investment_form.value.expected_return!,
        duration: this.investment_form.value.duration!,
      };
      this.calculatorService.createInvestment(newInvestmentInput);
    }
  }
}

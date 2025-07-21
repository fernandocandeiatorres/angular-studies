import { Injectable, signal } from '@angular/core';
import { CalculatorInputDTO, ResultInvestmentData } from './calculator.model';

@Injectable({ providedIn: 'root' })
export class CalculatorService {
  private resultDataSignal = signal<ResultInvestmentData[]>([]);

  resultData = this.resultDataSignal.asReadonly();

  createInvestment(investmentInputData: CalculatorInputDTO) {
    this.resultDataSignal.set(
      this.calculateInvestmentResults(investmentInputData)
    );
  }

  private calculateInvestmentResults(investData: CalculatorInputDTO) {
    const annualData = [];
    let investmentValue = investData.initial_inv;

    for (let i = 0; i < investData.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear =
        investmentValue * (investData.expect_return / 100);
      investmentValue += interestEarnedInYear + investData.annual_inv;
      const totalInterest =
        investmentValue - investData.annual_inv * year - investData.initial_inv;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: investData.annual_inv,
        totalInterest: totalInterest,
        totalAmountInvested:
          investData.initial_inv + investData.annual_inv * year,
      });
    }

    return annualData;
  }
}

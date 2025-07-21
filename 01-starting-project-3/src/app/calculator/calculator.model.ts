export interface ResultInvestmentData {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
}

export interface CalculatorInputDTO {
  initial_inv: number;
  annual_inv: number;
  expect_return: number;
  duration: number;
}

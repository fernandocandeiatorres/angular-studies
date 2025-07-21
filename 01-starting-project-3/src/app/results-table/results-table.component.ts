import { Component, inject, signal } from '@angular/core';
import { CalculatorService } from '../calculator/calculator.service';

@Component({
  selector: 'app-results-table',
  standalone: true,
  imports: [],
  templateUrl: './results-table.component.html',
  styleUrl: './results-table.component.css',
})
export class ResultsTableComponent {
  private calcService = inject(CalculatorService);

  annualData = this.calcService.resultData;
}

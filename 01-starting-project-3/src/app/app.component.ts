import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ResultsTableComponent } from './results-table/results-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, CalculatorComponent, ResultsTableComponent],
})
export class AppComponent {}

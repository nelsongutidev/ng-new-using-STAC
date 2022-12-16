import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NextStepsComponent } from './next-steps/next-steps.component';
import { ResourcesComponent } from './resources/resources.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, ResourcesComponent, NextStepsComponent, RouterModule],
})
export class AppComponent {
  title = 'angular-quito-demo';
}

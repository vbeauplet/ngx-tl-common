import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tls-stepper-view',
  host: { 'class' : 'tls-page'},
  templateUrl: './tl-stepper-view.component.html',
  styleUrls: ['./tl-stepper-view.component.css']
})
export class TlStepperViewComponent implements OnInit {

  public htmlCode: string = `
    <tl-stepper
      [size]="'tl-big'"
      [initialSteps]="[
          {
            name: 'Init',
            label: 'Init'
          },
          {
            name: 'Running',
            label: 'Running'
          },
          {
            name: 'Completed',
            label: 'Completed'
          }
        ]">
    </tl-stepper>
    `;

  constructor() { }

  ngOnInit(): void {
  }

}

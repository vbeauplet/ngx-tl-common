import { Component, OnInit } from '@angular/core';
import { ComponentPreferencesService } from 'src/app/services/component-preferences.service';
import { ITlSelectProposal } from 'ngx-tl-common';

@Component({
  selector: 'tls-component-sample',
  host: { 
      'class' : 'tl-full tl-padded tl-col-dir tl-outlined tl-container-flex-block'
    },
  templateUrl: './component-sample.component.html',
  styleUrls: ['./component-sample.component.css']
})
export class ComponentSampleComponent implements OnInit {

  constructor(
    private componentPreferenceService: ComponentPreferencesService
  ) { }

  ngOnInit(): void {
  }
  
  public selectStyle(proposal: ITlSelectProposal){
    this.componentPreferenceService.tlStyle = proposal.name;
  }

}

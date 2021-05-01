import { Component, OnInit, Input } from '@angular/core';
import { ComponentPreferencesService } from 'src/app/services/component-preferences.service';

@Component({
  selector: 'tls-component-sample',
  host: { 
      'class' : 'tl-full tl-padded tl-big-bottom-margined tl-col-dir tl-outlined tl-container-flex-block'
    },
  templateUrl: './component-sample.component.html',
  styleUrls: ['./component-sample.component.css']
})
export class ComponentSampleComponent implements OnInit {

  /**
   * Tells if component has a shape property
   */
  @Input() hasShape: boolean  = false;
  
  /**
   * Tells if component has a sub-shape property
   * False by default
   */
  @Input() hasSubShape: boolean  = false;
  
    /**
   * Tells if component has a size property
   */
  @Input() hasSize: boolean  = true;
  
  /**
   * Tells if component has a tlStyle property
   */
  @Input() hasTlStyle: boolean  = true;
  
  /**
   * Tells if component has a sub-tlStyle property
   * False by default
   */
  @Input() hasSubTlStyle: boolean  = false;
  
    /**
   * Tells if component has a color property
   * False by default
   */
  @Input() hasColor: boolean  = false;

  constructor(
    public componentPreferenceService: ComponentPreferencesService
  ) { }

  ngOnInit(): void {
  }

}

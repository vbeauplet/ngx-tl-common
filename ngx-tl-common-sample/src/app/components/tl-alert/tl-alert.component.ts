import { Component, OnInit, Input, TemplateRef } from '@angular/core'
import { TlAlert, TlAlertService, ITlAlertProposal } from 'ngx-tl-common';


interface ITlAlertDisplayStatus{
  transitory: boolean
}

/**
 * @author vbeauplet
 */
@Component({
  selector: 'tls-alert',
  host: { 
      'class' : 'tl-full tl-hor-center tl-col-dir tl-flex-block'
    },
  templateUrl: './tl-alert.component.html',
  styleUrls: ['./tl-alert.component.scss']
})
export class TlsAlertComponent implements OnInit {

  /**
   * Style of the alerts, from tl-style system
   * Tl-neumorphic-popover by default
   */
  @Input() tlStyle: string = 'tl-neumorphic-popover';

  /**
   * Style of the decision buttons, from the tl-style system
   * tl-neumorphic by default
   */
  @Input() buttonStyle: string = 'tl-neumorphic-dome';

  /**
   * Tells if a close button shall be visible for non-decisive popups
   */
  @Input() canClose: boolean = true;
  
  /**
   * Size of the alerts
   */
  @Input() size: string = 'tl-big';
  
  /**
   * Border radius of the alerts, in the tl-border-radius system
   */
  @Input() borderRadius: string = 'tl-big-br';

  /**
   * Tells if non-decisive alerts (without decision) shall be hidden
   * False by default
   */
  @Input() hideNonDecisivePopups: boolean = false;

  /**
   * Template to display custom object alerts
   * May be defined in parent compoenent to describe custom alerts (events...)
   */
  @Input() customObjectAlertTemplate: TemplateRef<any>

  /**
   * Duration, in ms, of the transition animation to display and undisplay the alert
   */
  public ALERT_APPEARANCE_TRANSITION_TIME: number = 200;

  /**
   * Bindable list of displayed alerts
   * Alert are stored in a map so that it is associated to its display status
   */
  public alerts: Map<TlAlert, ITlAlertDisplayStatus> = new Map<TlAlert, ITlAlertDisplayStatus>();
  
  constructor(
    private alertService: TlAlertService
  ) {
  }

  ngOnInit(): void {
    // Subscrbe to any alert raised by the Alert service
    this.alertService.alertSubject.subscribe((alert: TlAlert) => {
      this.onAlert(alert);
    })
  }
  
  /**
   * Behavior when an alert is raised
   */
  public onAlert(alert: TlAlert){
    
    // BEfore proceeding, check if alert popup shall be hidden. If yes, do nothing
    if(this.hideNonDecisivePopups && alert.proposals.length == 0){
      return;
    }
    
    // Display alert
    this.displayAlert(alert);
    
    // If no proposals, automatically undisplay alerts after a given timeout
    if(alert.proposals.length == 0){
      setTimeout(() =>{
          this.undisplayAlert(alert, this.ALERT_APPEARANCE_TRANSITION_TIME);
        }, 5000);
        
    }
  }
  
  /**
   * Handles click on proposal button of an alert
   */
  public onClickProposal(alert: TlAlert, proposal: ITlAlertProposal){
    
    // Emit 'select proposal' event
    this.alertService.selectProposal(alert, proposal);
    
    // Undisplay (after button animation)
    setTimeout(() => {
          this.undisplayAlert(alert, this.ALERT_APPEARANCE_TRANSITION_TIME);
        }, 100)
  }
  
  /**
   * Display an alert
   */
  public displayAlert(alert: TlAlert){
    // First put the alert in the map of displayed alert.
    // Display status is initialially set as
    // -Transitory state set to true, so that transition to permanent status acan be performed
    this.alerts.set(alert, {transitory: true});
    
    // 'Display status' is then set:
    // - Transitory: false so that transsition to permanent state can begin
    setTimeout(() =>{
        this.alerts.get(alert).transitory = false;
      }, 100);
  }
  
  /**
   * Undisplay a displayed alert
   */
  public undisplayAlert(alert: TlAlert, transitionTime: number){
    // Undisplay begins by telling the alert is not in a permanent state anymore (transitory flag set to true)
    this.alerts.get(alert).transitory = true;
    
    // At the end of the transistion, fully undisplay the alert an push it out from the map of displayed alert
    setTimeout(() =>{
        this.alerts.delete(alert);
      }, transitionTime);
        
  }
}

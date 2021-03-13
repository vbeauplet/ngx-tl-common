import { Component, OnInit, Input } from '@angular/core';

import { TlUser } from '../../model/tl-user.model';

import { TlMiniatureComponent } from '../tl-miniature/tl-miniature.component';

@Component({
  selector: 'tl-user-miniature',
  host: { 
      '[class]' : 'this.size + " " + this.tlStyle + " tl-clickable tl-hor-space-between tl-row-dir tl-container-flex-block"',
      '[class.tl-margined]' : 'this.margined'
    },
  templateUrl: './tl-user-miniature.component.html',
  styleUrls: [
    './tl-user-miniature.component.scss',
    '../tl-miniature/tl-miniature.component.scss']
})
export class TlUserMiniatureComponent extends TlMiniatureComponent implements OnInit {

  /**
   * User input, mandatory
   */
  @Input() user: TlUser;

  /**
   * Tells if user is clickable, leading to the standrd behavior:
   * - Clicking on user drives you to all the recipes correspondin to this author
   */
  @Input() clickable: boolean = true;

  constructor(
  ) {
    super();
  }

  ngOnInit(): void {
  }
  
}

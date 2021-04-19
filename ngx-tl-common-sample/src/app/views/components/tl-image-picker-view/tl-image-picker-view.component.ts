import { Component, OnInit } from '@angular/core';
import { TlAlertService, TlUser } from 'ngx-tl-common';

@Component({
  selector: 'tls-image-picker-view',
  host: { 'class' : 'tls-page'},
  templateUrl: './tl-image-picker-view.component.html',
  styleUrls: ['./tl-image-picker-view.component.css']
})
export class TlImagePickerViewComponent implements OnInit {

  public baseUsers: TlUser[] = [];
  
  public users: TlUser[] = [];
  
  public selectedUsers: TlUser[] = [];
  
  public isSearching: boolean = false;

  public htmlCode: string = `
<tl-imaged-item-picker
  class="tl-big-margined"
  [tlStyle]="'tl-neumorphic'"
  [size]="'tl-full'"
  [proposals]="this.users"
  [initialSelectedItems]="this.selectedUsers"
  [miniatureImageUrlPropertyName]="'avatarUrl'"
  [proposalsAreLoading]="this.isSearching"
  [itemsNature]="'User'"
  [alignment]="'left'"
  (search)="this.search($event)">
</tl-imaged-item-picker>
    `;
    
  public tsCode: string = `
public baseUsers: TlUser[] = [];

public users: TlUser[] = [];

public selectedUsers: TlUser[] = [];

public isSearching: boolean = false;

ngOnInit(): void {
    
  let user1 = new TlUser();
  user1.userId = 'valentin';
  user1.name = 'Valentin';
  this.users.push(user1);
  
  let user2 = new TlUser();
  user2.userId = 'franco';
  user2.name = 'Franco';
  this.users.push(user2);
  
  let user3 = new TlUser();
  user3.userId = 'zahi';
  user3.name = 'Zahi';
  this.users.push(user3);
  
  let user4 = new TlUser();
  user4.userId = 'iris';
  user4.name = 'Iris';
  this.users.push(user4);
  
  let user5 = new TlUser();
  user5.userId = 'aurelie';
  user5.name = 'Aurélie';
  this.users.push(user5);
  
  let user6 = new TlUser();
  user6.userId = 'quentin';
  user6.name = 'Quentin';
  this.users.push(user6);
  
  let user7 = new TlUser();
  user7.userId = 'manon';
  user7.name = 'Manon';
  this.users.push(user7);
  
  let user8 = new TlUser();
  user8.userId = 'julien';
  user8.name = 'Julien';
  this.users.push(user8);
  
  let user9 = new TlUser();
  user9.userId = 'benoit';
  user9.name = 'Benoit';
  this.users.push(user9);
  
  this.baseUsers = [...this.users];
  this.selectedUsers.push(user6);
  this.selectedUsers.push(user9);
}

/**
 * Handles search from higher level component
 */
public search(value: string){
  this.isSearching = true;
  let result: any[] = [];
  
  setTimeout(() => {
    for (let user of this.baseUsers){
      if(user.name.toLowerCase().includes(value.toLowerCase())){
        result.push(user);
      }
    }
    this.users = result;
    this.isSearching = false;
  }, 1000);
}
    `;

  constructor(
      private alertService: TlAlertService
    ) { }

  ngOnInit(): void {
    
    let user1 = new TlUser();
    user1.userId = 'valentin';
    user1.name = 'Valentin';
    user1.avatarUrl='/assets/img/herisson.jpg';
    this.users.push(user1);
    
    let user2 = new TlUser();
    user2.userId = 'franco';
    user2.name = 'Franco';
    user2.avatarUrl='/assets/img/herisson.jpg';
    this.users.push(user2);
    
    let user3 = new TlUser();
    user3.userId = 'zahi';
    user3.name = 'Zahi';
    user3.avatarUrl='/assets/img/herisson.jpg';
    this.users.push(user3);
    
    let user4 = new TlUser();
    user4.userId = 'iris';
    user4.name = 'Iris';
    user4.avatarUrl='/assets/img/herisson.jpg';
    this.users.push(user4);
    
    let user5 = new TlUser();
    user5.userId = 'aurelie';
    user5.name = 'Aurelie';
    user5.avatarUrl='/assets/img/herisson.jpg';
    this.users.push(user5);
    
    let user6 = new TlUser();
    user6.userId = 'quentin';
    user6.name = 'Quentin';
    user6.avatarUrl='/assets/img/herisson.jpg';
    this.users.push(user6);
    
    let user7 = new TlUser();
    user7.userId = 'manon';
    user7.name = 'Manon';
    user7.avatarUrl='/assets/img/herisson.jpg';
    this.users.push(user7);
    
    let user8 = new TlUser();
    user8.userId = 'julien';
    user8.name = 'Julien';
    user8.avatarUrl='/assets/img/herisson.jpg';
    this.users.push(user8);
    
    let user9 = new TlUser();
    user9.userId = 'benoit';
    user9.name = 'Benoit';
    user9.avatarUrl='/assets/img/herisson.jpg';
    this.users.push(user9);
    
    this.baseUsers = [...this.users];
    this.selectedUsers.push(user6);
    this.selectedUsers.push(user9);
  }
  
  /**
   * Handles click on the button
   */
  public onClickButton(){
    this.alertService.raiseInfo('Click on button !');
  }
  
  /**
   * Handles search from higher level component
   */
  public search(value: string){
    this.isSearching = true;
    let result: any[] = [];
    
    setTimeout(() => {
      for (let user of this.baseUsers){
        if(user.name.toLowerCase().includes(value.toLowerCase())){
          result.push(user);
        }
      }
      this.users = result;
      this.isSearching = false;
    }, 1000);
  }


}

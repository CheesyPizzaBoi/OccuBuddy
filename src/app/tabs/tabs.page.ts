import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  change() {
    (document.getElementById('home-icon') as HTMLImageElement).src = '../../assets/home-icon-lit.png';
  }
  
  constructor() {}



}

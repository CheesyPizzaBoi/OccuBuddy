import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2-category1-apply-page',
  templateUrl: './tab2-category1-apply-page.page.html',
  styleUrls: ['./tab2-category1-apply-page.page.scss'],
})
export class Tab2Category1ApplyPagePage implements OnInit {

  
  constructor(private router:Router){}

  go(){
    this.router.navigate(['tab2-category1-content']);
  }

  ngOnInit() {
  }

}

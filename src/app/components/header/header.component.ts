import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sidebarHidden: boolean = true;
  
  ngOnInit(): void { }

  toggleSidebar() {
    this.sidebarHidden = !this.sidebarHidden;
  }
}

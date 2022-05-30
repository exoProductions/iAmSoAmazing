import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationService } from './services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  constructor(private navigationService: NavigationService) { }
  ngOnInit(): void {
    this.navigationService.onSizeChange(window.innerWidth);
  }



  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.navigationService.navbarOnScrollEvent(window.pageYOffset);
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.navigationService.onSizeChange(window.innerWidth);
  }
}

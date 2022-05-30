import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faHome, faMapMarker, faShareAlt, faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {
  homeIcon = faHome;
  shopIcon = faStar;
  aboutIcon = faMapMarker;
  socialIcon=faShareAlt;


  instagramIcon = faInstagram;
  linkedinIcon = faLinkedin;
  facebookIcon = faFacebook;

  pagesIcons = [
    this.homeIcon,
    this.shopIcon,
  ];

  socialIcons: any[] = [
    this.facebookIcon,
    this.instagramIcon,
    this.linkedinIcon,
  ];
  socialTitles: string[] = [
    "Facebook",
    "Instagram",
    "LinkedIn",
  ];
  socialLinks: string[] = [
    "https://www.facebook.com/exoProductionsGmbH",
    "https://www.instagram.com/exo.productions/",
    "https://www.linkedin.com/company/exo-productions/"
  ];

  constructor(private navigationService: NavigationService, private router: Router) { }

  ngOnInit(): void {
  }

  navigateToPage(ind: number): void {
    this.router.navigate(['/' + this.getPages()[ind]]);
  }

  openTab(url: string) {
    window.open(url, "_blank");
  }

  getPages(): string[] {
    return this.navigationService.pages;
  }
  getCurrentPage(): string {
    return this.navigationService.currentPage;
  }

  getShowNav():boolean{
    return this.navigationService.showNav;
  }
  getScrollIsHigherThan100vh():boolean{
    return this.navigationService.scrollIsHigherThan100vh;
  }
  getIsLargerThan1200():boolean{
    return this.navigationService.isWiderThan1200;
  }

}

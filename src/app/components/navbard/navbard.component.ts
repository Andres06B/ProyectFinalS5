import { Component , HostListener} from '@angular/core';


@Component({
  selector: 'app-navbard',
  templateUrl: './navbard.component.html',
  styleUrl: './navbard.component.css'
})
export class NavbardComponent {
  lastScrollTop = 0;
  navbarVisible = true; 

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > this.lastScrollTop) {
      
      this.navbarVisible = false;
    } else {
      
      this.navbarVisible = true;
    }

    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
  }
}

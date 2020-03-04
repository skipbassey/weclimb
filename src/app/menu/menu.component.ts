import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: [
    './menu.component.scss',
  '../../theme/font.scss',
  '../../theme/colors.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {

  options: any;

  title = '';

  constructor(
    private menuService: MenuService,
    private router: Router,
    private navController: NavController
    ) { }

  ngOnInit() {
    this.options = this.menuService.getOptions();
  }

  navigate(route: string): void {
    // this.router.navigateByUrl(route);
    this.navController.navigateForward(route)
  }

}

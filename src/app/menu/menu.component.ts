import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { AmplifyService } from 'aws-amplify-angular';

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

  authState: any;

  constructor(
    private menuService: MenuService,
    private router: Router,
    private navController: NavController,
    private menuController: MenuController,
    public amplifyService: AmplifyService,

    ) { 
      
    }

  ngOnInit() {
    this.options = this.menuService.getOptions();
  }

  navigate(route: string): void {
    this.navController.navigateForward(route)
  }

  async openMenu() {
    await this.menuController.open("start")
      .then(res => console.log(res));
  }

  async openProfileMenu() {
    this.menuController.enable(true, "profile")
      .then(res => console.log(res))
    await this.menuController.open("profile");

    this.menuController.isOpen("option")
      .then(res => console.log("option menu is open: " + res))

    console.log("profile opened")
  }

  async openOptionMenu() {
    this.menuController.enable(true, 'option');
    await this.menuController.open('option');

    this.menuController.isOpen("profile")
      .then(res => console.log("profile menu is open: " + res))

    console.log("Option opened")
  }

  signOut() {
    this.authState = { state: "signedOut" };

    this.amplifyService.setAuthState(this.authState);
    
    // this.router.navigateByUrl('login');
  }

}

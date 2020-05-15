import { Component } from '@angular/core';

import { Platform, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Plugins } from '@capacitor/core';
const { App } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private toastCtrl: ToastController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.registerBackButtonListener();
    });
  }

  registerBackButtonListener() {
    const rootScope = {
      backButtonPressedOnceToExit: false
    };
    this.platform.backButton.subscribeWithPriority(10, async () => {
      // if (!this.routerOutlet.canGoBack()) {
      // App.exitApp();
      // }

      if (rootScope.backButtonPressedOnceToExit) {
        App.exitApp();
      } else {
        rootScope.backButtonPressedOnceToExit = true;
        (await this.toastCtrl.create({
          message: 'Press back button again to exit',
          duration: 2000
        })).present();
        setTimeout(() => {
          rootScope.backButtonPressedOnceToExit = false;
        }, 2000);
      }

    });
  }



}

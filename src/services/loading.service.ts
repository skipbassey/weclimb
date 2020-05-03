import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

    constructor(
        private loadingController: LoadingController
    ) { }

    async presentLoading() {
        const loading = await this.loadingController.create({
          message: 'Please wait...',
          duration: 2000,
          mode: "ios",
          spinner: "circular"
        });
        await loading.present();
    
        const { role, data } = await loading.onDidDismiss();
        console.log('Loading dismissed!');
    }

    dismissLoading() {
        this.loadingController.dismiss();
    }

}
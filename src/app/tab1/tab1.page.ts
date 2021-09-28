import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public alertController: AlertController,public toastController: ToastController) {}

  async ExibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseha realmente favoritar o filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim, Favoritar',
          handler: () => {
            this.ApresentarToast()
          }
        }
      ]
    });

    await alert.present();
  }

  async ApresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme Adicionado aos Favoritos',
      duration: 2000,
      color:'success',
      position: 'top'
    });
    toast.present();
  }

}

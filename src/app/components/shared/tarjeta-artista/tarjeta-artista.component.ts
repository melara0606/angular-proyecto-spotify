import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta-artista',
  templateUrl: './tarjeta-artista.component.html'
})
export class TarjetaArtistaComponent {

  @Input() items: any[] = [];

  constructor(private router: Router) { }

  verArtista(item: any) {
    let artistaId;
    if (item.type === 'artist') {
      artistaId = item.id;
    } else {
      artistaId = item.artists[0].id;
    }

    return this.router.navigate([ '/artist', artistaId ]);
  }
}

import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  nuevasCanciones: any[];
  loading: boolean;
  error: boolean;
  errorMensaje: string;

  constructor(private spotifyService: SpotifyService) {
    this.loading = true;
    this.error = false;
    this.spotifyService.getAlbumsRelease()
      .subscribe((data: any) => {
        this.loading = false;
        this.nuevasCanciones = data;
      }, (err) => {
        this.error = true;
        this.loading = false;
        this.errorMensaje = err.error.error.message;
      });
  }
}

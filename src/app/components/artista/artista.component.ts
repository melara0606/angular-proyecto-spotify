import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent {
  artist: any = {};
  trapTop: any[] = [];
  loading: boolean;

  constructor(private router: ActivatedRoute,
              private spotifyService: SpotifyService) {
    this.loading = true;
    this.router.params.subscribe(params => {
      this.spotifyService.getQuery(`artists/${ params.id }`)
        .subscribe((data: any) => {
          this.artist = data;
          this.loading = false;
        });
      this.getArtistTopTrap(params.id);
    });
  }

  getArtistTopTrap(id: string) {
    console.log(id);
    this.spotifyService.getArtistTrap(id)
      .subscribe((data: any) => {
        this.trapTop = data;
        console.log(data);
      });
  }
}

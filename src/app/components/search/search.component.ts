import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  resultSearch: any[];
  loading: boolean;

  constructor(private spotifyService: SpotifyService) {
    this.loading = false;
  }

  onKeyPress(termino: string) {
    if (termino.length > 3) {
      this.loading = true;
      this.spotifyService.searchArtist(termino.trim())
        .subscribe((data: any) => {
          this.loading = false;
          this.resultSearch = data;
        });
    }
  }
}

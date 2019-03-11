import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${ query }`;
    const token = 'BQAzx0aQbRt25VAcJj8lu-nS7o7tJsADYZPE9EU1_yUnQu_WHZy5sQo47Sfrm6qcjzrTR-jYznQPJ4ChN4Y';
    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${ token }`
    });
    return this.http.get(url, { headers });
  }

  getAlbumsRelease() {
    return this.getQuery('browse/new-releases')
      .pipe(map((data: any) => {
        return data.albums.items;
      }));
  }

  searchArtist(q: string) {
    return this.getQuery(`search?q=${ q.trim() }&type=artist&limit=5`)
      .pipe(map((data: any) => {
        return data.artists.items;
      }));
  }

  getArtistTrap(id: string) {
    return this.getQuery(`artists/${ id }/top-tracks?country=es`)
      .pipe(map((data: any) => data.tracks ));
  }
}

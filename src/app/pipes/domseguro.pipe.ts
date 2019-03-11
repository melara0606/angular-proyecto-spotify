import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) { }

  transform(spotifyUri: string) {
    const url = `https://open.spotify.com/embed?uri=${ spotifyUri }`;
    return this.domSanitizer.bypassSecurityTrustResourceUrl( url );
  }
}

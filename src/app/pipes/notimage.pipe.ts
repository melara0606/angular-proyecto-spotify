import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notimage'
})
export class NotimagePipe implements PipeTransform {

  transform(images: any[]): string {
    if (images && images.length > 0) {
      return images[1].url;
    } else {
      return 'assets/img/noimage.png';
    }
  }
}

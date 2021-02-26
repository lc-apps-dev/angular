import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): unknown {

    if(value==='')
      return value;
    else
      return value.split("").reverse().join("");     
  }

}

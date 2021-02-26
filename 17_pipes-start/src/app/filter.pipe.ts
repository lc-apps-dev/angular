import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter',
  pure: false // react for every data change. might cause perfomance problems
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): unknown {
    
    if(!filterString || value.length===0)
      return value;

    const resultArray = [];
    
    for(const item of value) {
      if(item[propName].startsWith(filterString)) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}

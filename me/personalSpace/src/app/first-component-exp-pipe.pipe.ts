import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vocalTrunc'
})
export class FirstComponentExpPipePipe implements PipeTransform {

  vocals= ['a','e','i','o','u']

  transform(value: string, limit: number){
    if(!value)
      return null;
    let vocalArray = new Array<String>();
    for( var i=0; i<value.length;i++){
        if(this.vocals.includes(value[i])){
          vocalArray.push(value[i]);
        }
        if(vocalArray.length === limit){
          return vocalArray;
        }
    }
      
     return vocalArray;
    
  }

}

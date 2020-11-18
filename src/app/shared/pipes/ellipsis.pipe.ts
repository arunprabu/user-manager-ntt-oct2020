import { Pipe, PipeTransform } from '@angular/core';

// Decorator
@Pipe({
  name: 'ellipsis'  // name of the pipe
})
export class EllipsisPipe implements PipeTransform {

  // pipes should transform
  transform(value: string, ...args: any[]): unknown {
    // value - is a variable in which the pipe is applied
    console.log(value);

    // args will have the parameters
    if (args && args.length > 0) {
      value = value.substr(0, args[0]);
    }

    return value + '...';
  }

}

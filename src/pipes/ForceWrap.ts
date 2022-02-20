import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'forcewrap'
})
export class ForceWrapPipe implements PipeTransform {
    transform(value: string,max: number=80):string {
        if (value)
        {
           return value.replace(new RegExp("([^\\s]{"+max+"})","g"),"$1 ");
        }
        return "";
       
    }
}
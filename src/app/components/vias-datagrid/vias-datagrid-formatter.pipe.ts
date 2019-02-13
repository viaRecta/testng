import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
@Pipe({ name: 'formatCell' })
export class ViasDataGridFormatter implements PipeTransform {
    constructor(private currencyPipe: CurrencyPipe){}
    transform(value: any, format: string, currenyName?:string) {
        if ( value === undefined ) {
            return ' - ';
        }
        if ( format === 'default' ) {
            if ( Array.isArray(value) ) {
                if ( typeof value[0] !== 'object' ) {
                    return value.join(', ');
                } else {
                    return value.map( obj => {
                        return obj.name
                    }).join(', ');
                }
            }
            if ( typeof value === "object") {
                return value.name
            }
        }
        if (format === 'currency') {
            return this.currencyPipe.transform(value, '', '', '1.4');//, 'tr_TR');
        }else if (typeof format === 'number') {
            return this.currencyPipe.transform(value, '', (currenyName.length>0?currenyName:''), '1.4');
        }
        
        return value;
    }
}
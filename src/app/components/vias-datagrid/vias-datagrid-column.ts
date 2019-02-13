export class DataGridColumn {
    dataField:string;
    headerText?:string;
    align?:string='center';
    width?:number;
    widthPercent?:number;
    dataType?:string='text';
    labelFunction?:any;
    currencyField?:string;
}
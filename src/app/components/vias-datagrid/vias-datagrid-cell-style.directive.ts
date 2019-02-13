import { Directive, ElementRef, Input, Renderer, OnInit } from '@angular/core';
@Directive({ selector: '[cellStyle]' })
export class ViasDataGridCellStyle implements OnInit {
    @Input() cellAlign?: string;
    @Input() cellWidth?: number;
    @Input() cellPercentWidth?: number;
    constructor(private el: ElementRef, private renderer: Renderer) { }
    ngOnInit() {
        this.alignCell();
        this.setWidth();
    }

    private setWidth(){
        if(this.cellWidth){
            if(this.cellWidth===0){
                this.renderer.setElementStyle(
                    this.el.nativeElement,
                    'display', 'none');
            }else if(this.cellWidth > 0){
                this.renderer.setElementStyle(
                    this.el.nativeElement,
                    'width', this.cellWidth+'px');
            }
        }else if(this.cellPercentWidth){
            if(this.cellPercentWidth===0){
                this.renderer.setElementStyle(
                    this.el.nativeElement,
                    'display', 'none');
            }else if(this.cellPercentWidth > 0){
                this.renderer.setElementStyle(
                    this.el.nativeElement,
                    'width', this.cellPercentWidth+'%');
            }
        }
    }

    private alignCell(){
        if(this.cellAlign){
            var align:string='left';
            switch(this.cellAlign.toLowerCase()){
                case 'right':{
                    align='right';
                    break;
                }
                case 'justify':{
                    align='justify';
                    break;
                }
                case 'center':{
                    align='center';
                    break;
                }
            }
            this.renderer.setElementStyle(
                this.el.nativeElement,
                'text-align',
                align);
        }
        
    }
}
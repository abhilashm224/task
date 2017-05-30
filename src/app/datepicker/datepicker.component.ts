import { NgModule, Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-datepicker',
    providers: [DatePipe],
    templateUrl: './datepicker.component.html',  
    styleUrls: ['./datepicker.component.css']  
})
export class DatepickerComponent implements AfterViewInit {
    public dt: Date = new Date();
    public minDate ;
    public maxDate;
    public monthFormat;
    @Input() value: string;
    @Input() name: string;
    @Input() min: string;
    @Input() max: string;
    //@Output() dateModelChange: EventEmitter<Date> = new EventEmitter();
    @Output() dateModelChange: EventEmitter<String> = new EventEmitter();
    private showDatepicker: boolean = false;

    constructor(
        private datePipe: DatePipe
        ) { }

    private transformDate(date:Date):string {
        var d = new DatePipe('pt-PT').transform(date, 'dd/MM/yyyy');
        return d;
    }

    today(): void {
        this.dt = new Date();
        this.apply();
        this.close();
    }
    clear(): void {
        this.dt = this.value = void 0;
        this.close();
    }

    private apply(): void {       
        this.value = this.transformDate(this.dt);
        //this.dateModelChange.emit(this.dt);  
        this.dateModelChange.emit(this.value);      
    }

    open() {
        this.showDatepicker = !this.showDatepicker;
    }
    close() {
        this.showDatepicker = false;
    }
    
    onSelectionDone(event) {
        this.dt = event;
        this.apply();
        this.close();
    }
    onClickedOutside(event) {
        console.log("onClickedOutside", event);
        if (this.showDatepicker) this.close();
    }
    
    ngAfterViewInit() {
        this.dt = (this.value) ? new Date(this.value) : new Date();
        this.minDate = (this.min) ? new Date(this.min) : new Date('01/01/1950') ;
        this.maxDate = (this.max) ? new Date(this.max) : new Date('01/01/2100') ;
        this.monthFormat = 'MMM';
    }
}


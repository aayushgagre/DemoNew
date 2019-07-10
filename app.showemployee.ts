import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {EmployeeService} from './app.employeeservice';

@Component({
    selector:'show-emp',
    templateUrl:'app.showemployee.html'
})

export class ShowEmployeeComponent implements OnInit,OnChanges
{
    emparr:any[]=[];
    @Input()
    dataShow:any[]
    @Input()
    flag:boolean;
    constructor(private service:EmployeeService){}
    
    ngOnInit(){
        this.service.getEmployee().subscribe((data:any)=>this.emparr=data);
    }

    ngOnChanges(changes:SimpleChanges)
    {
        if(changes['flag'])
        this.emparr.push(this.dataShow[0]);
    }

}
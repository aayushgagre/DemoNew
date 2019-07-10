import {Component} from '@angular/core';

@Component({
    selector:'add-emp',
    templateUrl:'app.addemployee.html'
})

export class AddEmployeeComponent{
    empId:number;
    empName:string;
    empSalary:number;
    empDepartment:string;

    status:boolean=false;
    empAll:any[]=[];
    
    flag:boolean=false;
    addEmployee():any{
        this.status=true;
        this.flag=!this.flag;
        this.empAll[0]={empId:this.empId,empName:this.empName,empSalary:this.empSalary,empDepartment:this.empDepartment}; 
       
    }

    deleteEmployee(i:number):any{
        this.empAll.splice(i,1);
        alert("deleted")
    }
    
}
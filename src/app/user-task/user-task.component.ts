import { Component, OnInit } from '@angular/core';
import { TaskObj, UserTask } from 'src/UserTask';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-task',
  templateUrl: './user-task.component.html',
  styleUrls: ['./user-task.component.css']
})
export class UserTaskComponent implements OnInit {
  userTask:UserTask= {};
  taskObj:TaskObj={};
  count:number=0;
  value?:any;
 
  
  

  TaskForm =  this.fb.group({
    Task: ['',[Validators.required,Validators.maxLength(200)]],
    Expiry_date: ['',Validators.required],
    User: [0,Validators.required],
    Important: [false,Validators.required]
   
  });

  preDefineData = {
    "Users": [
        "User-1",
        "User-2",
        "User-3"
    ],
    "Tasks": [
        {
            "Task": "Sample task -1",
            "Expiry_date": "10/21/2022",
            "User": "User-1",
            "Important": true,
            "Created_on": "01/10/2022"
        },
        {
            "Task": "Sample task -2",
            "Expiry_date": "03/03/2022",
            "User": "User-2",
            "Important": false,
            "Created_on": "01/10/2022"
        },
        {
            "Task": "Sample task -3",
            "Expiry_date": "05/30/2022",
            "User": "User-3",
            "Important": true,
            "Created_on": "01/10/2022"
        }
    ]
}
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
     this.userTask = this.preDefineData;  
  }
  onSubmit() {
    this.userTask.Tasks?.push(this.TaskForm.value);
    alert("Data Inserted Sucesfully..!!")
    this.TaskForm.reset();
  }

  valueChange(v:any){
    this.count=v.length;
  }
  
}

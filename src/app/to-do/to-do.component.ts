import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent {
  imagelink:string="https://cdn-icons-png.flaticon.com/512/7692/7692809.png"

  tasks  : string[] =[];
  newtask  : string ="";
  isAvalible : boolean =false;
  
  addTask(){
    if(this.newtask.trim() !=="")
    {
      this.tasks.push(this.newtask);
      this.newtask="";
      this.isAvalible =true;
    }
  }

  editTask(index:number , newTaskEdit:string) :string|void
  {

    const taskEdit = newTaskEdit.trim();
    if (taskEdit!== "")
      {
             this.tasks[index]=taskEdit ;
    }
    else{
      newTaskEdit= this.tasks[index] ;
      return this.newtask=newTaskEdit ;
    }

  }

  removeTask(index:number){
     this.tasks.splice(index,1) ;
     this.isAvalible =this.tasks.length>0 ;
  }
}

import { NodeWithI18n } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { GetDataFromLocalStorageService } from '../services/get-data-from-local-storage.service';
import { TodoClass } from '../TodoClass';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {

  constructor(private getService: GetDataFromLocalStorageService) { }

  tasks: TodoClass[] = []

  //It will store today's date
  current_date = new Date()

  //It will contain the target date of the tasks while iterating 
  temp_date = new Date()

  //message_when_notempty = 'Upcoming tasks'
  message_when_notEmpty = 'Upcoming tasks'

  //To add a break in for each loop 
  got_task = false
  got_task_index = -1

  ngOnInit(): void {
    setTimeout(() => {
      this.fetchData()
    }, 100);
  }


  fetchData() {
    this.tasks = this.getService.getData()
    this.tasks = JSON.parse(JSON.stringify(this.tasks))

    //Used for sorting the tasks by target date in ascending order and storing it in tasks variable 
    this.tasks = this.tasks.sort((task1, task2) => {
      if (task1.targetDate > task2.targetDate) {
        return 1;
      }

      if (task1.targetDate < task2.targetDate) {
        return -1;
      }

      return 0;
    });

  
    //Traversing the tasks using forEach function
    this.tasks.forEach((task, index) => {
      this.current_date = new Date()
      this.temp_date = new Date(task.targetDate)
      
      //If the target date is before the current date then don't include it in upcoming tasks
      //got_task_index will store the target date of the task that is greater than and equal to current date
      if (this.current_date.getDate() <= this.temp_date.getDate() && this.got_task == false) {
        this.got_task = true
        this.got_task_index = index
      }

    })

    //Remove the task whose target date is less than current date
    this.tasks.splice(0,this.got_task_index)

    //Store only the 3 upcoming tasks
    this.tasks.splice(3,this.tasks.length)
  }

}

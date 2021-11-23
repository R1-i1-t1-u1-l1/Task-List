import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoClass } from '../TodoClass';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})

export class AddItemComponent implements OnInit {
  tasks: TodoClass[] = []

  //It is an object of type TodoClass that will store the data entered by the user
  todoOneItem: TodoClass | undefined

  //Feilds entered by the user i.e description and target date
  new_task_desc = ''
  new_task_target_date = null


  //Initialize error with false and error message will be displayed if the feilds are empty
  error = false
  err_msg = 'Feilds are empty. Please enter the values'


  constructor(private router: Router) { }

  ngOnInit(): void { }

  //This function will save the data to local storage
  SaveItem() {

    if (this.new_task_desc == '' || this.new_task_target_date == null) {
      this.error = true
    } else {

      if (localStorage.getItem("ItemList") != null) {
        this.tasks = JSON.parse(localStorage.getItem('ItemList') || '{}')
      }

      this.todoOneItem = {
        desc: this.new_task_desc,
        targetDate: this.new_task_target_date
      }

      this.tasks.push(this.todoOneItem)
      localStorage.setItem("ItemList", JSON.stringify(this.tasks))

      console.log(this.tasks);
      this.router.navigate(['home'])
    }

  }
}

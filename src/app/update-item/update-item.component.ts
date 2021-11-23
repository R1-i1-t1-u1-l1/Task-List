import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetDataFromLocalStorageService } from '../services/get-data-from-local-storage.service';
import { TodoClass } from '../TodoClass';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})

export class UpdateItemComponent implements OnInit {

  constructor(private getService: GetDataFromLocalStorageService,
              private actRouter: ActivatedRoute,
              private router: Router) { }

  tasks: TodoClass[] = []

  //Feilds entered by the user i.e description and target date
  new_task_desc = ''
  new_task_target_date = new Date

  //It will contain the index of the task that is to be updated
  curr_id = -1

  //Initialize error with false and error message will be displayed if the feilds are empty
  error = false
  err_msg = 'Feilds are empty. Please enter the values'


  ngOnInit(): void {
    this.curr_id = this.actRouter.snapshot.params['id']
    this.tasks = this.getService.getData()
    this.new_task_desc = this.tasks[this.curr_id].desc
    this.new_task_target_date = this.tasks[this.curr_id].targetDate
  }

  updateItem() {

    if (this.new_task_desc == '' || this.new_task_target_date == null) {
      this.error = true
    } else {
      this.error = false
      this.tasks[this.curr_id].desc = this.new_task_desc
      this.tasks[this.curr_id].targetDate = this.new_task_target_date

      localStorage.setItem("ItemList", JSON.stringify(this.tasks))

      this.router.navigate(['home'])
    }

  }
}


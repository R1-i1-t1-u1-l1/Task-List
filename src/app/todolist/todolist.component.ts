import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { GetDataFromLocalStorageService } from '../services/get-data-from-local-storage.service';
import { TodoClass } from '../TodoClass';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})

export class TodolistComponent implements OnInit {

  //Used dependency injection
  //Injected Router and GetDataFromLocalStorage service
  constructor(private router: Router,
              private getService: GetDataFromLocalStorageService) { }

  //taks is an array of object of type TodoClass (user-defined)
  tasks: TodoClass[] = []

  ngOnInit(): void {
    //Call the service to get the data from local storage when the component gets loaded
    this.tasks = this.getService.getData()
  }


  //This function helps in navigating to add-item component
  addItem() {
    this.router.navigate(['addTask'])
  }


  //This function is responsible for deleting the item from tasklist
  //Arugument contains the index of the item that is to be deleted
  deleteItem(idx: number) {

    //Swal is the sweetalert2 ,it is a javascript library for creating beautiful 
    //and responsive pop up boxes.
    //When user clicks on delete button then a pop up will appear asking for confirmation
    Swal.fire({
      title: 'Are you sure?',
      showDenyButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `No`,
    }).then((result) => {

      //If confirmed by user then it will delete the task and store it in local storage
      if (result.isConfirmed) {
        Swal.fire('Deleted!', '', 'success').then((result) => {
          this.tasks.splice(idx, 1)
          localStorage.setItem("ItemList", JSON.stringify(this.tasks))
          window.location.reload()
        }
        )
      }
    })

  }

  //This function is responsible for updating the item from tasklist
  //Arugument contains the index of the item that is to be updated
  //It will navigate to update-item component
  updateItem(idx: number) {
    if (idx <= this.tasks.length) {
      this.router.navigate(['update', idx])
    }
  }


  //This function is responsible for deleting all the tasks from tasklist
  clearAll() {

    if (localStorage.getItem("ItemList") == null) {
      Swal.fire({
        title: 'Your task list is already empty!'
      })
    } else {
      Swal.fire({
        title: 'All the tasks will be deleted. Are you sure?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Delete',
        denyButtonText: `Don't Delete`,
      }).then((result) => {

        if (result.isConfirmed) {
          Swal.fire('All the tasks deleted successfully!', '', 'success').then((result) => {
            localStorage.clear()
            this.tasks = []
            window.location.reload()
          }
          )

        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
    }

  }

}

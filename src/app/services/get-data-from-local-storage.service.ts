import { Injectable } from '@angular/core';
import { TodoClass } from '../TodoClass';

@Injectable({
  providedIn: 'root'
})

export class GetDataFromLocalStorageService {
  tasks : TodoClass[] = []

  constructor() { }

  //This function is used to fetch the data from local storage and parse it to oject
  getData(){
    this.tasks = JSON.parse(localStorage.getItem('ItemList') || '{}')
    return this.tasks
  }
}

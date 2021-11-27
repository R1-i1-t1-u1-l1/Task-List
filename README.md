# TodoApp 

### (https://task-list-app14-using-angular.herokuapp.com)
##### The app helps students to keep track of their assignments.

The project contains four components named todolist , add-item , update-item and sidebar and one service named get-data-from-local-storage.

### Interface
There is .ts file named TodoClass which is an interface with fields desc and targetDate.

### Service
get-data-from-local-storage is a service that contains a method getData to fetch the data from the local storage.
Data is stored in the local storage in the form of 'ItemList' : [{desc : string , targetDate : Date}]

### Components 

1. todolist component

   a) todolist.component.html is used to display the data to the user using ngFor directive.
   
   b) todolist.component.ts contains methods addItem :- This function helps in navigating to add-item component, 
                                             deleteItem :- This function is responsible for deleting the item from tasklist,
                                             updateItem :- This function is responsible for updating the item in the tasklist,
                                             clearAll   :- This function is responsible for deleting all the tasks from tasklist.
                                             
2. add-item component 

    a) add-item.component.html contains the form that takes description and target date as an input.
  
    b) add-item.component.ts contains method saveItem :- This function adds the new task in the local Storage.
  
3. update-item component

    a) update-item.component.html contains the form that takes description and target date as an input, and used ngModel for two way data binding.
  
    b) update-item.component.ts contains method saveItem :- This function modifies the task and stores it in the local Storage.
  
4. sidebar component

    a) sidebar.component.html is used to display the 3 upcoming tasks on the right side of the screen.
  
    b) sidebar.component.ts contains method fetchData :- This function sorts the tasks based on the target date and then displays the 3 upcoming tasks along with 
     the description and the target date. 

                                             

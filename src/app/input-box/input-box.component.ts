import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css']
})



export class InputBoxComponent{
  items = [];
  item = {
    name: '',
    id: 0
  };

  constructor() { }

  // function to add or edit item in the items array 
  onClick(){
    if(this.item.id == 0){
      (this.item.name.length>2) ? this.items.push({id: (new Date()).getTime(), name: this.capitalizeFirstLetter(this.item.name), strike: false}): "";
    }
    else{
      for(var i = 0;i < this.items.length; i++){
        if(this.item.id == this.items[i].id){
            this.items[i].name = this.capitalizeFirstLetter(this.item.name);
            break;
        }
      } 
    }
    this.item.name = "";
    this.item.id = 0;
  }


  // function to edit item from the list
  onEdit(e_item){
      this.item.name = e_item.name;
      this.item.id = e_item.id;
  }


  // function to delete item from the list
  onDelete(d_item){
      for(var i = 0;i < this.items.length; i++){
          if(d_item.id == this.items[i].id){
              this.items.splice(i,1);
              break;
          }
      }
  }


  // function to capitalize the first letter of the string
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // function to mark an item as completed
  onStrike(s_item) {
      for(var i = 0;i < this.items.length; i++){
          if(s_item.id == this.items[i].id){
            if(this.items[i].strike){
            this.items[i].strike = false;
            }
            else{
              this.items[i].strike = true;
            }
          break;
          }           
      }
  }
}

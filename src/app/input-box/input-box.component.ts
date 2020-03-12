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

  // function to add item in the items array 
  onClick(){
    if(this.item.id == 0){
      (this.item.name.length>2) ? this.items.push({id: (new Date()).getTime(),name: this.capitalizeFirstLetter(this.item.name)}): "";
      this.item.name = "";
    }
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

}

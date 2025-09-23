import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms"

@Component({
  selector: 'app-services',
  imports: [CommonModule, FormsModule],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {
  name = 'Martinho'
  
  list_items = ['item 1', 'item 2', 'item 3', 'item 4']

  getName(){
    console.log(`Name: ${this.name}`)
  }

}

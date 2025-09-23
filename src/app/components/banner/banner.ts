import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-banner',
  imports: [CommonModule],
  templateUrl: './banner.html',
  styleUrl: './banner.css'
})
export class Banner {

  status = true;
  name = 'Teste name'

  updateStatus(value: boolean){
    this.status = value
    console.log(`Status values: ${this.status}`)
  }

  updateName(value: string){
    this.name = value
  }

}

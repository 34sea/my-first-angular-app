import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.html',
  styleUrl: './banner.css'
})
export class Banner {

  status = false;
  name = 'Teste name'

  updateStatus(value: boolean){
    this.status = value
  }

  updateName(value: string){
    this.name = value
  }

}

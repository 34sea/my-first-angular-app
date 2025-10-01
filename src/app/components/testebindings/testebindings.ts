import { Component } from '@angular/core';

@Component({
  selector: 'app-testebindings',
  imports: [],
  templateUrl: './testebindings.html',
  styleUrl: './testebindings.css'
})
export class Testebindings {

  classChange = false
  colorClasse = 'black'

  updateClassChange(){
    this.classChange = !this.classChange
    this.colorClasse = 'orange'
  }

}

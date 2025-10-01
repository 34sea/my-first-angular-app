import { Component } from '@angular/core';

@Component({
  selector: 'app-flow',
  imports: [],
  templateUrl: './flow.html',
  styleUrl: './flow.css'
})
export class Flow {
  users = [
    {
      id: 0,
      name: "Martinho"
    },
    {
      id: 1,
      name: "Macovere"
    },
    {
      id: 2,
      name: "Domingos"
    }
  ]
}

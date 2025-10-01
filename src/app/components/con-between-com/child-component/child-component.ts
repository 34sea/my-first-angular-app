import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-component',
  imports: [FormsModule],
  templateUrl: './child-component.html',
  styleUrl: './child-component.css'
})
export class ChildComponent {
  @Input() msg_receiver?: string;

  @Output() msg_send_father = new EventEmitter<string>();


  sendValue(){
    this.msg_send_father.emit("msg send");
  }
}

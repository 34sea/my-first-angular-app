import { Component } from '@angular/core';
import { ChildComponent } from './child-component/child-component';

@Component({
  selector: 'app-con-between-com',
  imports: [ChildComponent],
  templateUrl: './con-between-com.html',
  styleUrl: './con-between-com.css'
})
export class ConBetweenCom {
  msg_send?: string;

  setMsgSend(): void{
   
    this.msg_send = "Change Messages"
    console.log(`msg send: ${this.msg_send}`)
  }

  getMsg(msg: any): void{
    console.log(`Mensagen recebida: ${msg}`)
  }
}

import { Component } from '@angular/core';
import { Banner } from '../banner/banner';
import { Services } from '../services/services';

@Component({
  selector: 'app-home',
  imports: [Banner, Services],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}

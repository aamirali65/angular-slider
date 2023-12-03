import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {NgbModal,NgbModule} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, HomeComponent, NgbModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private modal:NgbModal){}

  open(content:any){
    this.modal.open(content,{centered:true})
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SliderComponent } from "../app//slider/slider.component";
import { HomeComponent } from "../app/home/home.component";
import { HeaderComponent } from "./header/header.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, SliderComponent, RouterLink, RouterLinkActive, HomeComponent, HeaderComponent]
})
export class AppComponent {
  title = 'demo';
}

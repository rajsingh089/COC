import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  imageSrc = 'assets/images/cuttuck-removebg-preview.png'  
   imageAlt = 'logo'
  ngOnInit(): void {
  }

  onBegin() {
    
    this.router.navigate(['/app-begin'])
  }
}

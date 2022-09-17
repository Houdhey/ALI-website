import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mission-container2',
  templateUrl: './mission-container2.component.html',
  styleUrls: ['./mission-container2.component.scss'],
})
export class MissionContainer2Component implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToMissions() {
    this.router.navigateByUrl('/missions');
  }
  readNext() {
    this.router.navigateByUrl('/missions');
  }
}

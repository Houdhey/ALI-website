import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mission-container3',
  templateUrl: './mission-container3.component.html',
  styleUrls: ['./mission-container3.component.scss'],
})
export class MissionContainer3Component implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToMissions() {
    this.router.navigateByUrl('/missions');
  }
}

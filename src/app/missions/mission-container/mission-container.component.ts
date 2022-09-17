import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mission-container',
  templateUrl: './mission-container.component.html',
  styleUrls: ['./mission-container.component.scss'],
})
export class MissionContainerComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToMissions() {
    this.router.navigateByUrl('/missions');
  }
}

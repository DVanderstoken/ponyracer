import { Component, OnInit } from '@angular/core';
import { RaceModel } from '../models/race.model';
import { Observable } from 'rxjs/Observable';

import { RaceService } from '../race.service';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {

  races: RaceModel[];

  constructor(private rs: RaceService) {
  }

  ngOnInit() {
    this.rs.list().subscribe(result => {
      this.races = result;
    });
  }

}

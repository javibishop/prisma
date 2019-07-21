import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-competidor-edit',
  templateUrl: './competidor-edit.component.html',
  styleUrls: ['./competidor-edit.component.css']
})
export class CompetidorEditComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

}

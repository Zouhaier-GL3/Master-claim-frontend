import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-agent-saisie',
  templateUrl: './agent-saisie.component.html',
  styleUrls: ['./agent-saisie.component.css']
})
export class AgentSaisieComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(ProfileComponent, {
    
    });
  }



  ngOnInit() {
  }

}

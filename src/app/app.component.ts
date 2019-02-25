import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { config } from './config'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myKey = config['myKey'];
  myDomain = config['myDomain'];
  title = 'recipeShoppingApp';
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: this.myKey,
      authDomain: this.myDomain
    })
  }
  
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}

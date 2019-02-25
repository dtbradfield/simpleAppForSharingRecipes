import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'recipeShoppingApp';
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAJgLD5FCdrMWU5wr66zJ_wxbcdAtYPslk",
      authDomain: "recipes-2f961.firebaseapp.com"
    })
  }
  
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}

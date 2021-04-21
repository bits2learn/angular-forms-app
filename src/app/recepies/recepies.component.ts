import { Component, OnInit } from '@angular/core';
import { Recepie } from './recepie';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css']
})
export class RecepiesComponent implements OnInit {
  selectedRecipe: Recepie;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectedRecipe(recipe: Recepie){
    this.selectedRecipe = recipe;
  }

}

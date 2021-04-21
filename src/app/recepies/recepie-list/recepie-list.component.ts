import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recepie } from '../recepie';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recepie>();

  recepies: Recepie[] = [
    new Recepie('Samosa','Vegetable Samosa made with maida, potatoes and spices',
    'https://static.toiimg.com/thumb/70551342.cms?width=571&height=382&imgsize=60677'),
    new Recepie('Chicken Tikka Masala', 'Chicken Tikka Masala', 
    'https://chefbega.com/wp-content/uploads/2019/12/Best-Chicken-Tikka-Masala-IMAGE-1.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recepie){
this.recipeWasSelected.emit(recipe);
  }

}

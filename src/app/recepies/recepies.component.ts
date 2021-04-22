import { Component, OnInit } from '@angular/core';
import { Recepie } from './recepie';
import { RecepieService } from './recepie.service';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css'],
  providers: [RecepieService]
})
export class RecepiesComponent implements OnInit {
  selectedRecipe: Recepie;

  constructor(private recepiesService: RecepieService) { }

  ngOnInit(): void {
    this.recepiesService.recepieSelected.subscribe(
      (recepie: Recepie) => {
        this.selectedRecipe = recepie;
      }
    );
  }

  onSelectedRecipe(recipe: Recepie){
    this.selectedRecipe = recipe;
  }

}

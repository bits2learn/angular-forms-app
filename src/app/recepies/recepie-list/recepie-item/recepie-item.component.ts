import { Component, Input, OnInit } from '@angular/core';
import { Recepie } from '../../recepie';
import { RecepieService } from '../../recepie.service';

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css']
})
export class RecepieItemComponent implements OnInit {
  @Input() recipe: Recepie;

  constructor(private recepieService: RecepieService) { }

  ngOnInit(): void {
  }

  onSelected(){
    this.recepieService.recepieSelected.emit(this.recipe);
  }



}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PokemonData } from 'src/global/models/PokeData';
import { FlavorTextEntry } from 'src/global/models/PokemonSpecies';
import { CommonsService } from 'src/global/services/commons/commons.service';
import { PokemonDetailsPopupComponent } from '../pokemon-details-popup/pokemon-details-popup.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; 

@Component({
  selector: 'app-pokemon-card-item',
  templateUrl: './pokemon-card-item.component.html',
  styleUrls: ['./pokemon-card-item.component.scss']
})
export class PokemonCardItemComponent implements OnInit {

  @Input('pokemon') pokemon: PokemonData  = new PokemonData();
  @Output('expandContainer') expandContainer = new EventEmitter<PokemonData>();
  @Input('selected') selected : boolean = false;
  showDetails : boolean = false;
  currFlavorTextIndex : number = 1;
  public currFlavoredText : FlavorTextEntry | null = null;

  constructor(public commons : CommonsService, public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  showDetailsClick(){
    this.expandContainer.emit(this.pokemon);
    //this.showDetails = true;
    
    this.openPokemonDetailsDialog();
  }

  

      //text = this.pokemon.PokemonSpecies?.flavor_text_entries[this.currFlavorTextIndex].flavor_text || "";
    
  openPokemonDetailsDialog(){
    const dialogRef = this.dialog.open(PokemonDetailsPopupComponent, {
      data:this.pokemon,
      maxWidth: '75vw',
      maxHeight: '75vh',
      width:'75%',
      height:'75%',
    });
  }
   
  
}

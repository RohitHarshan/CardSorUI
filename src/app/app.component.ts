import { Component } from '@angular/core';
import { SortService } from './sort.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private sortService: SortService) { }
  title = 'card-ui-app';
  selectedSuit: string = "";
  selectedFace: string = "";
  cardList: string[] = [];
  sortedCardList: string[] = [];
  isSort: boolean = false;
  suits = ["T", "D", "S", "C", "H"]
  isAdded: boolean = false;
  faces = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "K", "Q", "S", "P", "R"]

  selectChangeSuit(event: any) {
    this.selectedSuit = event.target.value;
    if (this.selectedSuit == "T") {
      this.faces = ["4", "2", "S", "P", "R"]
    }
    else {
      this.faces = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "K", "Q"]
    }
  }
  selectChangeFace(event: any) {
    this.selectedFace = event.target.value;
  }
  addCard() {
    console.log(this.selectedFace);
    if (this.selectedFace != "0" && this.selectedSuit != "0" && this.selectedSuit != "" && this.selectedFace != "") {
      this.isAdded = true;
      let cardValue = this.selectedFace.concat(this.selectedSuit);
      if (!this.cardList.includes(cardValue)) {
        this.cardList.push(cardValue);
        console.log(this.cardList);
      }
      else {
        alert("Please select another card");
      }
    }
    else {
      alert("Please select suit and face");
    }
  }

  sortCards() {
    if (this.cardList.length > 0) {
      this.isSort = true;
      this.sortService.sortCards(this.cardList).subscribe(
        (res) => { this.sortedCardList = res; }
      );
      console.log(this.sortedCardList);
    }
  }

  reloadPage(){
    window.location.reload();
  }
}



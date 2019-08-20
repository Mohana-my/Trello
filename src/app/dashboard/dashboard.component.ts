import { Component, OnInit } from '@angular/core';
import { BoardService } from '../board.service';
import { Trello } from '../trello';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  trello:Trello[]=[];
  trelloid:number
  trelloname:string
  boardid:number
  boardname:string
  cardid:number
  cardname:string
  constructor(private boardservice:BoardService) { }

  ngOnInit() 
    {
      this.trello= this.boardservice.getTrello();
    }
  addTrello(){
    var tname={
      id:this.trelloid,
      name:this.trelloname,
      board:[
        {
          id:this.boardid,
          name:this.boardname,
          card:[{id:this.cardid,name:this.cardname}]
        }]
    }

    this.boardservice.addTrello(tname)
    return this.trello
  }

}

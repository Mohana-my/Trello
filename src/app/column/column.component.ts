import { Component, OnInit } from '@angular/core';
import { Trello } from '../trello';
import { BoardService } from '../board.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {

  trello:Trello[]=[]
  Board = {};
  boardname:string
  boardid:number
  cardid:number
  cardname:string
  pname:string
  id:number
  name:string

constructor( private boardservice:BoardService,private route:ActivatedRoute) {
}

ngOnInit() {
  this.trello=this.boardservice.getTrello();
  this.route.params.subscribe(params => this.id = params['id']);
  this.route.params.subscribe(params => this.name = params['name']);
}

 


addcard(cname:string,bid:number,trelloname:string)
{
  for(var i=0;i<this.trello.length;i++)
    {
    
     if(this.trello[i].name === trelloname)  
      {
        this.boardservice.pushCard(cname,bid,trelloname);
      }
      
    }
}
    


addBoard()
  {
      var Name ={
        id: this.boardid,
        name:this.boardname,
       
        card:[
         { 
            id :this.cardid,
           name:this.cardname
          
          }
        ]} 
      this.boardservice.pushBoard(Name)
      this.boardid = null;
      this.boardname= null;
      this.cardid =null;
      this.cardname= null;
  }

}

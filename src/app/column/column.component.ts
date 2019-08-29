import { Component, OnInit } from '@angular/core';
import { Trello } from '../trello';
import { BoardService } from '../board.service';
import { ActivatedRoute } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {

  trello:Trello;
  Board = {};
  boardname:string
  boardid:number
  cardid:number
  cardname:string
  pname:string
  id:number
  name:string
  counts:number
  counter: any;
  checked: boolean;
  checklist;
  bid:number
 

constructor( private boardservice:BoardService,private route:ActivatedRoute) {
}

ngOnInit() {
  this.name=this.route.snapshot.paramMap.get('name');
  this.id=parseInt(this.route.snapshot.paramMap.get('id'));
  this.trello=this.boardservice.getTrello().filter((trello) => trello.id === this.id)[0];
  $(document).ready(function(){
    $('#sortable-div .sortable-list').sortable({
     connectWith: '#sortable-div .sortable-list'
   });
  });
}
addcard(cname:string,bid:number,trelloname:string)
{
 this.boardservice.pushCard(cname,bid,trelloname);
}
addBoard(trelloname:string)
  {
   

     var Name ={
        id:Math.floor(Math.random()*100+1),
       name:this.boardname,
        card:[
         { 
            id :Math.floor(Math.random()*100+1),
           name:this.cardname
          
          }
      ]} 
      if(this.trello.name === trelloname)
      {
        this.boardservice.pushBoard(Name,trelloname);
      }
       
      this.boardid = null;
      this.boardname= null;
      this.cardid =null;
      this.cardname= null;
  }
  
}

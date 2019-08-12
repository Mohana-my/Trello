import { Injectable } from '@angular/core';
import { Trello } from './trello';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  public trello:Trello[]=[
    { 
        "id":1,"name":"WeddingPlan","board":[{


            "id" : 1,
            "name" : "Plan for Wedding",
           
            "card" : [ {id:1, "name":"Announce the Engagment date" },{id:1, "name":"Hall Booking" },{id:1, "name":"Announce the Marriage date" }]
           },
          {
            id : 2,
            "name" : "0-6 months Before To-Dos",
            "card" : [ {id:2,"name":"Book &oder"},{id:2,"name":"Finalize Reception Menu"} ]
          },
          {
            id : 3,
            "name" : "10 months Before To-dos",
            "card" : [ {id:3,"name":"Book the Professionals"},{id:3,"name":"Research"} ]
          },
          {
            id : 4,
            "name" : "Doing this week",
            "card" : [ {id:4,"name":"Choose wedding Party"},{id:4,"name":"Prepare for Trips"} ]
          }
      
    ]}
  ]

  
  constructor() { }
  getTrello(): Trello[] 
  {
    return this.trello;
  }
  addTrello(tname)
  {
    return this.trello.push(tname)
  }

  pushCard(name:string,id:number,tname)
  {
    for(var i=0;i<this.trello.length;i++)
    {
      for(var j=0;j<this.trello[i].board.length;j++)
      {
        if(this.trello[i].name===tname && this.trello[i].board[j].id === id )
        {
          this.trello[i].board[j].card.push({name,id})
        }
      }
    }
  }

  pushBoard(name)
    {
      for(var i=0;i<this.trello.length;i++)
      {
        this.trello[i].board.push(name);
      }
    }
}
  


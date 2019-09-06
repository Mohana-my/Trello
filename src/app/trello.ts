export interface Trello
{
    id:number ;
    name:string; 
    board:Board[];
}
export interface Board{
    id :number;
    name:string;
    card:Card[]
}
export interface Card{
    id:number;
    name:string;
    date?:any;
    image?:any;

}
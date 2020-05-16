let data =42;

let pamal ="pamal";

let fen:number | string;
fen=24;
fen='pamal';

export interface ICars {
    color:string;
    brand:string;
    topSpeed?:number;

}

//making objects
const car1 :ICars={
    color:"red",
    brand:"alto"
}

const car2:ICars={
    color:"red",
    brand:"alto",
    topSpeed:100
}

//for objects making interface


//car1 kiyana eka inherit karanna baha mokada eke topSpeed kiyala ekak 
//nathi hinda.eka nisa dekatama use karanna puluwan wenna eka optional karanna 
// one.
    // eka karanne ? ekak dala.
//-----------------------------------------------------------------------------------
//function ekak widihata use karana hati

const multiply=(x:any,y:any):string=>{
    return( x*y).toString();
}

const adding=(x:any,y:any) :string=>{
    return x+y;
}

const subtrat=(x:any,y:any) :number=>{
    return x-y;
}

const greatingMessage=(x:any,y:any) :string=>{
    return "hellow"+x+"and"+y+"hom are you!";
}
//me widihata apita function hadaganna puluwan.
// return ekata void ekak danna puluwan. 

//--------------------------------------------------------------------
//making of array
export const cars=[car1,car2];



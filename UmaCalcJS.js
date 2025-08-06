








function UmamusumeUniq() {
 let Stars = Number(document.getElementById('Stars').value);
let level = Number(document.getElementById('Uniq').value);
 if(Stars >= 3){
  Stars = 170;
 }
 else {
  Stars = 120;
 }
 let levelStat = 0;
 for(let i=1; i<=level; i++){
  levelStat += Stars
 };
 return levelStat
};



//Old
document.getElementById("Calculate").onclick = function() {
    let StAtS = ["Speedd", "Staminaa", "Strenghtt", "Gutss", "Witt"]
    let valori = []
    for(let i=0; i < StAtS.length; i++){
     valoarea = Number(document.getElementById(StAtS[i]).value);
        valori.push(valoarea);     
    } ;
    let total = TotalStats(...valori) + UmamusumeUniq();
    document.getElementById("Rezultatul").innerText = "Total " + total;
};






function stat(StatValue) {
    const BLOCKSIZE = 50;
    let blocks = Math.floor(StatValue/BLOCKSIZE);
    let statSum =0
    const MULT = [0.5, 0.8, 1, 1.3, 1.6, 1.8, 2.1, 2.4, 2.6, 2.8, 2.9, 3, 3.1, 3.3, 3.4, 3.5, 3.9, 4.1, 4.2, 4.3, 5.2, 5.5, 6.6, 6.8, 6.9];
    for( let i=0; i < blocks && i < MULT.length ; i++ ) {
        statSum +=BLOCKSIZE * MULT[i];
    };
        let rest = StatValue % BLOCKSIZE;
        let restSum = rest * MULT[blocks];
    return statSum + restSum;
};





 function TotalStats(Speed, Stamina, Strenght, Guts, Wit) {
     let StatSpeed = stat(Speed);
     let StatStamina = stat(Stamina);
     let StatStrenght = stat(Strenght);
     let StatGuts = stat(Guts);
     let StatWit = stat(Wit);
     let TotalSum = StatSpeed + StatStamina + StatStrenght + StatGuts + StatWit ;
     return TotalSum;
 };
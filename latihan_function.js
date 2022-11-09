//This is functions
function bola(){
    console.log("This is function")
    }
    bola();
    
    //program penentuan pemenang
    
    var a = "Team1 win";
    var b = "Team2 win";
    var c = "draw";
    function score(Team1,Team2){
    if(Team1 > 2){
     return a;
    }else if (Team2 > 2){
       return b;
    }else{
        return c;
    }
    }
    console.log(score(3,10))
    
    //function rata2
    var a = 3;
    var b = 6;
    var c = 9;
    function avg(a,b,c){
        D =(a+b+c)/3
        return D;
    }
    console.log(avg(3,6,9))
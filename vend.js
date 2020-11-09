var moneyinserted=0;
var change=0; 
var rchange=0;
var totalinserted=0;
totalPaid=0;
var refreshm="";
var response=document.getElementById("message")
var item=["Coke","Play","Sprite","RedBull"]
const price= 9.50;

const rand050= 0.50; const rand1= 1; const rand2= 2; const rand5= 5;

function Total() {
    var rand050s= Number(document.getElementById("R0.50").value);
    var rand1s= Number(document.getElementById("R1").value);
    var rand2s= Number(document.getElementById("R2").value);
    var rand5s= Number(document.getElementById("R5").value);

    if(rand050s>0) {
        rand050s=rand050s*rand050
    }
    if(rand1s>0) {
        rand1s=rand1s*rand1
    }
    if(rand2s>0) {
        rand2s=rand2s*rand2
    }
    if(rand5s>0) {
        rand5s=rand5s*rand5
    }

    totalPaid=rand050s+rand1s+rand2s+rand5s;
    return totalPaid.toFixed(2);
}

function getT() {
    moneyinserted=Total();
    document.getElementById("Paid").innerHTML=moneyinserted;
}
function refreshgetT() {
    moneyinserted=0;
    document.getElementById("Paid").innerHTML=moneyinserted;
}
function refreshtotal() {
    moneyinserted=0;
    document.getElementById("R0.50").value=0;
    document.getElementById("R1").value=0;
    document.getElementById("R2").value=0;
    document.getElementById("R5").value=0;
}
function refresh() {
    Total();
    if (totalPaid> 0){
      refreshm=
        "Cancelled. R"+totalPaid.toFixed(2)+" refunded. ";
        refreshtotal();
        refreshgetT();
      response.innerHTML=refreshm;
    } else if (totalPaid==0){
        refreshm="Select a drink and insert money.";

        response.innerHTML=refreshm;
    }
}
function calchange() {
    if(Total() != 0){
        return (rchange=(Total()-price).toFixed(2));
    }
    return rchange.toFixed(2);
}
function Dispense(drinks) {
    response.innerHTML="";
    change=0;
    var selection=item[drinks];

    change=calchange();

    if (change< 0) {
        refreshm="Not enough coins to buy item. Your "+totalPaid.toFixed(2)+" has been returned.";
        totalPaid=0;
        change=0;
        refreshtotal();
        refreshgetT();

        response.innerHTML=refreshm;
    } else if (change>0){
        refreshm="Your "+selection+" has been dispensed. Do not forget your " +change+" change. Please Enjoy!!!";
        totalPaid=0;
        change=0;
        refreshtotal();
        refreshgetT();
       
        response.innerHTML=refreshm;

    } else if (change==0) {
        refreshm="Your "+selection+" has been dispensed. Please Enjoy!!!";
        totalPaid=0;
        change=0;
        refreshtotal();
        refreshgetT();
       
        response.innerHTML=refreshm;
    }
}




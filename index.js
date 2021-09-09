function calcfive(){
   var billAmount = document.getElementById("billAmount").value;
   var noOfPeople =document.getElementById("noOfPeople").value;
   const totalTipAmount = Math.round((billAmount*5)/100);
   const tipAmountPerPerson = Math.round([(billAmount*5)/100] /noOfPeople);
    document.getElementById("totalTipPerPerson").innerText = `₹ ${tipAmountPerPerson}`;
    document.getElementById("totalTip").innerText = `₹ ${totalTipAmount}`;
}
function calcten(){
    var billAmount = document.getElementById("billAmount").value;
    var noOfPeople =document.getElementById("noOfPeople").value;
    const totalTipAmount = Math.round((billAmount*10)/100);
    const tipAmountPerPerson = Math.round([(billAmount*10)/100] /noOfPeople);
     document.getElementById("totalTipPerPerson").innerText = `₹ ${tipAmountPerPerson}`;
     document.getElementById("totalTip").innerText = `₹ ${totalTipAmount}`;
 }
 function calcfifteen(){
    var billAmount = document.getElementById("billAmount").value;
    var noOfPeople =document.getElementById("noOfPeople").value;
    const totalTipAmount = Math.round((billAmount*15)/100);
    const tipAmountPerPerson = Math.round([(billAmount*15)/100] /noOfPeople);
     document.getElementById("totalTipPerPerson").innerText = `₹ ${tipAmountPerPerson}`;
     document.getElementById("totalTip").innerText = `₹ ${totalTipAmount}`;
 }
 function calctwentyfive(){
    var billAmount = document.getElementById("billAmount").value;
    var noOfPeople =document.getElementById("noOfPeople").value;
    const totalTipAmount = Math.round((billAmount*25)/100);
    const tipAmountPerPerson = Math.round([(billAmount*25)/100] /noOfPeople);
     document.getElementById("totalTipPerPerson").innerText = `₹ ${tipAmountPerPerson}`;
     document.getElementById("totalTip").innerText = `₹ ${totalTipAmount}`;
 }
 function calcfifty(){
    var billAmount = document.getElementById("billAmount").value;
    var noOfPeople =document.getElementById("noOfPeople").value;
    const totalTipAmount = Math.round((billAmount*50)/100);
    const tipAmountPerPerson = Math.round([(billAmount*50)/100] /noOfPeople);
     document.getElementById("totalTipPerPerson").innerText = `₹ ${tipAmountPerPerson}`;
     document.getElementById("totalTip").innerText = `₹ ${totalTipAmount}`;
 }
 function customcal(){
    var billAmount = document.getElementById("billAmount").value;
    var noOfPeople =document.getElementById("noOfPeople").value;
    var customInput = document.getElementById("customInput").value;
    const totalTipAmount = Math.round((billAmount*customInput)/100);
    const tipAmountPerPerson = Math.round([(billAmount*customInput)/100] /noOfPeople);
     document.getElementById("totalTipPerPerson").innerText = `₹ ${tipAmountPerPerson}`;
     document.getElementById("totalTip").innerText = `₹ ${totalTipAmount}`;
 }
function reset(){
    document.getElementById("billAmount").value = "";
    document.getElementById("noOfPeople").value = "";
    document.getElementById("totalTipPerPerson").innerText = 0;
    document.getElementById("totalTip").innerText = 0;
    document.getElementById("customInput").innerText = "";
}
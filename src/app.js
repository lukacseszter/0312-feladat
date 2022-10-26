/*
* File: app.js
* Author: Lukács Eszter
* Copyright: 2022, Lukács Eszter
* Group: Szoft II/N
* Date: 2022-10-26
* Github: https://github.com/lukacseszter/
* Licenc: GNU GPL
*/

var oldalInt = document.getElementById("oldal");
var szamitGomb = document.getElementById("szamitGomb");
var szogInt = document.getElementById("szog");
var eredmenyInt = document.getElementById("eredmeny");
szamitGomb.addEventListener("click", function(){

    var oldal = Number(oldalInt.value);
    let szog = Number(szogInt.value);
    let eredmeny = (1/2)*oldal*Math.sin(szog);
    eredmenyInt.value = (eredmeny.toFixed(4));  
    });
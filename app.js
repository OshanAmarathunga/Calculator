console.log("hello");

function submit(){
    let x=+document.getElementById("text 01").value;
    let y=Number(document.getElementById("text 02").value);
    console.log(x);
    console.log(y);
}





let btn1=document.getElementById("1");
let btn2=document.getElementById("2")
let btn3=document.getElementById("3")
let btn4=document.getElementById("4")
let btn5=document.getElementById("5")
let btn6=document.getElementById("6")
let btn7=document.getElementById("7")
let btn8=document.getElementById("8")
let btn9=document.getElementById("9")
let btn0=document.getElementById("0")
let btnAdd=document.getElementById("add")
let btnDud=document.getElementById("dud")
let btnMul=document.getElementById("mul")
let btnDiv=document.getElementById("div")
let btnCal=document.getElementById("cal")



function clear(){
    document.getElementById("t1").value="";
}

function c1(){
    document.getElementById("t1").value="1";
}
function c2(){
    document.getElementById("t1").value="2";
}
function cadd(){
    let n1=document.getElementById("t1").value;
    console.log(n1);
}
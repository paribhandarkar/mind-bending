document.getElementById('pmcontinue').onclick = function () {
    var in1= document.querySelector("input[type='radio']:checked");
    if(in1==null)
    {
   alert("you have to select one payment mode");
   return false;
    }
    else{
        return true;
    }
}

document.getElementById('complete').onclick = function () {
    var inp5=document.querySelector('#fname');
    var inp1=document.querySelector('#cno');
    var inp2=document.querySelector('#scode');
    var inp3=document.querySelector('#address');
    var inp4=document.querySelector('#city');
    var inp6=document.querySelector('#edate');

    if (inp5.value.trim()=='') {
        alert('enter fullname');
    }
    else if (inp1.value.trim()=='') {
        alert('enter card number');
    }
    else if(inp1.value.trim().length<=3 ){
        alert('enter correct card number');
    }
    else if (inp2.value.trim()=='') {
        alert('enter security code');
    }
    else if (inp3.value.trim()=='') {
        alert('enter address');
    }
    else if(inp3.value.trim().length>=15 ){
        alert('address length crossed its limit');
    }
    else if (inp4.value.trim()=='') {
        alert('enter city');
    }
    else if (inp1.value.trim()=='') {
        alert('enter card number');
    }
    else if (inp6.value.trim()=='') {
        alert('enter exxperi date');
    }

    // document.write('username is : '+inp5.value +'<br>'  + 'card no. is: ' +inp1.value+'<br>'  + 'security code is: ' +inp2.value +'<br>'+ 'ex date is: ' +inp6.value +'<br>'  + 'user address is: ' +inp3.value +'<br>'   + 'user city is: ' +inp4.value);

}






function fun(){
    var in1= document.querySelector("input[type='radio']:checked");
    if(in1==null)
    {
   alert("you have to select one payment mode");
   return false;
    }

    else{
        return true;
    }
}

document.getElementById('complete').onclick = function () {
    var inp5=document.querySelector('#fname');
    var inp1=document.querySelector('#cno');
    var inp2=document.querySelector('#scode');
    var inp3=document.querySelector('#address');
    var inp4=document.querySelector('#city');
    var inp6=document.querySelector('#edate');

    if (inp5.value.trim()=='') {
        alert('enter fullname');
    }
    else if (inp1.value.trim()=='') {
        alert('enter card number');
    }
    else if(inp1.value.trim().length<=3 ){
        alert('enter correct card number');
    }
    else if (inp2.value.trim()=='') {
        alert('enter security code');
    }
    else if (inp3.value.trim()=='') {
        alert('enter address');
    }
    else if(inp3.value.trim().length>=15 ){
        alert('address length crossed its limit');
    }
    else if (inp4.value.trim()=='') {
        alert('enter city');
    }
    else if (inp1.value.trim()=='') {
        alert('enter card number');
    }
    else if (inp6.value.trim()=='') {
        alert('enter exxperi date');
    }

    // document.write('username is : '+inp5.value +'<br>'  + 'card no. is: ' +inp1.value+'<br>'  + 'security code is: ' +inp2.value +'<br>'+ 'ex date is: ' +inp6.value +'<br>'  + 'user address is: ' +inp3.value +'<br>'   + 'user city is: ' +inp4.value);

}

function types(){
    var a= document.querySelector('#rotate');
    if(a.checked){
        a=1;
    }
    else{
        a=0;
    }

    var b= document.querySelector('#skew');
    if(b.checked){
        b=1;
    }
    else{
        b=0;
    }

    var c= document.querySelector("#translate");
    if(c.checked){
        c=1;
    }
    else{
        c=0;
    }

    var d= document.querySelector("#transform");
    if(d.checked){
        d=1;
    }
    else{
        d=0;
    }

    var e= document.querySelector("#perspective");
    if(e.checked){
        e=1;
    }
    else{
        e=0;
    }
    
    // alert(a);
    // alert(b);
    // alert(c);
    // alert(d);
    // alert(e);

    total = a+b+c+d+e;    
    
var x=document.querySelector("#low");

if (x.checked) {
    total=  total *1.5;
} 
else{
    total=total;
}

var y=document.querySelector("#medium");
if (y.checked) {
    total= total *3;
}
else{
    total= total;
}

var z=document.querySelector("#high"); 
if (z.checked) {
    total= total *5;
}
else{
    total=total;
}

total = total;
// alert(x)||alert(y)||alert(z);

// var p=document.querySelector("#2d");
// if (p.checked) {
//     total= total *10;
// }
// else{
//     total= total;
// }

// var q=document.querySelector("#3d"); 
// if (q.checked) {
//     total= total +15;
// }
// else{
//     total=total;
// }


alert('your total amount is : $' +total);
   
    // document.write('your total amount is : ' +total);

}
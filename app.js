let input=document.getElementById("inputLarge");
let btn=document.getElementById("btn");
let result=document.getElementById("result");




btn.addEventListener("click",show,true);
function show(e){

    if(input.value==""){
        alert("Input the number")
    } else{
    let number=input.value;
    let namba=new XMLHttpRequest();

namba.open("GET","http://numbersapi.com/"+number)

namba.onreadystatechange=function(){

    if(namba.readyState==4){       
       result.style.display="block";
        result.innerHTML=`
        <p class="number badge">${number}</p>
        <p>${namba.responseText}</p>`
    }}

namba.send()
}

}


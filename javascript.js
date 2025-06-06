const inputbox=document.getElementById("todo_input");

const todo_Container=document.getElementById("todo_Container")

function todoadd(){
    if(inputbox.value===" "){
        alert("Todo List Cant Be Empty");
    }else{
       let li=document.createElement("li");
       li.innerHTML=inputbox.value;
       todo_Container.appendChild(li);

       let span=document.createElement("span");
       span.innerHTML="\u00d7";
       li.appendChild(span)
    }
    inputbox.value=" ";
    Savedata();
}

todo_Container.addEventListener("click",function(e){
   if(e.target.tagName==="LI"){
        e.target.classList.toggle("Checked");
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
},false);

function Savedata(){
    localStorage.setItem("data",todo_Container.innerHTML);
}

function showdata(){
    todo_Container.innerHTML=localStorage.getItem("data");
}showdata()

let menu=document.getElementById("menu");
menu.style.maxHeight="0px";
function change(){
    if(menu.style.maxHeight==="0px"){
        menu.style.maxHeight="250px";
    }else{
        menu.style.maxHeight="0px";
    }
}
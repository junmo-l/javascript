let inputText = document.querySelector("#inputext");
let addButton = document.querySelector("#add_button");
let ulItems = document.querySelector("#ul_items");

function addItem(first) {
    console.log(`add_button : ${first}`)
    let 
    return true;
}

function printName()  {
    let name = document.getElementById('inputext').value;
    document.getElementById("result").innerText = name;
  }

function add(first=""){
    console.log(`add_button : ${first}`)
    let ulTag = document.querySelector('ul');
    let liTag = document.createElement('li');
    let liText = document.createTextNode('Sony');
    liTag.appendChild(liText);
    ulTag.appendChild(liTag);
    return true;
}

let addEvent = document.querySelector("#add_button");
addEvent.addEventListener('click', add);

let removeEvent = document.querySelector("#remove");
removeEvent.addEventListener('click', remove);
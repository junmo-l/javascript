// let ultag = document.querySelector('ul');
// let litag = document.createElement('li');
// let litext = document.createTextNode('Sony');
// litag.appendChild(litext);
// ultag.appendChild(litag);

// ultag.children[4].remove()
// ultag.remove()
let atag = document.querySelector('a');
atag.innerText = "Daum";
atag.setAttribute('class', 'daum');
atag.setAttribute("href","https://www.daum.net");

function add(first=""){
    console.log(`alert : ${first}`)
    let ultag = document.querySelector('ul');
    let litag = document.createElement('li');
    let litext = document.createTextNode('Sony');
    litag.appendChild(litext);
    ultag.appendChild(litag);
    return true;
}

let remove = function(first="") {
    let ultag = document.querySelector('ul');
    ultag.lastChild.remove();
    return true;
}

let addEvent = document.querySelector("#add");
// addEvent.addEventListener('click', add);
// addEvent.addEventListener('click', (first="")=>{
//     console.log(`alert : ${first}`)
//     let ultag = document.querySelector('ul');
//     let litag = document.createElement('li');
//     let litext = document.createTextNode('Sony');
//     litag.appendChild(litext);
//     ultag.appendChild(litag);
//     return true;
// });

addEvent.addEventListener('click', (event)=>{
    // console.log(event)
    console.log(event.target.innerText);
    
    let ultag = event.target;
    let litag = document.createElement('li');
    let litext = document.createTextNode('Sony');
    litag.appendChild(litext);
    ultag.appendChild(litag);

    return true;
});

let removeEvent = document.querySelector("#remove");
removeEvent.addEventListener('click', remove);

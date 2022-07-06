let ultag = document.querySelector('ul');
let litag = document.createElement('li');
let litext = document.createTextNode('Sony');
litag.appendChild(litext);
ultag.appendChild(litag);

ultag.children[4].remove()
// ultag.remove()
let atag = document.querySelector('a')
atag.setAttribute('class', 'daum')
atag.innerText = "Daum"

let remove = function (first="") {
    let ultag = document.querySelector('ul');
    ultag.lastChild.remove();
    return true;
}

function add(first=""){
    console.log(`alert : ${first}`)
    let ultag = document.querySelector('ul');
    let litag = document.createElement('li');
    let litext = document.createTextNode('Sony');
    litag.appendChild(litext);
    ultag.appendChild(litag);
    return true;
}

let addEvent = document.querySelector("#add");
addEvent.addEventListener('click', add);

let removeEvent = document.querySelector("#remove");
removeEvent.addEventListener('click', remove);

// 본인이벤트를 본인이알게끔 추가삭제 
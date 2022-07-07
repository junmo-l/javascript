

// addButton.addEventListener('click', () =>{
//     let hText = inputText.value;

//     let li = document.createElement('li');
//     li.setAttribute('class', 'item');

//     let spanTask = document.createElement('span');
//     spanTask.setAttribute('class', 'task');
//     spanTask.innerText = hText;
//     li.appendChild(spanTask);

//     let spanFunction = document.createElement('span');
//     spanFunction.setAttribute('class', 'span_function');
//     li.appendChild(spanFunction)
// });




// let addEvent = document.querySelector("#add_button");
// addEvent.addEventListener('click', addItem);


// function add(first=""){
//     console.log(`add_button : ${first}`);
//     let ulTag = document.querySelector('ul');
//     let liTag = document.createElement('li');
//     let liText = document.createTextNode('후..');
//     liTag.appendChild(liText);
//     ulTag.appendChild(liTag);
//     return true;
// }

// function remove(first=""){
//     console.log(`add_button : ${first}`);
//     let ultag = document.querySelector('ul');
//     ultag.lastChild.remove();
//     return true;
// }

// let addEvent = document.querySelector("#add_button");
// addEvent.addEventListener('click', add);

// let removeEvent = document.querySelector("#remove");
// removeEvent.addEventListener('click', remove);

let addButton = document.querySelector("#add_button");
let inputText = document.querySelector("#inputext");
let ulItems = document.querySelector("#ul_items");

addButton.addEventListener('click', ()=>{
    let todoText = inputText.value;

    let li = document.createElement('li');
    li.setAttribute('class', 'li_item');

    let spanTask = document.createElement('span');
    spanTask.setAttribute('class', 'task');
    spanTask.innerText = todoText;
    li.appendChild(spanTask);

    let spanFunction = document.createElement('span');
    spanFunction.setAttribute('class', 'span_function');
    li.appendChild(spanFunction);

    let spanLike = document.createElement('span');
    spanLike.setAttribute('class', 'like');
    spanFunction.appendChild(spanLike);

    let iFavor = document.createElement('i');
    iFavor.setAttribute('class', 'i_icons');
    iFavor.innerText = 'favorite';
    spanLike.appendChild(iFavor);

    let spanDelete = document.createElement('span');
    spanDelete.setAttribute('class', 'delete');
    spanFunction.appendChild(spanDelete);

    let iDelete = document.createElement('i');
    iDelete.setAttribute('class', 'i_icons');
    iDelete.innerText = 'delete';
    spanDelete.appendChild(iDelete);

    ulItems.appendChild(li);

    inputText.value = '';

    spanDelete.addEventListeer('click', ()=>{
        li.remove();
    });

});
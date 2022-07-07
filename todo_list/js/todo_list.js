// 1. add 클릭 시 inputxet 가져오기
// 2. 글자가 들어간 list item 추가
// 3. list item 추가 시 listener 기능추가

let addButton = document.querySelector('#add-button');
let inputText = document.querySelector('#inputext');
let items = document.querySelector('#items');

addButton.addEventListener('click', function(event){
    let task = inputText.value;
    console.log(task);

    // let item_html = `<li class="item"> 
    //     <span class="task">${task}</span> 
    //     <span class="manage"> 
    //         <span class="like"> 
    //             <i class="material-icons">favorite_border</i> 
    //         </span> 
    //         <span class="delete"> 
    //             <i class="material-icons">delete</i>
    //         </span>
    //     </span>
    // </li>` ;
    
    let item_html = `<li class="item">` +
        `<span class="task">${task}</span>` +
        `<span class="manage">` +
           ` <span class="like">` +
                `<i class="material-icons">favorite_border</i>` +
            `</span>` +
           ` <span class="delete">` +
                `<i class="material-icons">delete</i>` +
           ` </span>` +
        `</span>` +
   ` </li>` ;
    
    items.insertAdjacentHTML('beforeend', item_html);

    let target_item = document.querySelector('li:last-child');

    let like_icons = target_item.querySelector('.like>i')
    like_icons.addEventListener('click', (event)=>{
        let target = event.target;
        target.innerText = 'favorite';
        return true;
    });


    return true;
});


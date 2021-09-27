// JSONに送信するための配列
const listArry = [];

// 記入ボタン
const btn = document.querySelector('.btn');
// 記入欄
const text = document.querySelector('.todo');
const lists = document.querySelector('.lists'); //ulを指します

// JSONに要素があれば
if(listArry){
    const localLists = JSON.parse(localStorage.getItem('listArry'));
    console.log(localLists);
    listArry.push(localLists);
    localLists.forEach(localList => {
        // 記入したものをリスト表示するためにliタグを作成
        const li = document.createElement('li');
        li.textContent = '・' + localList;
        // 削除ボタンを作成
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '削除';
        deleteBtn.classList.add('delete');
        // 要素の連結(ulにliをliにdeleteボタンを)
        lists.appendChild(li);
        li.appendChild(deleteBtn);
        // 削除ボタンを押したら
        deleteBtn.addEventListener('click',function(){
            lists.removeChild(li);
        })
        });
}

// 記入ボタンをクリックしたら
btn.addEventListener('click',function(){
    // 記入したものをリスト表示するためにliタグを作成
    const li = document.createElement('li');
    li.textContent = '・' + text.value;
    submitJson();
    text.value = '';
    // 削除ボタンを作成
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '削除';
    deleteBtn.classList.add('delete');
    // 要素の連結(ulにliをliにdeleteボタンを)
    lists.appendChild(li);
    li.appendChild(deleteBtn);
    // 削除ボタンを押したら
    deleteBtn.addEventListener('click',function(){
        lists.removeChild(li);
    })
});

function submitJson(){
    listArry.push(text.value);
    console.log(listArry);
    localStorage.setItem('listArry',JSON.stringify(listArry));
}



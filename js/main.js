// JSONに送信するための配列
const listArry = [];

// 記入ボタン
const btn = document.querySelector('.btn');
// 記入欄
const text = document.querySelector('.todo');
const lists = document.querySelector('.lists'); //ulを指します

// JSONに要素があれば(localListsは配列)
const localLists = JSON.parse(localStorage.getItem('listArry'));
if(localLists){
    // forEachで一つ一つの要素に対して処理を行う
    localLists.forEach(localList => {
        // listArryに要素を代入
        listArry.push(localList);
        // 記入したものをリスト表示するためにliタグを作成
        const li = document.createElement('li');
        li.textContent = '・' + localList;
        li.class = localList;
        // 削除ボタンを作成
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '削除';
        deleteBtn.classList.add('delete');
        // 要素の連結(ulにliをliにdeleteボタンを)
        lists.appendChild(li);
        li.appendChild(deleteBtn);
        // 削除ボタンを押したら
        deleteBtn.addEventListener('click',function(){
            for(let i = 0;i < listArry.length; i++){
                if(li.class === listArry[i]){
                    listArry.splice(i,1);
                    submitJson();
                }
            }
            // (表面上の削除)
            lists.removeChild(li);
        });
    });
}

// 記入ボタンをクリックしたら
btn.addEventListener('click',function(){
    // 記入したものをリスト表示するためにliタグを作成
    const li = document.createElement('li');
    li.textContent = '・' + text.value;
    li.class = text.value;
    // 削除ボタンを作成
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '削除';
    deleteBtn.classList.add('delete');
    // 要素の連結(ulにliをliにdeleteボタンを)
    lists.appendChild(li);
    li.appendChild(deleteBtn);
    // JSONに送信するデータを配列にpushする
    listArry.push(text.value);
    submitJson();
    // 記入した直後に削除ボタンを押したら
    deleteBtn.addEventListener('click',function(){
        // ulから押したliを削除
        lists.removeChild(li);
        // listArryから削除した要素を削除
        for(let i = 0;i < listArry.length; i++){
            if(li.class === listArry[i]){
                listArry.splice(i,1);
                // 削除した状態でもう一度JSONにデータを送信
                submitJson();
            }
        }
    });
    text.value = '';
});

// JSONにデータを送信します
function submitJson(){
    localStorage.setItem('listArry',JSON.stringify(listArry));
}



let list = []
let localList = []
let localstorageList = []
async function Search() {
    let searchValue = document.getElementById("search").value;

    localstorageList.push(searchValue);

    
    await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}`)
    .then(res => res.json())
    .then(res => {
        list = res.items
    })
    
    if(localList.length !== 0) {
        localList.forEach((item, index) => {
            if(localList.indexOf(item) !== index) {
                localStorage.setItem("list", item)
            }
        })
    }

    if(list.length !== 0) {
        for(let i = 0; i < list.length; i++) {  
            console.log(list[i].volumeInfo.imageLinks.smallThumbnail)  
            let img = document.createElement('img');
            img.src = list[i].volumeInfo.imageLinks.smallThumbnail;
            let button = document.createElement('button');
            button.innerHTML = "buy";
            let p = document.createElement('p');
            p.innerText =  "title :" + list[i].volumeInfo.title;
            let ptag = document.createElement('p');
            ptag.innerText =  "author :" + list[i].volumeInfo.authors[0];
            let div = document.createElement('div');
            div.appendChild(img);
            div.appendChild(button);
            div.appendChild(p);
            div.appendChild(ptag);
            let div1 = document.createElement('div');
            div1.appendChild(div);
            
            const element = document.getElementById("div1");
            element.appendChild(div1);
        }}
        
        localStorage.setItem("list", localstorageList)
        //     await (() => {
    // }})()
}

(function(){
    var btn = document.getElementById("searchButton");
    btn.addEventListener("click", Search, true);
})()
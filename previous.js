document.getElementById("preDiv").style = "display: block";
let list = []

let list1 =[]
async function store() {

    // document.getElementById("preDiv").style = "display: block"
    let data = localStorage.getItem("list");
  
    list = data.split(",");
    let filter = list && list.filter((item, index) => {
        if (list.indexOf(item) === index) {
            return item
        }
    })
    
    for (let i = 0; i < filter.length; i++) {
        let button = document.createElement('button');
        button.id ="Dimpal"
        // let a = document.createElement('a');
        button.innerHTML = filter[i]
        // a.href = "index.html"
        let div = document.getElementById("preDiv")
        // button.append(a)
        div.append(button)
    }
}
store()
document.getElementById("venkatesh").addEventListener('click', async () => {
    let data = document.getElementById("venkatesh").innerText;
    console.log(data)
    await fetch(`https://www.googleapis.com/books/v1/volumes?q=${data}`)
    .then(res => res.json())
    .then(res => {
        list1 = res.items
    })

    if(list1.length) {
        for(let i = 0; i < list1.length; i++) {   
            let img = document.createElement('img');
            img.src = list1[i].volumeInfo.imageLinks.smallThumbnail;
            let button = document.createElement('button');
            button.innerHTML = "buy";
            let p = document.createElement('p');
            p.innerText =  "title :" + list1[i].volumeInfo.title;
            let ptag = document.createElement('p');
            ptag.innerText =  "author :" + list1[i].volumeInfo.authors[0];
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
})

document.getElementById("Clear").addEventListener('click', () => {
    localStorage.removeItem("list")
    document.getElementById("preDiv").style = "display: none"
})
document.getElementById("div1").style = "display: none"
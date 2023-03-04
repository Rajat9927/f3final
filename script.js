const form = document.getElementById('form');
const username = document.getElementById('username');
//const usernameValue = username.value;


form.addEventListener('submit', e => {
  e.preventDefault();
 
  getMenu(username.value);
});/*
function test(h){
  console.log(h);
}
*/



function getMenu(query) {
  console.log(query);
  fetch("https://www.googleapis.com/books/v1/volumes?q=${query}")
.then((response)=> response.json())
.then((data)=>{
  let productData = data.items;
  console.log(productData);
  let addd = document.getElementById('getdataa');
  // we use foor loop to access all product details.
  for (let i = 0; i < productData.length; i++) {
    let element = productData[i];
    let idNumber = element.id;
    let prodTitle = element.name;
    let prodDescription = element.dsc;
    let prodPrice = element.price;
    let prodRating = element.rate;
    let imageArr = element.imageLinks;
    //let prodCountry = element.country;
    //let imagee = imageArr[0];
    //console.log(imageArr)
    let crt = document.createElement("span");
    

    //here wee are creating html tag with the help of java script, inside for loop. It will create html for all elements

  
  let cardtt = document.createElement("span");
  cardtt.innerHTML = `<div class="card">
  <img class="card-img-top" src="${imageArr}" alt="Card image cap">
  <div class="card-body">
    <p class="card-text"><b>ID:</b> ${idNumber}</p>
    <h5 class="card-title"><b>Model:</b> ${prodTitle}</h5>
    <p class="card-text"><b>Product Description:</b> ${prodDescription}</p>
    <p class="card-text"><b>Price:</b> ${prodPrice}$</p>
    <p class="card-text"><b>Ratings:</b> ${prodRating}</p>
  </div>
</div>`
  addd.appendChild(cardtt);
  }
  //console.log(productData);

})
}






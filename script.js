let requ = new XMLHttpRequest();
let obj
let container = document.getElementsByClassName('container')[0]
requ.open('GET','https://dummyjson.com/products');
requ.send()

requ.addEventListener('readystatechange' , function(){
    if(requ.readyState == 4){
        obj = JSON.parse(requ.response).products
        // console.log(obj);
        displayData()
    }
})
const displayData = () =>{
    let data = ``;
    for (let i = 0; i < obj.length; i++) {
        data += `
        <div class="item">
        <div class="title">
            ${obj[i].title}
        </div>
        <div class="details">
            <img src="${obj[i].thumbnail}" alt="OK"/>
            ${obj[i].description}
        </div>
        <button class="btn" onclick="productData(${i})">Read More</button>
    </div>
        `
       }
       container.innerHTML = data
}
const productData = (index) =>
{

    let objData ={
        title:obj[index].title,
        thumbnail:obj[index].thumbnail,
        description:obj[index].description,
        price : obj[index].price,
        discountPercentage : obj[index].discountPercentage,
        brand : obj[index].brand,
        category : obj[index].category,
        images : obj[index].images,
    }
    localStorage.setItem('data' , JSON.stringify(objData))
    window.location.href =`http://127.0.0.1:5500/index2.html`

}
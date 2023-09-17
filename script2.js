let data = JSON.parse(localStorage.getItem("data"));
if (data == null) {
  window.location.href = `http://127.0.0.1:5500/`;
}
let klam = `
    <h1>${data.title}</h1>
    <div class="content">
        <div class="card">
            <img id='main' src=${data.thumbnail} alt="OK" />
            <p>${data.description}</p>
            <h5>${data.price}</h5>
            <div class="images">
            ${data.images.map((el) => `<img class="img" src="${el}">`)}
            </div>
        </div>
    </div>
    `;

let container = document.getElementsByClassName("container-items")[0];
container.innerHTML = klam;
let mainImg = document.getElementsByClassName("img");
for (let i = 0; i < mainImg.length; i++) {
  mainImg[i].addEventListener("click", function (e) {
    let imgSrc = e.target.getAttribute("src");
    document.getElementById("main").setAttribute("src", imgSrc);
  });
}
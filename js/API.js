
const url = "https://67767e6612a55a9a7d0be92f.mockapi.io/Nikeshoes";


async function getShoes() {
  const response = await fetch(url);
  const data = await response.json();
  showShoes(data);
}

function showShoes(data) {
  const showShoes = document.getElementById("showShoes");
  for (let i = 0; i < data.length; i++) {
    showShoes.innerHTML += `
            <div class="card" style="width: 18rem;">
        <img src="${data[i].Image}" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">${data[i].Name}</h5>
          <p class="card-text">${data[i].Price}</p> 
        </div>
      </div>
        `;
  }
}
//${}: dùng để bỏ thuộc tính vào trong dấu ``

getShoes();
